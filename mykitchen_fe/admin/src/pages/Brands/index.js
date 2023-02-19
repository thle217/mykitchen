import { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import brandAPI from "../../services/brandAPI";

function BrandList() {


    //CALL API
    const [list, setList] = useState([]);
    useEffect(() => {
        const getAllProducts = async () => {
            try{
                const response = await brandAPI.getAll();
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
            dataIndex: "brand_id",
            align: "center"
        },
        {
            title: "Tên thương hiệu",
            dataIndex: "brand_name"
        },
        {
            title: "URL hình",
            dataIndex: "url"
        },
    ];


    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 mb-4 bg-secondary">
                        <div className="d-flex">
                            <h4 className="text-dark">QUẢN LÝ THƯƠNG HIỆU</h4>
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
                            <BrandDetails />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


//--------------------


function BrandDetails() {
    return (
        <div className="col-md-5 mt-4">
            <form action="brand-controller.php" method="post">
                <label htmlFor="inputName" className="col-form-label">Tên thương hiệu</label>
                <input type="text" className="form-control mb-3" id="inputName" name="txt-brand-name"/>
                <label htmlFor="inputUrl" className="col-form-label">URL Hình</label>
                <input type="text" className="form-control mb-3" id="inputUrl" name="txt-brand-url"/>
                <div className="float-end">
                    <button type="reset" className="btn-cancel btn btn-light mt-4 px-4 mx-2">HỦY</button>
                    <button type="submit" className="btn-save btn btn-dark mt-4 px-4" name="txt-brand-id">LƯU</button>
                </div>
            </form>
        </div>
    )
}

export {
    BrandList,
    BrandDetails
};