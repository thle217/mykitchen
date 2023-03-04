import { Link } from "react-router-dom";
import DataTable from "../../../components/DataTable";
import userAPI from "../../../services/userAPI";
import { useState, useEffect } from "react";

function UserList() {
    const [listUser, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllUser = async () => {
        try {
            setLoading(true);
            const response = await userAPI.getAll();
            setList(response.data.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };

    useEffect(() => {
        getAllUser();
    }, []);

    // const nameAPI = "products";
    const detailsPage = "/user-details";

    const columns = [
        {
            title: "ID",
            dataIndex: "user_id",
            align: "center",
        },
        {
            title: "Vai trò",
            dataIndex: "role_id",
        },
        {
            title: "Tên người dùng",
            dataIndex: "user_name",
        },
        {
            title: "Giới tính",
            dataIndex: "gender",
        },
        {
            title: "Ngày sinh",
            dataIndex: "dob",
        },
        {
            title: "Username",
            dataIndex: "username",
        },
    ];

    // XỬ LÝ DELETE
    const handleDelete = async (record) => {
        await userAPI.delete(record.user_id);
        getAllUser();
    };

    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 mb-4 bg-secondary">
                        <div className="d-flex">
                            <div>
                                <h4 className="text-dark">
                                    QUẢN LÝ NGƯỜI DÙNG
                                </h4>
                            </div>
                            <div>
                                <span className="button-add">
                                    <Link
                                        to={detailsPage}
                                        className="text-secondary"
                                    >
                                        Thêm mới
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="table-responsive col-md mt-4">
                                <div className="table">
                                    <DataTable
                                        list={listUser}
                                        detailsPage={detailsPage}
                                        columns={columns}
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
    );
}

export default UserList;
