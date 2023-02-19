import { Link } from "react-router-dom";
import DataTable from "../../components/DataTable";

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

function UserDetails() {
    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row bg-light rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 bg-secondary">
                        <Link to="/user-list" className="text-dark">Quay lại</Link>
                        <h6 className="mb-4 text-dark" style={{marginTop: '20px'}}>CHI TIẾT NGƯỜI DÙNG</h6>
                        {/* <?php
                        if ($error) {
                            echo '<h6 className="text-danger">CHÚ Ý: Vai trò - Username - Password không được trống !</h6>';
                        }
                        ?> */}
                        <form action="user-insert-controller.php" method="post">
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label htmlFor="inputRole" className="col-form-label">Vai trò</label>
                                    <select className="form-select" aria-label="Default select example" id="inputRole" name="option-user-role">
                                        <option>Chọn vai trò</option>
                                        <option value="1">Khách hàng</option>
                                        <option value="2">Nhân viên</option>
                                        <option value="3">Quản trị viên</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputName" className="col-form-label">Tên người dùng</label>
                                    <input type="text" className="form-control" id="inputName" name="txt-user-name"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputGender" className="col-form-label">Giới tính</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" id="status1" value="Nam" defaultChecked name="rdo-user-gender"/>
                                        <label className="form-check-label" htmlFor="status1">Nam</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" id="status2" value="Nữ" name="rdo-user-gender"/>
                                        <label className="form-check-label" htmlFor="status2">Nữ</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label htmlFor="inputDob" className="col-form-label">Ngày sinh</label>
                                    <input type="date" className="form-control" id="inputDob" name="date-user-dob"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputPhone" className="col-form-label">Số điện thoại</label>
                                    <input type="text" className="form-control" id="inputPhone" name="txt-user-phone"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputStreet" className="col-form-label">Số nhà và tên đường</label>
                                    <input type="text" className="form-control" id="inputStreet" name="txt-user-street"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label htmlFor="inputWard" className="col-form-label">Phường/Xã</label>
                                    <input type="text" className="form-control" id="inputWard" name="txt-user-ward"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputDistrict" className="col-form-label">Quận/Huyện</label>
                                    <input type="text" className="form-control" id="inputDistrict" name="txt-user-district"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputCity" className="col-form-label">Thành phố/Tỉnh</label>
                                    <input type="text" className="form-control" id="inputCity" name="txt-user-city"/>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-4">
                                    <label htmlFor="inputUsername" className="col-form-label">Username</label>
                                    <input type="text" className="form-control" id="inputUsername" name="txt-user-username"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputPassword" className="col-form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" name="txt-user-password"/>
                                </div>
                            </div>
                            <input type="reset" value="HỦY" className="btn btn-light user-insert-btn"/>
                            <input type="submit" value="LƯU" className="btn btn-dark user-insert-btn"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    UserList,
    UserDetails
};