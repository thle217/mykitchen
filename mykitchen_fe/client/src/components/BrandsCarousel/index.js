import { useState, useEffect } from "react";
import Slider from "react-slick";
import brandAPI from "../../services/brandAPI";

function BrandsCarousel() {
    //CALL API
    const [brandList, setBrandList] = useState([]);
    useEffect(() => {
        const getAllBrands = async () => {
            const res = await brandAPI.getAll();
            setBrandList(res.data);
        };
        getAllBrands();
    }, []);

    //ĐỊNH DẠNG SLIDER
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 3000,
        slidesToShow: 6,
        slidesToScroll: 6,
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
            <div className="row px-xl-5">
                <div className="col">
                    <Slider {...settings}>
                        {brandList.map((brand) => {
                            return (
                                <div className="p-2" key={brand.brand_id}>
                                    <img
                                        src={brand.url}
                                        style={{ width: "100%" }}
                                        alt=""
                                    />
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default BrandsCarousel;
