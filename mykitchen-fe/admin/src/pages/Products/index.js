import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ProductList() {
    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 mb-4 bg-secondary">
                        <h4 className="text-dark">
                            QUẢN LÝ SẢN PHẨM
                            {/* <a href="" className="text-dark" style={{fontSize: '14px', fontWeight: '100', marginLeft: '5px'}}>Hiển thị tất cả</a> */}
                        </h4>
                        <div className="product-page-button-wrapper">
                            <Link to="/product-details">
                                <button className="btn-add btn btn-dark m-2">THÊM SẢN PHẨM</button>
                            </Link>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-dark">STT</th>
                                        <th scope="col" className="text-dark">Loại</th>
                                        <th scope="col" className="text-dark">Tên sản phẩm</th>
                                        <th scope="col" className="text-dark">Tr. Thái</th>
                                        <th scope="col" className="text-dark">Nơi sản xuất</th>
                                        <th scope="col" className="text-dark" style={{textAlign: 'center'}}>Xóa</th>
                                        <th scope="col" className="text-dark" style={{textAlign: 'center'}}>Xem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="text-dark" scope="row">stt</th>
                                        <td className="text-dark">tên loại sản phẩm</td>
                                        <td className="text-dark">tên sản phẩm</td>
                                        <td className="text-success">active</td>
                                        <td className="text-dark">nơi sản xuất</td>
                                        <td className="text-dark" style={{textAlign: 'center'}}><button type="button" className="btn-delete btn-light" value="<?php echo $list[$i]['product_id'] ?>">Xóa</button></td>
                                        <td style={{textAlign: 'center'}}>
                                            <Link to="/product-details">
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

function ProductDetails() {
    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row bg-light rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 mb-4 bg-secondary">
                        <Link to="/product-list" className="text-dark">Quay lại</Link>
                        <h6 className="mb-4 text-dark" style={{marginTop: '20px'}}>CHI TIẾT SẢN PHẨM</h6>
                        {/* <?php
                        if ($error) {
                            echo '<h6 className="text-danger">CHÚ Ý: Thương hiệu - Loại sản phẩm - Tên sản phẩm - Đơn giá không được trống !</h6>';
                        }
                        ?> */}
                        <form action="product-insert-controller.php" method="post">
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label htmlFor="inputBrand" className="col-form-label">Thương hiệu</label>
                                    <select className="form-select" aria-label="Default select example" id="inputBrand" name="option-product-brand">
                                        <option>Chọn thương hiệu</option>
                                        {/* <?php
                                        foreach($brandList as $brand) {
                                        ?>
                                        <option value="<?php echo $brand['brand_id']?>"><?php echo $brand['brand_name'] ?></option>
                                        <?php
                                        }
                                        ?> */}
                                    </select>
                                </div>
                                <div className="col-8">
                                    <label htmlFor="inputName" className="col-form-label">Tên sản phẩm</label>
                                    <input type="text" className="form-control" id="inputName" name="txt-product-name"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label htmlFor="inputCategory" className="col-form-label">Loại sản phẩm</label>
                                    <select className="form-select" aria-label="Default select example" id="inputCategory" name="option-product-category">
                                        <option>Chọn loại sản phẩm</option>
                                        {/* <?php
                                        foreach($categoryList as $category) {
                                        ?>
                                        <option value="<?php echo $category['category_id']?>"><?php echo $category['category_name'] ?></option>
                                        <?php
                                        }
                                        ?> */}
                                    </select>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputPrice" className="col-form-label">Đơn giá</label>
                                    <input type="text" className="form-control" id="inputPrice" name="txt-product-price"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputUrl" className="col-form-label">URL Hình</label>
                                    <input type="text" className="form-control" id="inputUrl" name="txt-product-url"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label htmlFor="inputSize" className="col-form-label">Kích thước</label>
                                    <input type="text" className="form-control" id="inputSize" name="txt-product-size"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputWeight" className="col-form-label">Trọng lượng</label>
                                    <input type="text" className="form-control" id="inputWeight" name="txt-product-weight"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputCapacity" className="col-form-label">Dung tích</label>
                                    <input type="text" className="form-control" id="inputCapacity" name="txt-product-capacity"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label htmlFor="inputWattage" className="col-form-label">Công suất</label>
                                    <input type="text" className="form-control" id="inputWattage" name="txt-product-wattage"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputMaterial" className="col-form-label">Chất liệu</label>
                                    <input type="text" className="form-control" id="inputMaterial" name="txt-product-material"/>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputCountry" className="col-form-label">Nơi sản xuất</label>
                                    <input type="text" className="form-control" id="inputCountry" name="txt-product-country"/>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-8">
                                    <label htmlFor="inputDescription" className="col-sm-2 col-form-label">Mô tả sản phẩm</label>
                                    <div className="form-floating">
                                        <textarea className="form-control" id="inputDescription" style={{height: '200px'}} name="txt-product-description"></textarea>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputStatus" className="col-form-label">Trạng thái</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" id="status1" value="Active" defaultChecked name="rdo-product-status"/>
                                        <label className="form-check-label" htmlFor="status1">Active</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" id="status2" value="Inactive" name="rdo-product-status"/>
                                        <label className="form-check-label" htmlFor="status2">Inactive</label>
                                    </div>
                                </div>
                            </div>
                            <input type="reset" value="HỦY" className="btn btn-light product-insert-btn"/>
                            <input type="submit" value="LƯU" className="btn btn-dark product-insert-btn"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    ProductList,
    ProductDetails
};