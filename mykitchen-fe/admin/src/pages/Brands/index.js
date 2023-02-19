import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function BrandList() {
    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row rounded justify-content-center mx-0">
                <div className="col-md">
                    <div className="rounded p-4 mb-4 bg-secondary">
                        <h4 className="text-dark">
                            QUẢN LÝ THƯƠNG HIỆU
                            {/* <a href="" className="text-dark" style={{fontSize: '14px', fontWeight: '100', marginLeft: '5px'}}>Hiển thị tất cả</a> */}
                        </h4>
                        <div className="row mt-5">
                            <div className="table-responsive col-md-7 mt-4">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-dark">STT</th>
                                            <th scope="col" className="text-dark">Tên thương hiệu</th>
                                            <th scope="col" className="text-dark">URL Hình</th>
                                            <th scope="col" className="text-dark" style={{textAlign: 'center'}}>Xóa</th>
                                            <th scope="col" className="text-dark" style={{textAlign: 'center'}}>Xem</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="text-dark" scope="row">stt</th>
                                            <td className="text-dark">Tên thương hiệu</td>
                                            <td className="text-dark">URL hình</td>
                                            <td className="text-dark" style={{textAlign: 'center'}}><button type="button" className="btn-delete btn-light" value="<?php echo $list[$i]['brand_id'] ?>">Xóa</button></td>
                                            <td style={{textAlign: 'center'}}>
                                                <button className="btn p-0 btn-detail" value="<?php echo $list[$i]['brand_id'] ?>" data-value="<?php echo $list[$i]['brand_name'] ?>" data-value-2="<?php echo $list[$i]['url'] ?>">
                                                    <i className="text-dark"><FontAwesomeIcon icon={faBars}/></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <BrandDetails />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function BrandDetails() {
    return (
        <div className="col-md-5 mt-4">
            <form action="brand-controller.php" method="post">
                <label htmlFor="inputName" className="col-form-label">Tên thương hiệu</label>
                <input type="text" className="form-control mb-3" id="inputName" name="txt-brand-name"/>
                <label htmlFor="inputUrl" className="col-form-label">URL Hình</label>
                <input type="text" className="form-control mb-3" id="inputUrl" name="txt-brand-url"/>
                <div className="float-end">
                    <button type="reset" className="btn-cancel btn btn-light mt-4 px-4 mx-2">HỦY</button>
                    <button type="submit" className="btn-save btn btn-dark mt-4 px-4" name="txt-brand-id">LƯU</button>
                </div>
            </form>
        </div>
    )
}

export {
    BrandList,
    BrandDetails
};