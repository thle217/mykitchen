import { Link } from "react-router-dom";

function Offer() {
    return (
        <div className="container-fluid offer pt-5">
            <div className="row px-xl-5">
                <div className="col-md-6 pb-4">
                    <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                        <img src="" alt=""/>
                        <div className="position-relative" style={{zIndex: '1'}}>
                            <h5 className="text-uppercase text-primary mb-3">Ưu đãi từ MY Kitchen</h5>
                            <h2 className="mb-4 font-weight-semi-bold">Miễn phí vận chuyển</h2>
                            <Link to="/shopping" className="btn btn-outline-primary py-md-2 px-md-3">Mua Ngay</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 pb-4">
                    <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                        <img src="" alt=""/>
                        <div className="position-relative" style={{zIndex: '1'}}>
                            <h5 className="text-uppercase text-primary mb-3">Đối với đơn hàng tiếp theo</h5>
                            <h2 className="mb-4 font-weight-semi-bold">Tặng voucher giảm 10%</h2>
                            <Link to="/shopping" className="btn btn-outline-primary py-md-2 px-md-3">Mua Ngay</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer;