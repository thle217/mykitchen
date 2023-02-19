import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function DiscountList() {
    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 mb-4 bg-secondary">
                        <h4 className="text-dark">
                            QUẢN LÝ KHUYẾN MÃI
                            {/* <a href="" className="text-dark" style={{fontSize: '14px', fontWeight: '100', marginLeft: '5px'}}>Hiển thị tất cả</a> */}
                        </h4>
                        <div className="user-page-button-wrapper">
                            <Link to="/discount-details">
                                <button className="btn-add btn btn-dark m-2">THÊM KHUYẾN MÃI</button>
                            </Link>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-dark">STT</th>
                                        <th scope="col" className="text-dark">Tên chương trình</th>
                                        <th scope="col" className="text-dark">Mã giảm giá</th>
                                        <th scope="col" className="text-dark">Phần trăm giảm</th>
                                        <th scope="col" className="text-dark">Ngày bắt đầu</th>
                                        <th scope="col" className="text-dark">Ngày kết thúc</th>
                                        <th scope="col" className="text-dark" style={{textAlign: 'center'}}>Xóa</th>
                                        <th scope="col" className="text-dark" style={{textAlign: 'center'}}>Xem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="text-dark" scope="row">stt</th>
                                        <td className="text-dark">tên chương trình</td>
                                        <td className="text-dark">mã giảm giá</td>
                                        <td className="text-dark">phần trăm giảm</td>
                                        <td className="text-dark">ngày bắt đầu</td>
                                        <td className="text-dark">ngày kết thúc</td>
                                        <td className="text-dark" style={{textAlign: 'center'}}><button type="button" className="btn-delete btn-light" value="<?php echo $list[$i]['user_id'] ?>">Xóa</button></td>
                                        <td style={{textAlign: 'center'}}>
                                            <Link to="/discount-details">
                                                <i className="text-dark"><FontAwesomeIcon icon={faBars}/></i>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function DiscountDetails() {
    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row bg-light rounded justify-content-center mx-0 mb-4">
                <div className="col-md">
                    <div className="rounded p-4 bg-secondary">
                        <Link to="/discount-list" className="text-dark">Quay lại</Link>
                        <h6 className="mb-4 text-dark" style={{marginTop: '20px'}}>CHI TIẾT KHUYẾN MÃI</h6>
                        {/* <?php
                        if ($error) {
                            echo '<h6 className="text-danger">CHÚ Ý: Vai trò - Username - Password không được trống !</h6>';
                        }
                        ?> */}
                        <form action="user-insert-controller.php" method="post">
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label htmlFor="inputName" className="col-form-label">Tên chương trình</label>
                                    <input type="text" className="form-control" id="inputName"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputCode" className="col-form-label">Mã giảm giá</label>
                                    <input type="text" className="form-control" id="inputCode"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputPercent" className="col-form-label">Phần trăm giảm</label>
                                    <input type="text" className="form-control" id="inputPercent"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label htmlFor="inputCondition" className="col-form-label">Điều kiện</label>
                                    <input type="text" className="form-control" id="inputCondition"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputStart" className="col-form-label">Ngày bắt đầu</label>
                                    <input type="date" className="form-control" id="inputStart"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputEnd" className="col-form-label">Ngày kết thúc</label>
                                    <input type="date" className="form-control" id="inputEnd"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-8">
                                    <label htmlFor="inputDescription" className="col-form-label">Mô tả</label>
                                    <div className="form-floating">
                                        <textarea className="form-control" id="inputDescription" style={{height: '100px'}}></textarea>
                                    </div>
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
    DiscountList,
    DiscountDetails
};