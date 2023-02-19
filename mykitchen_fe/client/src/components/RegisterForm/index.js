import { Link } from "react-router-dom";

function RegisterForm() {
    return (
        <form action="../controller/register-controller.php" method="POST">
            <div className="login-form" style={{backgroundColor: 'white'}}>
                <h2 style={{color: '#D19C97'}}>ĐĂNG KÝ</h2>
                <div className="form-input">
                    <label htmlFor="name" style={{color: '#D19C97'}}>Họ tên</label>
                    <input  type="text" name="name" style={{borderColor: '#6c757d', color: 'black'}}/>
                </div>
                <div className="form-input">
                    <label htmlFor="username" style={{color: '#D19C97'}}>Tên đăng nhập</label>
                    <input type="text" name="username" style={{borderColor: '#6c757d', color: 'black'}}/>
                </div>
                <div className="form-input">
                    <label htmlFor="name" style={{color: '#D19C97'}}>Email</label>
                    <input type="email" name="email" style={{borderColor: '#6c757d', color: 'black'}}/>
                </div>
                <div className="form-input">
                    <label htmlFor="name" style={{color: '#D19C97'}}>Mật khẩu</label>
                    <input type="password" name="password" style={{borderColor: '#6c757d', color: 'black'}}/>
                </div>
                <div className="form-input">
                    <label htmlFor="name" style={{color: '#D19C97'}}>Xác nhận mật khẩu</label>
                    <input type="password" name="repassword" style={{borderColor: '#6c757d', color: 'black'}}/>
                </div>
                <div className="form-input pt-30">
                    <input type="submit" name="submit" value="Đăng ký" style={{backgroundColor: '#D19C97', color: 'white'}}/>
                </div>
                <div className="d-flex w-100 justify-content-center">
                    <Link to="/login" className="registration mr-2" style={{color: '#D19C97', textDecoration: 'none'}}>Đăng nhập</Link>
                    <Link to="/" className="ml-2" style={{color: '#D19C97', textDecoration: 'none'}}>Trang chủ</Link>
                </div>
            </div>
        </form>
    )
}

export default RegisterForm;