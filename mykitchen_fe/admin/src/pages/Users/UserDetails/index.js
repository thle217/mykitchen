import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import userAPI from "../../../services/userAPI";
function UserDetails() {
    //XỬ LÝ LƯU THÔNG TIN SẢN PHẨM VỪA CHỌN Ở DATATABLE
    const { state } = useLocation();
    let user = null;
    if (state) {
        //nếu có state thì lưu, không thì giữ nguyên là null
        user = state.record;
    }

    // console.log(user);
    //TẠO STATE CHO CÁC THÔNG TIN
    const init = {
        role: user ? user.product.role : "",
        name: "",
        gender: "Nam",
        dob: "",
        phone: "",
        street: "",
        ward: "",
        district: "",
        city: "",
        username: "",
        password: "",
    };

    const [data, setData] = useState(init);

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };
    // console.log(">>", data);

    const createUser = async (e) => {
        e.preventDefault();
        console.log(data);
        const res = await userAPI.create(data);
        console.log(res);
    };

    useEffect(() => {
        const getAllUser = async () => {
            const res = await userAPI.getAll();
            console.log(">>", res.data);
        };
        getAllUser();
    }, []);

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
                        {/* <?php
                        if ($error) {
                            echo '<h6 className="text-danger">CHÚ Ý: Vai trò - Username - Password không được trống !</h6>';
                        }
                        ?> */}
                        <form onSubmit={createUser} method="post">
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
                                        name="role"
                                        onChange={handleOnChange}
                                    >
                                        <option>Chọn vai trò</option>
                                        <option value="1">Khách hàng</option>
                                        <option value="2">Nhân viên</option>
                                        <option value="3">Quản trị viên</option>
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
                                        name="name"
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
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;
