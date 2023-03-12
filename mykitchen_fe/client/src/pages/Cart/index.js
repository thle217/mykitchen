import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { VND } from "../../utils/currency";
import { failDialog } from "../../components/Dialog";
import discountAPI from "../../services/discountAPI";
import cartAPI from "../../services/cartAPI";
import { useSelector } from "react-redux";

function Cart() {


    //LẤY THÔNG TIN USER TỪ STORE
    const user = useSelector(state => state.user);


    //CALL API
    const [discountList, setDiscountList] = useState([]);
    const [productList, setProductList] = useState([]);

    const getAllProducts = async () => {
        const res = await cartAPI.getAll(user.user_id);
        setProductList(res.data.data);
    };

    useEffect(() => {
        const getAllDiscounts = async () => {
            const res = await discountAPI.getAll();
            setDiscountList(res.data.data);
        };

        getAllDiscounts();
        getAllProducts();
    }, []);


    //XỬ LÝ TĂNG SỐ LƯỢNG
    const handleIncrease = async (product) => {
        let obj = {
            user_id: user.user_id,
            product_id: product.product_id,
            quantity: product.quantity,
            price: product.price
        };

        await cartAPI.increase(obj)
        .then(res => {
            if(res.status === 200) {
                getAllProducts();
            }
            else if(res.status === 202) {
                failDialog();
            }
        });
    };


    //XỬ LÝ GIẢM SỐ LƯỢNG
    const handleDecrease = async (product) => {
        let obj = {
            user_id: user.user_id,
            product_id: product.product_id,
            quantity: product.quantity,
            price: product.price
        };

        await cartAPI.decrease(obj)
        .then(res => {
            if(res.status === 200) {
                getAllProducts();
            }
        });
    };


    //XỬ LÝ XÓA KHỎI GIỎ HÀNG
    const handleDelete = (product_id) => {
        Swal.fire({
            title: "Bạn có muốn xóa sản phẩm?",
            confirmButtonText: "Xóa",
            showCancelButton: true,
            cancelButtonText: "Hủy",
            customClass: {
                title: "fs-5 text-dark",
                confirmButton: "bg-primary shadow-none",
                cancelButton: "bg-secondary shadow-none text-dark",
            },
        })
        .then( async (result) => {
            if (result.isConfirmed) {
                let obj = {
                    user_id: user.user_id,
                    product_id: product_id
                };
        
                await cartAPI.delete(obj)
                .then(res => {
                    if(res.status === 200) {
                        getAllProducts();
                    }
                });
            }
        });
    };


    //XỬ LÝ TÍNH TỔNG TIỀN
    const [percent, setPercent] = useState(0);
    
    const sumSubtotal = () => {
        let subtotal = 0;
        productList.forEach(product => {
            subtotal += product.subtotal;
        });
        return subtotal;
    };

    const handleChooseDiscount = (e) => {
        setPercent(e.target.value);
    };
    
    const caculateDiscount = () => {
        let discount = (subtotal / 100) * percent;
        return discount;
    }
    
    const subtotal = sumSubtotal();
    const discount = caculateDiscount();
    const total = subtotal - discount;


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
                                {
                                    productList.map((product, index) => {
                                        return (
                                            <tr key={index}>
                                                <td style={{textAlign: 'left'}}>
                                                    <div className="d-flex">
                                                        <img src={product.url} alt="" style={{width: '50px', marginRight: '15px'}}/>
                                                        <p>{product.product_name}</p>
                                                        
                                                    </div>
                                                </td>
                                                <td className="align-middle">{VND.format(product.price)}</td>
                                                <td className="align-middle">
                                                    <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                                                        <div className="input-group-btn">
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-primary btn-minus"
                                                                onClick={() => handleDecrease(product)}
                                                            >
                                                                <FontAwesomeIcon icon={faMinus} className="text-white"/>
                                                            </button>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            readOnly
                                                            className="form-control form-control-sm bg-white border-0 text-center"
                                                            name="txt-quantity"
                                                            value={product.quantity}
                                                        />
                                                        <div className="input-group-btn">
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-primary btn-plus"
                                                                onClick={() => handleIncrease(product)}
                                                            >
                                                                <FontAwesomeIcon icon={faPlus} className="text-white"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle">{VND.format(product.subtotal)}</td>
                                                <td className="align-middle">
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-primary btn-delete"
                                                        onClick={() => handleDelete(product.product_id)}
                                                    >
                                                        <FontAwesomeIcon icon={faTimes} className="text-white"/>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
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
                                    discountList.map((discount, index) => {
                                        return (
                                            <div className="form-check mb-3" key={discount.discount_id}>
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    value={discount.percent}
                                                    id={`flexCheckDisabled${index}`}
                                                    name="rdo-discount"
                                                    disabled={
                                                        discount.condition > subtotal
                                                        ? true
                                                        : false
                                                    }
                                                    onChange={handleChooseDiscount}
                                                />
                                                <label
                                                    className={`form-check-label ${
                                                        discount.condition <= subtotal
                                                        ? 'text-success'
                                                        : ''
                                                    }`}
                                                    htmlFor={`flexCheckDisabled${index}`}
                                                >
                                                    {discount.title}
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
                                    <h6 className="font-weight-medium">{VND.format(subtotal)}</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Chiết khấu</h6>
                                    <h6 className="font-weight-medium">{VND.format(discount)}</h6>
                                </div>
                            </div>
                            <div className="card-footer border-secondary bg-transparent">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 className="font-weight-bold">TỔNG TIỀN</h5>
                                    <h5 className="font-weight-bold text-danger">{VND.format(total)}</h5>
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