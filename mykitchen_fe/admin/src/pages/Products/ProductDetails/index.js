import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Swal from "sweetalert2";
import brandAPI from "../../../services/brandAPI";
import categoryAPI from "../../../services/categoryAPI";
import productAPI from "../../../services/productAPI";
import { successDialog } from "../../../components/Dialog";

function ProductDetails() {


    //XỬ LÝ LƯU THÔNG TIN SẢN PHẨM VỪA CHỌN Ở DATATABLE
    const { state } = useLocation();
    let product = null;
    if(state) { //nếu có state thì lưu, không thì giữ nguyên là null
        product = state.record;
    }


    //TẠO STATE CHO CÁC THÔNG TIN
    const initialValues = {
        brand_id: product ? product.brand_id : "",
        category_id: product ? product.category_id : "",
        brand_name: product ? product.brand_name : "",
        category_name: product ? product.category_name : "",
        product_name: product ? product.product_name : "",
        price: product ? product.price : "",
        url: product ? product.url : "",
        size: product ? product.size : "",
        weight: product ? product.weight : "",
        capacity: product ? product.capacity : "",
        wattage: product ? product.wattage : "",
        material: product ? product.material : "",
        country: product ? product.country : "",
        description: product ? product.description : "",
        status: product ? product.status : "", 
    }
    const [values, setValues] = useState(initialValues);
    const [brandList, setBrandList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);


    //XỬ LÝ LẤY API BRAND - CATEGORY
    useEffect(() => {
        const getAllBrands = async () => {
            const res = await brandAPI.getAll();
            setBrandList(res.data.data);
        };
        const getAllCategories = async () => {
            const res = await categoryAPI.getAll();
            setCategoryList(res.data.data);
        };

        getAllBrands();
        getAllCategories();
    }, []);


    //XỬ LÝ THAY ĐỔI INPUT
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }


    //XỬ LÝ THAY ĐỔI BRAND - CATEGOTY 
    const handleChangeBrandCategory = (e) => {
        const { id, name } = e.target;
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index];

        setValues({
            ...values,
            [id]: el.getAttribute('id'),
            [name]: el.getAttribute('value')
        })
    }


    //XỬ LÝ SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            brand_id: values.brand_id,
            category_id: values.category_id,
            product_name: values.product_name,
            size: values.size,
            weight: values.weight,
            material: values.material,
            country: values.country,
            price: values.price,
            status: values.status,
            description: values.description,
            capacity: values.capacity,
            wattage: values.wattage,
            url: values.url
        }

        Swal.fire({
            title: 'BẠN CÓ MUỐN LƯU THÔNG TIN?',
            confirmButtonText: 'Lưu',
            showCancelButton: true,
            cancelButtonText: 'Hủy',
            customClass: {
                title: 'fs-5 text-dark',
                confirmButton: 'bg-primary shadow-none',
                cancelButton: 'bg-light shadow-none'
            }
        })
        .then(result => {
            if(result.isConfirmed) {

                //UPDATE
                if(product) {
                    handleUpdate(obj);
                }

                //CREATE
                else {
                    handleCreate(obj);
                }
            }
        });
    }


    //XỬ LÝ CREATE
    const handleCreate = async (obj) => {
        await productAPI.create(obj)
        .then(res => {
            if(res.status === 201) {
                successDialog();
                handleClear();
            }
        });
    }


    //XỬ LÝ UPDATE
    const handleUpdate = async (obj) => {
        await productAPI.update(product.product_id, obj)
        .then(res => {
            if(res.status === 200) {
                successDialog();
            }
        });
    }


    //XỬ LÝ CLEAR INPUT
    const handleClear = () => {
        setValues({
            brand_id: "",
            category_id: "",
            brand_name: "",
            category_name: "",
            product_name: "",
            price: "",
            url: "",
            size: "",
            weight: "",
            capacity: "",
            wattage: "",
            material: "",
            country: "",
            description: "",
            status: "", 
        })
    }


    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row bg-light rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 mb-4 bg-secondary">
                        <Link to="/product-list" className="text-dark">Quay lại</Link>
                        <h6 className="mb-4 text-dark" style={{marginTop: '20px'}}>CHI TIẾT SẢN PHẨM</h6>
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label htmlFor="brand_id" className="col-form-label">Thương hiệu</label>
                                    <select
                                        value={values.brand_name ? values.brand_name : "choose"}
                                        onChange={handleChangeBrandCategory}
                                        className="form-select"
                                        aria-label="Default select example"
                                        id="brand_id"
                                        name="brand_name"
                                    >
                                        <option value="choose">Chọn thương hiệu</option>
                                        {
                                            brandList.map(brand => {
                                                return (
                                                    <option
                                                        value={brand.brand_name}
                                                        key={brand.brand_id}
                                                        id={brand.brand_id}
                                                    >
                                                        {brand.brand_name}
                                                    </option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-8">
                                    <label htmlFor="inputName" className="col-form-label">Tên sản phẩm</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        name="product_name"
                                        value={values.product_name}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label htmlFor="category_id" className="col-form-label">Loại sản phẩm</label>
                                    <select
                                        value={values.category_name ? values.category_name : "choose"}
                                        onChange={handleChangeBrandCategory}
                                        className="form-select"
                                        aria-label="Default select example"
                                        id="category_id"
                                        name="category_name"
                                    >
                                        <option value="choose">Chọn loại sản phẩm</option>
                                        {
                                            categoryList.map(category => {
                                                return (
                                                    <option
                                                        value={category.category_name}
                                                        key={category.category_id}
                                                        id={category.category_id}
                                                    >
                                                        {category.category_name}
                                                    </option>
                                                ) 
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputPrice" className="col-form-label">Đơn giá</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputPrice"
                                        name="price"
                                        value={values.price}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputUrl" className="col-form-label">URL Hình</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputUrl"
                                        name="url"
                                        value={values.url}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label htmlFor="inputSize" className="col-form-label">Kích thước</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputSize"
                                        name="size"
                                        value={values.size}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputWeight" className="col-form-label">Trọng lượng</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputWeight"
                                        name="weight"
                                        value={values.weight}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputCapacity" className="col-form-label">Dung tích</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCapacity"
                                        name="capacity"
                                        value={values.capacity}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label htmlFor="inputWattage" className="col-form-label">Công suất</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputWattage"
                                        name="wattage"
                                        value={values.wattage}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputMaterial" className="col-form-label">Chất liệu</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputMaterial"
                                        name="material"
                                        value={values.material}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputCountry" className="col-form-label">Nơi sản xuất</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCountry"
                                        name="country"
                                        value={values.country}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-8">
                                    <label htmlFor="inputDescription" className="col-sm-2 col-form-label">Mô tả sản phẩm</label>
                                    <div className="form-floating">
                                        <textarea
                                            className="form-control"
                                            id="inputDescription"
                                            style={{height: '200px'}}
                                            name="description"
                                            value={values.description}
                                            onChange={handleChangeInput}
                                        />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputStatus" className="col-form-label">Trạng thái</label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="status1"
                                            name="status"
                                            value="Active"
                                            onChange={handleChangeInput}
                                            defaultChecked={values.status === "Active" || values.status === "" ? true : false}

                                            />
                                        <label className="form-check-label" htmlFor="status1">Active</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="status2"
                                            name="status"
                                            value="Inactive"
                                            onChange={handleChangeInput}
                                            defaultChecked={values.status === "Inactive" ? true : false}
                                        />
                                        <label className="form-check-label" htmlFor="status2">Inactive</label>
                                    </div>
                                </div>
                            </div>
                            <input
                                type="button"
                                value="CLEAR"
                                className="btn btn-light product-insert-btn"
                                onClick={handleClear}
                            />
                            <input type="submit" value="LƯU" className="btn btn-dark product-insert-btn"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;