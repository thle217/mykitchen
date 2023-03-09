import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import discountAPI from "../../services/discountAPI";

function Cart() {


    //CALL API
    const [discountList, setDiscountList] = useState([]);
    useEffect(() => {
        const getAllDiscounts = async () => {
            const res = await discountAPI.getAll();
            setDiscountList(res.data.data);
        };

        getAllDiscounts();

    }, []);


    //XỬ LÝ LẤY DỮ LIỆU SẢN PHẨM TỪ STORE
    const product = useSelector(state => state.product);
    console.log('sp bên cart', product);


    //XỬ LÝ PUSH SẢN PHẨM VỪA THÊM VÀO LIST
    const [productList, setProductList] = useState([]);
    


    return (
        <div className="container-fluid pt-5">
            <form action="" method="">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-bordered text-center mb-0">
                            <thead className="bg-secondary text-dark">
                                <tr>
                                    <th>Tên sản phẩm</th>
                                    <th>Đơn giá</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                    <th>Xóa</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                <tr>
                                    <td style={{textAlign: 'left'}}>
                                        <a href="detail-controller.php?product_id=<?php echo $product['product_id'] ?>" className="text-decoration-none">
                                            <img src="https://i.imgur.com/FgLC3rD.jpeg" alt="" style={{width: '50px', marginRight: '15px'}}/>
                                            Tên sản phẩm
                                        </a>
                                    </td>
                                    <td className="align-middle">Đơn giá</td>
                                    <td className="align-middle">
                                        <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                                            <div className="input-group-btn">
                                                <button type="button" value="<?php echo $product['product_id'] ?>" className="btn btn-sm btn-primary btn-minus">
                                                    <FontAwesomeIcon icon={faMinus} className="text-white"/>
                                                </button>
                                            </div>
                                            <input type="text" readOnly className="form-control form-control-sm bg-white border-0 text-center" name="txt-quantity" value="1"/>
                                            <div className="input-group-btn">
                                                <button type="button" value="<?php echo $product['product_id'] ?>" className="btn btn-sm btn-primary btn-plus">
                                                    <FontAwesomeIcon icon={faPlus} className="text-white"/>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">Thành tiền</td>
                                    <td className="align-middle">
                                        <button type="button" className="btn btn-sm btn-primary btn-delete" value="<?php echo $product['product_id'] ?>">
                                            <FontAwesomeIcon icon={faTimes} className="text-white"/>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h5 className="font-weight-semi-bold m-0">Mã Khuyến Mãi</h5>
                            </div>
                            <div className="card-body">
                                {
                                    discountList.map(discounts => {
                                        return (
                                            <div className="form-check mb-3" key={discounts.discount_id}>
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDisabled"/>
                                                <label className="form-check-label" htmlFor="flexCheckDisabled">
                                                    {discounts.title}
                                                </label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="card border-secondary mb-5 mt-5">
                            <div className="card-header bg-secondary border-0">
                                <h5 className="font-weight-semi-bold m-0">Thông Tin Giỏ Hàng</h5>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-3 pt-1">
                                    <h6 className="font-weight-medium">Thành tiền sản phẩm</h6>
                                    <h6 className="font-weight-medium">Tổng thành tiền</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Chiết khấu</h6>
                                    <h6 className="font-weight-medium">0</h6>
                                </div>
                            </div>
                            <div className="card-footer border-secondary bg-transparent">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 className="font-weight-bold">TỔNG TIỀN</h5>
                                    <h5 className="font-weight-bold text-danger">Tổng tiền</h5>
                                </div>
                                <button type="submit" name="btn-next-to-checkout" className="btn btn-block btn-primary my-3 py-3 text-white font-weight-bold">TIẾP TỤC</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Cart;