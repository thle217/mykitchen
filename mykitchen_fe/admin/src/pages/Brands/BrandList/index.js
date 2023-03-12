import { useEffect, useState } from "react";
import DataTable from "../../../components/DataTable";
import brandAPI from "../../../services/brandAPI";
import BrandDetails from "../BrandDetails";

function BrandList() {


    //CALL API
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAll = async () => {
        try{
            setLoading(true);
            const response = await brandAPI.getAll();
            console.log(">>",response);
            setList(response.data);
            setLoading(false);
        }
        catch(err){
            throw new Error(err);
        }
    };
    
    useEffect(() => {
        getAll(); 

        const getAllProducts = async () => {
            try{
                setLoading(true);
                const response = await brandAPI.getAll();
                setList(response.data);
                setLoading(false);
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

    const handleDelete = async (record) => {
        await brandAPI.delete(record.brand_id);
        getAll();
    };

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
                                        isBrandCategoryTable={true}
                                        handleDelete={handleDelete}
                                        loading={loading}
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

export default BrandList;
