import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { successDialog } from "../../../components/Dialog";
import userAPI from "../../../services/userAPI";

function UserDetails() {
    //XỬ LÝ LƯU THÔNG TIN SẢN PHẨM VỪA CHỌN Ở DATATABLE
    const { state } = useLocation();
    let user = null;
    if (state) {
        //nếu có state thì lưu, không thì giữ nguyên là null
        user = state.record;
    }

    //TẠO STATE CHO CÁC THÔNG TIN
    const init = {
        role_id: user ? user.role_id : "",
        user_name: user ? user.user_name : "",
        gender: user ? user.gender : "",
        dob: user ? user.dob : "",
        phone: user ? user.phone : "",
        street: user ? user.street : "",
        ward: user ? user.ward : "",
        district: user ? user.district : "",
        city: user ? user.city : "",
        username: user ? user.username : "",
        password: user ? user.password : "",
    };

    const [data, setData] = useState(init);

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            role: data.role_id,
            name: data.user_name,
            gender: data.gender,
            dob: data.dob,
            phone: data.phone,
            street: data.street,
            ward: data.ward,
            district: data.district,
            city: data.city,
            username: data.username,
            password: data.password,
        };
        Swal.fire({
            title: "BẠN CÓ MUỐN LƯU THÔNG TIN?",
            confirmButtonText: "Lưu",
            showCancelButton: true,
            cancelButtonText: "Hủy",
            customClass: {
                title: "fs-5 text-dark",
                confirmButton: "bg-primary shadow-none",
                cancelButton: "bg-light shadow-none",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                //UPDATE
                if (user) {
                    handleUpdate(obj);
                }

                //CREATE
                else {
                    handleCreate(obj);
                }
            }
        });
    };

    // XỬ LÝ CREATE
    const handleCreate = async (obj) => {
        await userAPI.create(obj).then((res) => {
            if (res.status === 200) {
                successDialog();
            }
        });
    };

    //XỬ LÝ UPDATE
    const handleUpdate = async (obj) => {
        await userAPI.update(user.user_id, obj).then((res) => {
            if (res.status === 200) {
                successDialog();
            }
        });
    };

    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row bg-light rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 bg-secondary">
                        <Link to="/user-list" className="text-dark">
                            Quay lại
                        </Link>
                        <h6
                            className="mb-4 text-dark"
                            style={{ marginTop: "20px" }}
                        >
                            CHI TIẾT NGƯỜI DÙNG
                        </h6>
                        <form onSubmit={handleSubmit} method="post">
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label
                                        htmlFor="inputRole"
                                        className="col-form-label"
                                    >
                                        Vai trò
                                    </label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        id="inputRole"
                                        name="role_id"
                                        onChange={handleOnChange}
                                    >
                                        {user ? (
                                            <>
                                                <option value={user.role_id}>
                                                    {user.role_id === 1
                                                        ? "Khách hàng"
                                                        : user.role_id === 2
                                                        ? "Nhân viên"
                                                        : "Quản trị viên"}
                                                </option>
                                                <option value="1">
                                                    Khách hàng
                                                </option>
                                                <option value="2">
                                                    Nhân viên
                                                </option>
                                                <option value="3">
                                                    Quản trị viên
                                                </option>
                                            </>
                                        ) : (
                                            <>
                                                <option>Chọn vai trò</option>
                                                <option value="1">
                                                    Khách hàng
                                                </option>
                                                <option value="2">
                                                    Nhân viên
                                                </option>
                                                <option value="3">
                                                    Quản trị viên
                                                </option>
                                            </>
                                        )}
                                    </select>
                                </div>
                                <div className="col-4">
                                    <label
                                        htmlFor="inputName"
                                        className="col-form-label"
                                    >
                                        Tên người dùng
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        name="user_name"
                                        value={data.user_name}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="col-4">
                                    <label
                                        htmlFor="inputGender"
                                        className="col-form-label"
                                    >
                                        Giới tính
                                    </label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="status1"
                                            value="Nam"
                                            defaultChecked={
                                                data.gender === "Nam" ||
                                                data.gender === ""
                                                    ? true
                                                    : false
                                            }
                                            name="gender"
                                            onChange={handleOnChange}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="status1"
                                        >
                                            Nam
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="status2"
                                            value="Nữ"
                                            name="gender"
                                            onChange={handleOnChange}
                                            defaultChecked={
                                                data.gender === "Nữ"
                                                    ? true
                                                    : false
                                            }
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="status2"
                                        >
                                            Nữ
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label
                                        htmlFor="inputDob"
                                        className="col-form-label"
                                    >
                                        Ngày sinh
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="inputDob"
                                        name="dob"
                                        value={data.dob}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="col-4">
                                    <label
                                        htmlFor="inputPhone"
                                        className="col-form-label"
                                    >
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputPhone"
                                        name="phone"
                                        value={data.phone}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="col-4">
                                    <label
                                        htmlFor="inputStreet"
                                        className="col-form-label"
                                    >
                                        Số nhà và tên đường
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputStreet"
                                        name="street"
                                        value={data.street}
                                        onChange={handleOnChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label
                                        htmlFor="inputWard"
                                        className="col-form-label"
                                    >
                                        Phường/Xã
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputWard"
                                        name="ward"
                                        value={data.ward}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="col-4">
                                    <label
                                        htmlFor="inputDistrict"
                                        className="col-form-label"
                                    >
                                        Quận/Huyện
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputDistrict"
                                        name="district"
                                        value={data.district}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="col-4">
                                    <label
                                        htmlFor="inputCity"
                                        className="col-form-label"
                                    >
                                        Thành phố/Tỉnh
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCity"
                                        name="city"
                                        value={data.city}
                                        onChange={handleOnChange}
                                    />
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-4">
                                    <label
                                        htmlFor="inputUsername"
                                        className="col-form-label"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputUsername"
                                        name="username"
                                        value={data.username}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="col-4">
                                    <label
                                        htmlFor="inputPassword"
                                        className="col-form-label"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputPassword"
                                        name="password"
                                        value={data.password}
                                        onChange={handleOnChange}
                                    />
                                </div>
                            </div>
                            <input
                                type="reset"
                                value="HỦY"
                                className="btn btn-light user-insert-btn"
                            />
                            <input
                                type="submit"
                                value="LƯU"
                                className="btn btn-dark user-insert-btn"
                                onSubmit={handleSubmit}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;
