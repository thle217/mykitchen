import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "../../../components/DataTable";
import productAPI from "../../../services/productAPI";

function ProductList() {


    //CALL API
    const [list, setList] = useState([]);

    const getAllProducts = async () => {
        try{
            const response = await productAPI.getAll();
            setList(response.data.data);
        }
        catch(err){
            throw new Error(err);
        }
    };

    useEffect(() => {
        getAllProducts();
    },[]);
    

    //ĐỊNH DẠNG DATATABLE
    const detailsPage = "/product-details";
    const columns = [
        {
            title: "ID",
            dataIndex: "product_id",
            align: "center"
        },
        {
            title: "Loại",
            dataIndex: "category_name"
        },
        {
            title: "Tên sản phẩm",
            dataIndex: "product_name"
        },
        {
            title: "Trạng Thái",
            dataIndex: "status"
        },
        {
            title: "Nơi sản xuất",
            dataIndex: "country"
        },
    ];


    //XỬ LÝ DELETE
    const handleDelete = async (product_id) => {
        await productAPI.delete(product_id);
        getAllProducts();
    }


    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 mb-4 bg-secondary">
                        <div className="d-flex">
                            <div>
                                <h4 className="text-dark">QUẢN LÝ SẢN PHẨM</h4>
                            </div>
                            <div>
                                <span className="button-add">
                                    <Link to={detailsPage} className="text-secondary">Thêm mới</Link>
                                </span>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="table-responsive col-md mt-4">
                                <div className="table">
                                    <DataTable
                                        list={list}
                                        detailsPage={detailsPage}
                                        columns={columns}
                                        handleDelete={handleDelete}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;