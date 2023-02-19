function Login() {
    return (
        <h1>Login Page</h1>
    )
}

function Register() {
    return (
        <h1>Register Page</h1>
    )
}

function AccountInfo() {
    return (
        <div className="container-fluid pt-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5 mb-3"><span className="px-2">Thông Tin Tài Khoản</span></h2><br/>
                <h6 className="px-5 text-danger">Bạn cần cập nhật địa chỉ để mua hàng</h6>';
            </div>
            <div className="row px-xl-5 mt-5">
                <div className="col-lg-2 mb-5"></div>
                <div className="col-lg-8 mb-5">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form action="../controller/info-controller.php" method="POST">
                            <div className="control-group row mb-4">
                                <label className="text-dark col-md-4"><b>Họ và tên</b></label>
                                <input type="text" className="form-control col-md-8" style={{borderBottom: '1px solid #b9babd !important'}} name="user_name"/>
                            </div>
                            <div className="control-group row mb-4">
                                <label className="text-dark col-md-4"><b>Username</b></label>
                                <input type="text" className="form-control col-md-8" style={{borderBottom: '1px solid #b9babd !important'}} name="username"/>
                            </div>
                            <div className="control-group row mb-4">
                                <label className="text-dark col-md-4"><b>Email</b></label>
                                <input type="text" className="form-control col-md-8" style={{borderBottom: '1px solid #b9babd !important'}} name="email"/>
                            </div>
                            <div className="control-group row mb-4">
                                <label className="text-dark col-md-4"><b>Giới tính</b></label>
                                <div className="custom-control custom-radio mr-3">
                                    <input type="radio" className="custom-control-input" id="rdoNam" name="gender" value="Nam"/>
                                    <label className="custom-control-label" htmlFor="rdoNam">Nam</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" id="rdoNu" name="gender" value="Nữ"/>
                                    <label className="custom-control-label" htmlFor="rdoNu">Nữ</label>
                                </div>
                            </div>
                            <div className="control-group row mb-4">
                                <label className="text-dark col-md-4"><b>Ngày sinh</b></label>
                                <input type="date" className="form-control col-md-8" style={{borderBottom: '1px solid #b9babd !important'}} name="dob"/>
                            </div>
                            <div className="control-group row mb-4">
                                <label className="text-dark col-md-4"><b>Số điện thoại</b></label>
                                <input type="text" className="form-control col-md-8" style={{borderBottom: '1px solid #b9babd !important'}} name="phone" placeholder="Nhập số điện thoại"/>
                            </div>
                            <div className="control-group row mb-4">
                                <label className="text-dark col-md-4"><b>Số nhà và tên đường</b></label>
                                <input type="text" className="form-control col-md-8" style={{borderBottom: '1px solid #b9babd !important'}} name="street" placeholder="Nhập số nhà và tên đường"/>
                            </div>
                            <div className="control-group row mb-4">
                                <label className="text-dark col-md-4"><b>Phường/Xã</b></label>
                                <input type="text" className="form-control col-md-8" style={{borderBottom: '1px solid #b9babd !important'}} name="ward" placeholder="Nhập phường/xã"/>
                            </div>
                            <div className="control-group row mb-4">
                                <label className="text-dark col-md-4"><b>Quận/Huyện</b></label>
                                <input type="text" className="form-control col-md-8" style={{borderBottom: '1px solid #b9babd !important'}} name="district" placeholder="Nhập quận/huyện"/>
                            </div>
                            <div className="control-group row mb-4">
                                <label className="text-dark col-md-4"><b>Thành phố/Tỉnh</b></label>
                                <input type="text" className="form-control col-md-8" style={{borderBottom: '1px solid #b9babd !important'}} name="city" placeholder="Nhập thành phố/tỉnh"/>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <button className="btn btn-primary py-2 px-4 text-white mt-4" type="submit" name="btn-submit">LƯU THÔNG TIN</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-2 mb-5"></div>
            </div>
        </div>
    )
}

function Account(props) {

}

export default Account;