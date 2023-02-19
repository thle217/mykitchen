import Slider from "react-slick";
import ProductCard from "../ProductCard";

function RelatedProducts() {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="container-fluid py-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">Sản Phẩm Cùng Danh Mục</span></h2>
            </div>
            <div className="row px-xl-5">
                <div className="col">
                    <Slider {...settings}>
                        <div className="p-2">
                            <ProductCard />
                        </div>
                        <div className="p-2">
                            <ProductCard />
                        </div>
                        <div className="p-2">
                            <ProductCard />
                        </div>
                        <div className="p-2">
                            <ProductCard />
                        </div>
                        <div className="p-2">
                            <ProductCard />
                        </div>
                        <div className="p-2">
                            <ProductCard />
                        </div>
                        <div className="p-2">
                            <ProductCard />
                        </div>
                        <div className="p-2">
                            <ProductCard />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts;