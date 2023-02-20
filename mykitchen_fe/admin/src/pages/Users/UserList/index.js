import { Link } from "react-router-dom";
import DataTable from "../../../components/DataTable";

function UserList() {
    const nameAPI = "products";
    const detailsPage = "/user-details";
    const columns = [
        {
            title: "ID",
            dataIndex: "product_id",
            align: "center"
        },
        {
            title: "Vai trò",
            dataIndex: "category_name"
        },
        {
            title: "Tên người dùng",
            dataIndex: "product_name"
        },
        {
            title: "Giới tính",
            dataIndex: "status"
        },
        {
            title: "Ngày sinh",
            dataIndex: "country"
        },
        {
            title: "Username",
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
                                <h4 className="text-dark">QUẢN LÝ NGƯỜI DÙNG</h4>
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

export default UserList;