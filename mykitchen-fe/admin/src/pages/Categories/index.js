import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function CategoryList() {
    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 mb-4 bg-secondary">
                        <h4 className="text-dark">
                            QUẢN LÝ LOẠI SẢN PHẨM
                            {/* <a href="" className="text-dark" style={{fontSize: '14px', fontWeight: '100', marginLeft: '5px'}}>Hiển thị tất cả</a> */}
                        </h4>
                        <div className="row mt-5">
                            <div className="table-responsive col-md-7 mt-4">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-dark">STT</th>
                                            <th scope="col" className="text-dark">Tên loại sản phẩm</th>
                                            <th scope="col" className="text-dark" style={{textAlign: 'center'}}>Xóa</th>
                                            <th scope="col" className="text-dark" style={{textAlign: 'center'}}>Xem</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="text-dark" scope="row">stt</th>
                                            <td className="text-dark">Tên loại sản phẩm</td>
                                            <td className="text-dark" style={{textAlign: 'center'}}><button type="button" className="btn-delete btn-light" value="<?php echo $list[$i]['category_id'] ?>">Xóa</button></td>
                                            <td style={{textAlign: 'center'}}>
                                                <button className="btn p-0 btn-detail" value="<?php echo $list[$i]['category_id'] ?>" data-value="<?php echo $list[$i]['category_name'] ?>">
                                                    <i className="text-dark"><FontAwesomeIcon icon={faBars}/></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <CategoryDetails />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CategoryDetails() {
    return (
        <div className="col-md-5 mt-4">
            <form action="category-controller.php" method="post">
                <label htmlFor="inputName" className="col-form-label">Tên loại sản phẩm</label>
                <input type="text" className="form-control" id="inputName" name="txt-category-name"/>
                <div className="float-end">
                    <button type="reset" className="btn-cancel btn btn-light mt-4 px-4 mx-2">HỦY</button>
                    <button type="submit" className="btn-save btn btn-dark mt-4 px-4" name="txt-category-id">LƯU</button>
                </div>
            </form>
        </div>
    )
}

export {
    CategoryList,
    CategoryDetails
};