import { useState } from "react";

function Checkout() {
    const [isAnotherAddress, setIsAnotherAddress] = useState(false);

    const handleOnChange = () => {
        setIsAnotherAddress(!isAnotherAddress);
    }

    return (
        <div className="container-fluid pt-5">
            <form action="order-controller.php" method="post">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <div className="mb-4">
                            <h4 className="font-weight-semi-bold">Địa Chỉ Hiện Tại</h4>
                            {/* <?php
                            if (empty($user['phone']) || empty($user['street']) || empty($user['ward']) || empty($user['district']) || empty($user['city'])) {
                                echo '<a href="info-controller.php" className="mt-2">Cập nhật địa chỉ tài khoản</a>';
                            }
                            ?> */}
                            <div className="row mt-4">
                                <div className="col-md-6 form-group mt-2 mb-4">
                                    <label className="text-dark"><b>Họ và tên</b></label>
                                    <input readOnly className="form-control bg-transparent" type="text" value=""/>
                                </div>
                                <div className="col-md-6 form-group mt-2 mb-4">
                                    <label className="text-dark"><b>Số điện thoại</b></label>
                                    <input readOnly className="form-control bg-transparent" type="text" value="" placeholder="Bạn chưa cập nhật số điện thoại"/>
                                </div>
                                <div className="col-md-6 form-group mt-2 mb-4">
                                    <label className="text-dark"><b>Số nhà và tên đường</b></label>
                                    <input readOnly className="form-control bg-transparent" type="text" value="" placeholder="Bạn chưa cập nhật địa chỉ"/>
                                </div>
                                <div className="col-md-6 form-group mt-2 mb-4">
                                    <label className="text-dark"><b>Phường/Xã</b></label>
                                    <input readOnly className="form-control bg-transparent" type="text" value="" placeholder="Bạn chưa cập nhật địa chỉ"/>
                                </div>
                                <div className="col-md-6 form-group mt-2 mb-4">
                                    <label className="text-dark"><b>Quận/Huyện</b></label>
                                    <input readOnly className="form-control bg-transparent" type="text" value="" placeholder="Bạn chưa cập nhật địa chỉ"/>
                                </div>
                                <div className="col-md-6 form-group mt-2 mb-4">
                                    <label className="text-dark"><b>Thành phố/Tỉnh</b></label>
                                    <input readOnly className="form-control bg-transparent" type="text" value="" placeholder="Bạn chưa cập nhật địa chỉ"/>
                                </div>
                                <div className="col-md-12 form-group mt-4">
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="currentAddress"
                                            name="rdo-checkout-address"
                                            value="current-address"
                                            defaultChecked
                                            onChange={handleOnChange}/>
                                        <label className="custom-control-label" htmlFor="currentAddress">Giao hàng tới <span className="text-primary">địa chỉ hiện tại</span></label>
                                    </div>
                                </div>
                                <div className="col-md-12 form-group mb-4">
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="shipto"
                                            name="rdo-checkout-address"
                                            value="another-address"
                                            onChange={handleOnChange}/>
                                        <label className="custom-control-label" htmlFor="shipto" data-toggle="collapse" data-target="#shipping-address">Giao hàng tới <span className="text-primary">địa chỉ mới</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4"/>
                        <div className={`${isAnotherAddress ? '' : 'collapse'}`} id="shipping-address">
                            <h4 className="font-weight-semi-bold">Địa Chỉ Mới</h4>
                            <div className="row mt-4">
                                <div className="col-md-6 form-group mt-2 mb-4">
                                    <label className="text-dark"><b>Họ và tên</b></label>
                                    <input className="form-control" type="text" placeholder="Nguyễn Văn A" name="txt-checkout-name"/>
                                </div>
                                <div className="col-md-6 form-group mt-2 mb-4">
                                    <label className="text-dark"><b>Số điện thoại</b></label>
                                    <input className="form-control" type="text" placeholder="0901234567" name="txt-checkout-phone"/>
                                </div>
                                <div className="col-md-6 form-group mt-2 mb-4">
                                    <label className="text-dark"><b>Số nhà và tên đường</b></label>
                                    <input className="form-control" type="text" placeholder="123 Trần Hưng Đạo" name="txt-checkout-street"/>
                                </div>
                                <div className="col-md-6 form-group mt-2 mb-4">
                                    <label className="text-dark"><b>Phường/Xã</b></label>
                                    <input className="form-control" type="text" placeholder="Phường 5" name="txt-checkout-ward"/>
                                </div>
                                <div className="col-md-6 form-group mt-2 mb-4">
                                    <label className="text-dark"><b>Quận/Huyện</b></label>
                                    <input className="form-control" type="text" placeholder="Quận 5" name="txt-checkout-district"/>
                                </div>
                                <div className="col-md-6 form-group mt-2 mb-4">
                                    <label className="text-dark"><b>Thành phố/Tỉnh</b></label>
                                    <input className="form-control" type="text" placeholder="Thành phố Hồ Chí Minh" name="txt-checkout-city"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h5 className="font-weight-semi-bold m-0">Thông Tin Đơn Hàng</h5>
                            </div>
                            <div className="card-body">
                                <h5 className="font-weight-medium mb-3">Sản phẩm</h5>
                                <div className="d-flex justify-content-between">
                                    <p className="text-truncate">Tên sản phẩm</p>
                                    <p>Số lượng * đơn giá</p>
                                </div>
                                <hr className="mt-0"/>
                                <div className="d-flex justify-content-between mb-3 pt-1">
                                    <h6 className="font-weight-medium">Thành tiền sản phẩm</h6>
                                    <h6 className="font-weight-medium">Thành tiền</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Chiết khấu</h6>
                                    <h6 className="font-weight-medium">0</h6>
                                </div>
                            </div>
                            <div className="card-footer border-secondary bg-transparent">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 className="font-weight-bold">TỔNG TIỀN</h5>
                                </div>
                                <input type="text" readOnly name="txt-checkout-totalprice" style={{width: '250px'}} className="border-0 text-danger font-weight-bolder form-control-lg form-control bg-transparent px-0" value="TỔNG TIỀN"/>
                            </div>
                        </div>
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h5 className="font-weight-semi-bold m-0">Phương Thức Thanh Toán</h5>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name="rdo-checkout-payment" value="Trả trước" id="prepay"/>
                                        <label className="custom-control-label" htmlFor="prepay">Trả trước</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name="rdo-checkout-payment" value="Trả sau" id="cod"/>
                                        <label className="custom-control-label" htmlFor="cod">Trả sau</label>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer border-secondary bg-transparent">
                                <button type="submit" name="btn-submit-order" className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3 text-white btn-order">ĐẶT HÀNG</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Checkout;