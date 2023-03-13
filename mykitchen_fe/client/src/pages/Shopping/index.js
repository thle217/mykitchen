import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import productAPI from "../../services/productAPI";

function Shopping() {

    const [productList, setProductList] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const keyword = useSelector(state => state.keyword);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        //LẤY DANH SÁCH SẢN PHẨM SAU KHI TÌM KIẾM
        if(keyword) {
            const getProductByName = async () => {
                const res = await productAPI.getByName(keyword);
                if(res.data.data.length === 0) {
                    setNotFound(true);
                }
                else {
                    if(notFound) {
                        setNotFound(false);
                    }
                    setProductList(res.data.data);
                }
            };
    
            getProductByName();
        }

        //LẤY TẤT CẢ SẢN PHẨM
        else {
            const getAllProducts = async () => {
                const res = await productAPI.getAll();
                setProductList(res.data.data);
            };
            getAllProducts();
        }
    }, [keyword]);

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
                                    notFound
                                    ?
                                    <h3 className="text-muted">Không tìm thấy sản phẩm</h3>
                                    :
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

export default Shopping;