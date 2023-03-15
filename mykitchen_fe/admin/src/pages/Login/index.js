import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import userAPI from "../../services/userAPI";
import { login } from "../../slices/userSlice";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isIncorrect, setIsIncorrect] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();

        await userAPI.login({
            username: username,
            password: password
        })
        .then(res => {
            if(res.data.data) {
                if(res.data.data.role_id === 3 || res.data.data.role_id === 2) {
                    dispatch(login(res.data.data));
                    navigate("/home");
                }
                else {
                    navigate("/")
                    setIsIncorrect(true);
                }
            }
            else {
                navigate("/")
                setIsIncorrect(true);
            }
        })
    }

    return (
        <div className="container-fluid position-relative d-flex p-0 bg-light">
            <div className="container-fluid">
                <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                        <form action="" method="post" onSubmit={handleLogin} className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h3 className="text-primary">HN KITCHEN</h3>    
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="username"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Tên đăng nhập"
                                    name="txt-login-username"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                                <label htmlFor="floatingInput">Tên đăng nhập</label>
                            </div>
                            <div className="form-floating mb-5">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Mật khẩu"
                                    name="txt-login-password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <label htmlFor="floatingPassword">Mật khẩu</label>
                            </div>
                            <input type="submit" name="btn-login" value="ĐĂNG NHẬP" className="btn btn-dark py-3 w-100 mb-4"/>
                            {
                                isIncorrect
                                ?
                                <p className="text-danger">Thông tin đăng nhập không hợp lệ</p>
                                :
                                ""
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;