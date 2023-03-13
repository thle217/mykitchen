import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import userAPI from "../../services/userAPI";
import { toast } from "react-toastify";
import {useDispatch} from 'react-redux'
import {login} from "../../slices/userSlice";
function LoginForm() {
    const init = {
        username: "",
        password: "",
    };
    const dispatch=useDispatch()

    const navigate = useNavigate();
    const [data, setData] = useState(init);
    const [err, setErr] = useState("");

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };
    // console.log(">>>>", data);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let obj = {
            username: data.username,
            password: data.password,
        };

        if (data.username === "" || data.password === "") {
            setErr("Vui lòng nhập đầy đủ thông tin !");
        } else {
            let a = await userAPI.login(obj);
            if (a.data.result === "User not found") {
                setErr("Tài khoản không tồn tại !");
            } else {
                if (a.data.result === "Incorrect account or password") {
                    setErr("Mật khẩu không chính xác");
                } else {
                    dispatch(login(a.data));
                    navigate("/");
                    toast.success("Đăng nhập thành công", {autoClose: 1000, hideProgressBar: false});
                }
            }
        }
    };
    return (
        <form onSubmit={handleSubmit} method="post">
            <div className="login-form" style={{ backgroundColor: "white" }}>
                <h2 style={{ color: "#D19C97" }}>ĐĂNG NHẬP</h2>
                <div className="form-input">
                    <label htmlFor="name" style={{ color: "#D19C97" }}>
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
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        name="password"
                        style={{ borderColor: "#6c757d", color: "black" }}
                        onChange={handleOnChange}
                    />
                </div>
                <span style={{ color: "red" }}>{err}</span>
                <div className="form-input pt-30">
                    <input
                        type="submit"
                        name="submit"
                        value="Đăng nhập"
                        style={{ backgroundColor: "#D19C97", color: "white" }}
                    />
                </div>
                <div className="d-flex w-100 justify-content-center">
                    <Link
                        to="/register"
                        className="registration mr-2"
                        style={{ color: "#D19C97", textDecoration: "none" }}
                    >
                        Đăng ký
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

export default LoginForm;
