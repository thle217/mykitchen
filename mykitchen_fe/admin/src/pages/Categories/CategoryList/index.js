import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { successDialog } from "../../../components/Dialog";
import DataTable from "../../../components/DataTable";
import categoryAPI from "../../../services/categoryAPI";
import CategoryDetails from "../CategoryDetails";

function CategoryList() {


    //LẤY DỮ LIỆU CHỌN CATEGORY TỪ STORE
    const category = useSelector(state => state.common);


    //CALL API
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAll = async () => {
        try{
            setLoading(true);
            const response = await categoryAPI.getAll();
            setList(response.data.data);
            setLoading(false);
        }
        catch(err){
            throw new Error(err);
        }
    };

    useEffect(() => {
        getAll(); 
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


    //XỬ LÝ CREATE
    const handleCreate = async (obj) => {
        await categoryAPI.create(obj)
        .then(res => {
            if (res.status === 200) {
                successDialog();
                getAll();
            }
        });
    }


    //XỬ LÝ UPDATE
    const handleUpdate = async (obj) => {
        await categoryAPI.update(category.category_id, obj)
        .then(res => {
            if (res.status === 200) {
                successDialog();
                getAll();
            }
        });
    }


    //XỬ LÝ DELETE
    const handleDelete = async (record) => {
        await categoryAPI.delete(record.category_id);
        getAll();
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
                                        loading={loading}
                                    />
                                </div>
                            </div>
                            <CategoryDetails
                                handleCreate={handleCreate}
                                handleUpdate={handleUpdate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryList;