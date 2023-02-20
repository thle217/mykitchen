import { Link } from "react-router-dom";
import DataTable from "../../../components/DataTable";

function DiscountList() {
    const nameAPI = "products";
    const detailsPage = "/discount-details";
    const columns = [
        {
            title: "ID",
            dataIndex: "product_id",
            align: "center"
        },
        {
            title: "Tên chương trình",
            dataIndex: "category_name"
        },
        {
            title: "Mã giảm giá",
            dataIndex: "product_name"
        },
        {
            title: "Phần trăm giảm",
            dataIndex: "status"
        },
        {
            title: "Ngày bắt đầu",
            dataIndex: "country"
        },
        {
            title: "Ngày kết thúc",
            dataIndex: "country"
        },
        {
            title: "Trạng thái",
            dataIndex: "country"
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