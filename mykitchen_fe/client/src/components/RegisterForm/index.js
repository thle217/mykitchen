import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import userAPI from "../../services/userAPI";
import cartAPI from "../../services/cartAPI";

function RegisterForm() {

    //TẠO STATE CHO CÁC THÔNG TIN
    const init = {
        name: "",
        username: "",
        email: "",
        password: "",
        repassword: "",
    };

    const navigate = useNavigate();

    const [data, setData] = useState(init);

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };
    const handleRegister = async (e) => {
        e.preventDefault();

        if (
            data.name === "" ||
            data.username === "" ||
            data.email === "" ||
            data.password === "" ||
            data.repassword === ""
        ) {
            toast.error("Vui lòng nhập đầy đủ thông tin");
        } else {
            if (data.password !== data.repassword) {  
                toast.error("Mật khẩu không khớp");
              
            } else {
                let obj = {
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    password: data.password,
                };

                await userAPI.register(obj)
                .then(async res => {
                    if(res.status === 200) {
                        await cartAPI.create(res.data.userId);
                        toast.success("Đăng ký thành công");
                        navigate("/login");
                    }
                })
            }
        }
    };
    return (
        <form onSubmit={handleRegister} method="POST">
            <div className="login-form" style={{ backgroundColor: "white" }}>
                <h2 style={{ color: "#D19C97" }}>ĐĂNG KÝ</h2>
                <div className="form-input">
                    <label htmlFor="name" style={{ color: "#D19C97" }}>
                        Họ tên
                    </label>
                    <input
                        type="text"
                        name="name"
                        style={{ borderColor: "#6c757d", color: "black" }}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="username" style={{ color: "#D19C97" }}>
                        Tên đăng nhập
                    </label>
                    <input
                        type="text"
                        name="username"
                        style={{ borderColor: "#6c757d", color: "black" }}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="name" style={{ color: "#D19C97" }}>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        style={{ borderColor: "#6c757d", color: "black" }}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="name" style={{ color: "#D19C97" }}>
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        name="password"
                        style={{ borderColor: "#6c757d", color: "black" }}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="name" style={{ color: "#D19C97" }}>
                        Xác nhận mật khẩu
                    </label>
                    <input
                        type="password"
                        name="repassword"
                        style={{ borderColor: "#6c757d", color: "black" }}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-input pt-30">
                    <input
                        type="submit"
                        name="submit"
                        value="Đăng ký"
                        style={{ backgroundColor: "#D19C97", color: "white" }}
                    />
                </div>
                <div className="d-flex w-100 justify-content-center">
                    <Link
                        to="/login"
                        className="registration mr-2"
                        style={{ color: "#D19C97", textDecoration: "none" }}
                    >
                        Đăng nhập
                    </Link>
                    <Link
                        to="/"
                        className="ml-2"
                        style={{ color: "#D19C97", textDecoration: "none" }}
                    >
                        Trang chủ
                    </Link>
                </div>
            </div>
        </form>
    );
}

export default RegisterForm;
