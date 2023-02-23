import { Link } from "react-router-dom";

function OrderDetails() {
    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row bg-light rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 mb-4 bg-secondary">
                        <Link to="/order-list" className="text-dark">Quay lại</Link>
                        <h6 className="mb-4 text-dark" style={{marginTop: '20px'}}>CHI TIẾT ĐƠN HÀNG</h6>
                        <form action="order-detail-controller.php?action=confirm&id=<?php echo $order['id'] ?>" method="post">
                            <div className="row mb-3">
                                <div className="col-3">
                                    <label htmlFor="inputOrderId" className="col-form-label">Mã đơn hàng</label>
                                    <input type="text" readOnly style={{border: '0px !important'}} className="form-control-plaintext" id="inputOrderId" name="txt-order-id" value=""/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="inputDate" className="col-form-label">Ngày đặt hàng</label>
                                    <input type="text" readOnly style={{border: '0px !important'}} className="form-control-plaintext" id="inputDate" name="txt-date" value=""/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="inputPaymentMethod" className="col-form-label">PT thanh toán</label>
                                    <input type="text" readOnly style={{border: '0px !important'}} className="form-control-plaintext" id="inputPaymentMethod" name="txt-payment" value=""/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="inputStatus" className="col-form-label">Trạng thái</label>
                                    <input type="text" readOnly style={{border: '0px !important'}} className="form-control-plaintext text-danger" id="inputStatus" name="txt-status" value=""/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3">
                                    <label htmlFor="inputUserId" className="col-form-label">Mã khách hàng</label>
                                    <input type="text" readOnly style={{border: '0px !important'}} className="form-control-plaintext" id="inputUserId" name="txt-user-id" value=""/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="inputUserName" className="col-form-label">Họ tên khách hàng</label>
                                    <input type="text" readOnly style={{border: '0px !important'}} className="form-control-plaintext" id="inputUserName" name="txt-user-name" value=""/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="inputReceiver" className="col-form-label">Họ tên người nhận</label>
                                    <input type="text" readOnly style={{border: '0px !important'}} className="form-control-plaintext" id="inputReceiver" name="txt-receiver" value=""/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="inputPhone" className="col-form-label">Số điện thoại người nhận</label>
                                    <input type="text" readOnly style={{border: '0px !important'}} className="form-control-plaintext" id="inputPhone" name="txt-phone" value=""/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3">
                                    <label htmlFor="inputStreet" className="col-form-label">Số nhà và tên đường</label>
                                    <input type="text" readOnly style={{border: '0px !important'}} className="form-control-plaintext" id="inputStreet" name="txt-street" value=""/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="inputWard" className="col-form-label">Phường/Xã</label>
                                    <input type="text" readOnly style={{border: '0px !important'}} className="form-control-plaintext" id="inputWard" name="txt-ward" value=""/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="inputDistrict" className="col-form-label">Quận/Huyện</label>
                                    <input type="text" readOnly style={{border: '0px !important'}} className="form-control-plaintext" id="inputDistrict" name="txt-district" value=""/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="inputCity" className="col-form-label">Thành phố/Tỉnh</label>
                                    <input type="text" readOnly style={{border: '0px !important'}} className="form-control-plaintext" id="inputCity" name="txt-city" value=""/>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-12">
                                    <div className="table-responsive mt-5">
                                        <table className="table border-top">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="text-dark">STT</th>
                                                    <th scope="col" className="text-dark">Mã sản phẩm</th>
                                                    <th scope="col" className="text-dark">Tên sản phẩm</th>
                                                    <th scope="col" className="text-dark">Số lượng</th>
                                                    <th scope="col" className="text-dark">Thành tiền</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th className="text-dark" scope="row">stt</th>
                                                    <td className="text-dark">mã sản phẩm</td>
                                                    <td className="text-dark">tên sản phẩm</td>
                                                    <td className="text-dark">số lượng</td>
                                                    <td className="text-dark">đơn giá * số lượng</td>
                                                </tr>
                                            </tbody>
                                            <tfoot className="bg-light">
                                                <tr>
                                                    <th scope="col" className="text-dark fs-5" colSpan="4">TỔNG TIỀN HÓA ĐƠN</th>
                                                    <th scope="col" className="text-dark fs-5">tổng tiền</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                                <input type="submit" value="HỦY ĐƠN" className="btn btn-light product-insert-btn" name="btn-cancel"/>
                                <input type="submit" value="DUYỆT" className="btn btn-dark product-insert-btn" name="btn-confirm"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails;