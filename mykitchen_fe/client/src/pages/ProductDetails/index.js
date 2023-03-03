import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import RelatedProducts from "../../components/RelatedProducts";

function ProductDetails() {


    //LẤY THÔNG TIN SẢN PHẨM VỪA CHỌN
    let { state } = useLocation();
    console.log(state);


    //SCROLL MÀN HÌNH LÊN ĐẦU TRANG
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <React.Fragment>
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 pb-5">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner border">
                                <div className="p-5 carousel-item active">
                                    <img className="w-100 h-100" src={state.url} alt=""/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                <i className="fa fa-2x fa-angle-left text-white"></i>
                            </a>
                            <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                                <i className="fa fa-2x fa-angle-right text-white"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-7 pb-5">
                        <h4 className="font-weight-semi-bold mb-5">{state.product_name}</h4>
                        <h4 className="font-weight-semi-bold mb-4 text-danger">{state.price}<sup>đ</sup></h4>
                        <div className="border bg-primary border-primary p-4 rounded-top">
                            <h5 className="text-white"><b>ƯU ĐÃI CHỈ CÓ Ở MY KITCHEN</b></h5>
                        </div>
                        <div className="border border-1 p-4 rounded-bottom mb-5 border-primary">
                            <h5><i className="fas fa-check text-primary mb-3 mr-1"></i> Miễn phí giao hàng</h5>
                            <h5><i className="fas fa-check text-primary mb-3 mr-1"></i> Đổi trả trong 14 ngày</h5>
                            <h5><i className="fas fa-check text-primary mb-3 mr-1"></i> Tặng voucher -10% cho đơn hàng sau</h5>
                        </div>
                        <form action="" method="post">
                            <div className="d-flex align-items-center mb-4 pt-2">
                                <div className="input-group quantity mr-3" style={{width: '160px'}}>
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary btn-minus" style={{height: '50px', width: '50px'}}>
                                            <FontAwesomeIcon icon={faMinus} className="text-white"/>
                                        </button>
                                    </div>
                                    <input type="text" readOnly className="form-control border-0 bg-white text-center mr-1 ml-1 pt-3" value="1" name="txt-quantity"/>
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary btn-plus" style={{height: '50px', width: '50px'}}>
                                            <FontAwesomeIcon icon={faPlus} className="text-white"/>
                                        </button>
                                    </div>
                                </div>
                                <button type="submit" name="action" value="add" className="btn btn-primary px-3 text-white" style={{height: '50px', width: '200px'}}><i className="fa fa-shopping-cart mr-1 text-white"></i> THÊM VÀO GIỎ</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row px-xl-5">
                    <div className="col-md-6 mt-3">
                        <h4 className="mb-3">Mô tả sản phẩm</h4>
                        <p>{state.description}</p>
                    </div>
                    <div className="col-md-6 mt-3">
                        <h4 className="mb-3">Thông số kỹ thuật</h4>
                        <div className="d-flex">
                            <div className="mr-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-0"><b>Tên sản phẩm</b></li>
                                    <li className="list-group-item px-0"><b>Thương hiệu</b></li>
                                    <li className="list-group-item px-0"><b>Nơi sản xuất</b></li>
                                    <li className="list-group-item px-0"><b>Kích thước</b></li>
                                    <li className="list-group-item px-0"><b>Khối lượng</b></li>
                                    <li className="list-group-item px-0"><b>Dung tích</b></li>
                                    <li className="list-group-item px-0"><b>Công suất</b></li>
                                    <li className="list-group-item px-0"><b>Chất liệu</b></li>
                                </ul>
                            </div>
                            <div className="ml-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-0">{state.product_name}</li>
                                    <li className="list-group-item px-0">{state.brand_name}</li>
                                    <li className="list-group-item px-0">{state.country}</li>
                                    <li className="list-group-item px-0">{state.size}</li>
                                    <li className="list-group-item px-0">{state.weight}</li>
                                    <li className="list-group-item px-0">{state.capacity}</li>
                                    <li className="list-group-item px-0">{state.wattage}</li>
                                    <li className="list-group-item px-0">{state.material}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProducts category_id={state.category_id}/>
        </React.Fragment>
    )
}

export default ProductDetails;