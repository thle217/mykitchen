import React from "react";
import BrandsCarousel from "../../components/BrandsCarousel";
import Offer from "../../components/Offer";
import ProductCard from "../../components/ProductCard";

function Home() {
    return (
        <React.Fragment>
            <BrandsCarousel />
            <Offer />
            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Sản Phẩm Nổi Bật</span></h2>
                </div>
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ProductCard />
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Sản Phẩm Mới</span></h2>
                </div>
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;