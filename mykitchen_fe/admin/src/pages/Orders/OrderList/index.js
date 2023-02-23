import DataTable from "../../../components/DataTable";

function OrderList() {
    const nameAPI = "products";
    const detailsPage = "/order-details";
    const columns = [
        {
            title: "Mã đơn hàng",
            dataIndex: "product_id"
        },
        {
            title: "Tên khách hàng",
            dataIndex: "category_name"
        },
        {
            title: "Tổng tiền",
            dataIndex: "product_name"
        },
        {
            title: "Ngày đặt",
            dataIndex: "status"
        },
        {
            title: "Trạng thái",
            dataIndex: "country"
        }
    ];

    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 mb-4 bg-secondary">
                        <div className="d-flex">
                            <h4 className="text-dark">QUẢN LÝ ĐƠN HÀNG</h4>
                        </div>
                        <div className="row mt-5">
                            <div className="table-responsive col-md mt-4">
                                <div className="table">
                                    <DataTable
                                        nameAPI={nameAPI} 
                                        detailsPage={detailsPage}
                                        columns={columns}
                                        isOrderTable={true}
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

export default OrderList;