import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import productAPI from "../../services/productAPI";

function ProductSearchList() {


    //CALL API
    const [productList, setProductList] = useState([]);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const keyword = urlParams.get('keyword');
    useEffect(() => {
        const getProductByName = async () => {
            const res = await productAPI.getByName(keyword);
            setProductList(res.data.data);
        };

        getProductByName();
    }, []);


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
                                {
                                    productList.map(product => {
                                        return (
                                            <div className="col-lg-4 col-md-6 col-sm-12" key={product.product_id}>
                                                <ProductCard product={product}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-12 pb-1">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSearchList;