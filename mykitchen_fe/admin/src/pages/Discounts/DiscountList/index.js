import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataTable from "../../../components/DataTable";
import discountAPI from "../../../services/discountAPI";

function DiscountList() {


    //CALL API
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAll = async () => {
        try {
            setLoading(true);
            const response = await discountAPI.getAll();
            setList(response.data.data);
            setLoading(false);
        }
        catch (err) {
            throw new Error(err);
        }
    }

    useEffect(() => {
        getAll();
    }, []);


    //XỬ LÝ DELETE
    const handleDelete = async (record) => {
        await discountAPI.delete(record.discount_id);
        getAll();
    }


    //ĐỊNH DẠNG COLUMNS CHO DATATABLE
    const nameAPI = "discount";
    const detailsPage = "/discount-details";
    const columns = [
        {
            title: "ID",
            dataIndex: "discount_id",
            align: "center"
        },
        {
            title: "Tên chương trình",
            dataIndex: "title"
        },
        {
            title: "Mã giảm giá",
            dataIndex: "code"
        },      
        {
            title: "Phần trăm giảm",
            dataIndex: "percent"
        },
        {
            title: "Ngày bắt đầu",
            dataIndex: "start_date"
        },
        {
            title: "Ngày kết thúc",
            dataIndex: "end_date"
        },
        {
            title: "Điều kiện giảm",
            dataIndex: "condition"
        },
    ];


    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 mb-4 bg-secondary">
                        <div className="d-flex">
                            <div>
                                <h4 className="text-dark">QUẢN LÝ KHUYẾN MÃI</h4>
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
                                        nameAPI={nameAPI}
                                        detailsPage={detailsPage} 
                                        columns={columns}
                                        list={list}
                                        handleDelete={handleDelete}
                                        loading={loading}
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

export default DiscountList;