import { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import categoryAPI from "../../services/categoryAPI";

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


//--------------------


function CategoryDetails() {
    return (
        <div className="col-md-5 mt-4">
            <form action="category-controller.php" method="post">
                <label htmlFor="inputName" className="col-form-label">Tên loại sản phẩm</label>
                <input type="text" className="form-control" id="inputName" name="txt-category-name"/>
                <div className="float-end">
                    <button type="reset" className="btn-cancel btn btn-light mt-4 px-4 mx-2">HỦY</button>
                    <button type="submit" className="btn-save btn btn-dark mt-4 px-4" name="txt-category-id">LƯU</button>
                </div>
            </form>
        </div>
    )
}

export {
    CategoryList,
    CategoryDetails
};