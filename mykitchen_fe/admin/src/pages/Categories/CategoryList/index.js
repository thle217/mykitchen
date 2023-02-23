import { useEffect, useState } from "react";
import DataTable from "../../../components/DataTable";
import categoryAPI from "../../../services/categoryAPI";
import CategoryDetails from "../CategoryDetails";

function CategoryList() {


    //CALL API
    const [list, setList] = useState([]);
    useEffect(() => {
        const getAllProducts = async () => {
            try{
                const response = await categoryAPI.getAll();
                setList(response.data.data);
            }
            catch(err){
                throw new Error(err);
            }
        };
        getAllProducts(); 
    },[]);


    //ĐỊNH DẠNG DATATABLE
    const columns = [
        {
            title: "ID",
            dataIndex: "category_id",
            align: "center"
        },
        {
            title: "Tên loại sản phẩm",
            dataIndex: "category_name"
        }
    ];


    //XỬ LÝ DELETE
    const handleDelete = (record) => {
        console.log('xóa cate', record);
    }


    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 mb-4 bg-secondary">
                        <div className="d-flex">
                            <h4 className="text-dark">QUẢN LÝ LOẠI SẢN PHẨM</h4>
                        </div>
                        <div className="row mt-5">
                            <div className="table-responsive col-md-7 mt-4">
                                <div className="table">
                                    <DataTable
                                        list={list}
                                        columns={columns}
                                        isBrandCategoryTable={true}
                                        handleDelete={handleDelete}
                                    />
                                </div>
                            </div>
                            <CategoryDetails />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryList;