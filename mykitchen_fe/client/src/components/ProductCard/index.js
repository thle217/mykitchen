import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { successDialog, failDialog } from "../Dialog";
import { VND } from "../../utils/currency";
import cartAPI from "../../services/cartAPI";

function ProductCard(props) {


    const user = useSelector(state => state.user);
    const navigate = useNavigate();


    //DIALOG THÔNG BÁO ĐĂNG NHẬP
    const loginDialog = () => {
        Swal.fire({
            title: "Bạn cần đăng nhập",
            confirmButtonText: "Đăng nhập",
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
                navigate("/login");
            }
        });
    };


    //XỬ LÝ LƯU SẢN PHẨM VỪA CHỌN VÀO GIỎ HÀNG
    const handleAddToCart = async () => {
        if(user.user_id) {
            let obj = {
                ...props.product,
                user_id: user.user_id,
                quantity: 1,
                price: props.product.price
            };
    
            await cartAPI.add(obj)
            .then(res => {
                if(res.status === 200 || res.status === 201) {
                    successDialog();
                }
                else if(res.status === 202) {
                    failDialog();
                }
            });
        }
        else {
            loginDialog();
        }
    };


    return (
        <div className="pb-1 mb-5">
            <div className="card product-item border-0 mb-5 mt-5">
                <div className="card-header product-img overflow-hidden bg-transparent border p-3">
                    <Link
                        to="/product-details" 
                        className="d-flex justify-content-center"
                        state={props.product}
                    >
                        <img className="img-fluid w-75" src={props.product.url} alt=""/>
                    </Link>
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <Link
                        to="/product-details"
                        style={{textDecoration: 'none'}}
                        state={props.product}
                    >
                        <h6 className="text-truncate mb-3 mx-2">{props.product.product_name}</h6>
                    </Link>
                    <div className="justify-content-center">
                        <h6 className="text-danger"><b>{VND.format(props.product.price)}</b></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link
                        to="/product-details"
                        className="btn btn-sm text-dark p-0"
                        state={props.product}
                    >
                        <FontAwesomeIcon icon={faEye} className="text-primary mr-1"/>Xem chi tiết
                    </Link>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-add"
                        style={{backgroundColor: 'transparent'}}
                        onClick={handleAddToCart}
                    >
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;