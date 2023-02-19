import ProductCard from "../../components/ProductCard";

function Shopping() {
    return (
        <div className="container-fluid pt-5 mt-5">
            <div className="row px-xl-5">
                <div className="col-lg-3 col-md-12">
                    <div className="border-bottom mb-4 pb-4">
                        <h5 className="font-weight-semi-bold mb-4">Lọc theo thương hiệu</h5>
                        <form action="shop-controller.php" method="post">
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" name="<?php echo $brand['brand_name'] ?>" value="<?php echo $brand['brand_id'] ?>" id="<?php echo $brand['brand_id'] ?>"/>
                                <label className="custom-control-label" htmlFor="<?php echo $brand['brand_id'] ?>">Tên thương hiệu</label>
                            </div>
                            <div className="mt-5 custom-control d-flex align-items-center justify-content-between">
                                <button type="submit" className="btn bg-secondary" style={{width: '40%'}}>HỦY LỌC</button>
                                <button type="submit" name="btn-filter" className="btn bg-primary text-white" style={{width: '40%'}}>LỌC</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12">
                    <div className="row pb-3">
                        <div className="">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <ProductCard />
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <ProductCard />
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <ProductCard />
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <ProductCard />
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <ProductCard />
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <ProductCard />
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <ProductCard />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 pb-1">
                            <p>Các nút chuyển trang</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shopping;