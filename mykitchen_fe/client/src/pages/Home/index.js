import { useState, useEffect } from "react";
import BrandsCarousel from "../../components/BrandsCarousel";
import Offer from "../../components/Offer";
import ProductCard from "../../components/ProductCard";
import productAPI from "../../services/productAPI";

function Home() {


    //CALL API
    const [popularProducts, setPopularProducts] = useState([]);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        const getPopularProducts = async () => {
            const res = await productAPI.getPopular();
            setPopularProducts(res.data.data);
        };

        const getLatestProducts = async () => {
            const res = await productAPI.getLatest();
            setLatestProducts(res.data.data);
        };

        getPopularProducts();
        getLatestProducts();
    }, []);

    
    return (
        <>
            <BrandsCarousel />
            <Offer />
            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Sản Phẩm Nổi Bật</span></h2>
                </div>
                <div className="row px-xl-5 pb-3">
                    {
                        popularProducts.map(product => {
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-12" key={product.product_id}>
                                    <ProductCard product={product}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Sản Phẩm Mới</span></h2>
                </div>
                <div className="row px-xl-5 pb-3">
                    {
                        latestProducts.map(product => {
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-12" key={product.product_id}>
                                    <ProductCard product={product}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home;