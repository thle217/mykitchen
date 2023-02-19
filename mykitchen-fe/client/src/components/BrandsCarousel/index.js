import Slider from "react-slick";

function BrandsCarousel() {
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
                        <div className="p-2"><img src="https://i.imgur.com/XTVsrjV.jpeg" style={{width: '100%'}} alt=""/></div>
                        <div className="p-2"><img src="https://i.imgur.com/XTVsrjV.jpeg" style={{width: '100%'}} alt=""/></div>
                        <div className="p-2"><img src="https://i.imgur.com/XTVsrjV.jpeg" style={{width: '100%'}} alt=""/></div>
                        <div className="p-2"><img src="https://i.imgur.com/XTVsrjV.jpeg" style={{width: '100%'}} alt=""/></div>
                        <div className="p-2"><img src="https://i.imgur.com/XTVsrjV.jpeg" style={{width: '100%'}} alt=""/></div>
                        <div className="p-2"><img src="https://i.imgur.com/XTVsrjV.jpeg" style={{width: '100%'}} alt=""/></div>
                        <div className="p-2"><img src="https://i.imgur.com/XTVsrjV.jpeg" style={{width: '100%'}} alt=""/></div>
                        <div className="p-2"><img src="https://i.imgur.com/XTVsrjV.jpeg" style={{width: '100%'}} alt=""/></div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default BrandsCarousel;