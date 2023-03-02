import { Link, useLocation } from "react-router-dom";
import { successDialog } from "../../../components/Dialog";
import { useState } from "react";
import Swal from "sweetalert2";
import discountAPI from "../../../services/discountAPI";

function DiscountDetails() {


    //XỬ LÝ LƯU THÔNG TIN KHUYẾN MÃI VỪA CHỌN Ở DATATABLE
    const { state } = useLocation();
    let discount = null;
    if (state) { //nếu có state thì lưu, không thì giữ nguyên là null
        discount = state.record;
    }


    const initialValues = {
        discount_id: discount ? discount.discount_id : "",
        title: discount ? discount.title : "",
        code: discount ? discount.code : "",
        percent: discount ? discount.percent : "",
        condition: discount ? discount.condition : "",
        start_date: discount ? discount.start_date : "",
        end_date: discount ? discount.end_date : "",
        description: discount ? discount.description : "",

    }
    const [values, setValues] = useState(initialValues);


    //XỬ LÝ THAY ĐỔI INPUT
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }


    //XỬ LÝ SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            title: values.title,
            code: values.code,
            percent: values.percent,
            condition: values.condition,
            start_date: values.start_date,
            end_date: values.end_date,
            description: values.description,
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
                if (result.isConfirmed) {

                    //UPDATE
                    if (discount) {
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
        await discountAPI.create(obj)
            .then(res => {
                if (res.status === 200) {
                    successDialog();
                    handleClear();
                }
            });
    }


    //XỬ LÝ UPDATE
    const handleUpdate = async (obj) => {
        await discountAPI.update(discount.discount_id, obj)
            .then(res => {
                if (res.status === 200) {
                    successDialog();
                }
            });
    }


    //XỬ LÝ CLEAR INPUT
    const handleClear = () => {
        setValues({
            title: "",
            code: "",
            percent: "",
            condition: "",
            start_date: "",
            end_date: "",
            description: "",
        })
    }


    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row bg-light rounded justify-content-center mx-0 mb-4">
                <div className="col-md">
                    <div className="rounded p-4 bg-secondary">
                        <Link to="/discount-list" className="text-dark">Quay lại</Link>
                        <h6 className="mb-4 text-dark" style={{ marginTop: '20px' }}>CHI TIẾT KHUYẾN MÃI</h6>
                        <form action="user-insert-controller.php" method="post" onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label htmlFor="inputName" className="col-form-label">Tên chương trình</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        name="title"
                                        value={values.title}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputCode" className="col-form-label">Mã giảm giá</label>
                                    <input type="text"
                                        className="form-control"
                                        id="inputCode"
                                        name="code"
                                        value={values.code}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputPercent" className="col-form-label">Phần trăm giảm</label>
                                    <input type="text"
                                        className="form-control"
                                        id="inputPercent"
                                        name="percent"
                                        value={values.percent}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label htmlFor="inputCondition" className="col-form-label">Điều kiện</label>
                                    <input type="text"
                                        className="form-control"
                                        id="inputCondition"
                                        name="condition"
                                        value={values.condition}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputStart" className="col-form-label">Ngày bắt đầu</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="inputStart"
                                        name="start_date"
                                        value={values.start_date}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputEnd" className="col-form-label">Ngày kết thúc</label>
                                    <input type="date"
                                        className="form-control"
                                        id="inputEnd"
                                        name="end_date"
                                        value={values.end_date}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-8">
                                    <label htmlFor="inputDescription" className="col-form-label">Mô tả</label>
                                    <div className="form-floating">
                                        <textarea className="form-control"
                                            id="inputDescription"
                                            style={{ height: '100px' }}
                                            name="description"
                                            value={values.description}
                                            onChange={handleChangeInput}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <input type="reset" value="HỦY"
                                onClick={handleClear}
                                className="btn btn-light user-insert-btn" />
                            <input type="submit" value="LƯU" className="btn btn-dark user-insert-btn" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscountDetails;