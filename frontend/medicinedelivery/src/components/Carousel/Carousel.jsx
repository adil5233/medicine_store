import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable auto-sliding
        autoplaySpeed: 2000, // Set the speed (in milliseconds)
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {/* Add your carousel items here */}
                <div className="carousel-item"><img src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNpbmVzfGVufDB8fDB8fHww" alt="" srcset="" /></div>
                <div className="carousel-item"><img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D" alt="" srcset="" /></div>
                <div className="carousel-item"><img src="https://img.freepik.com/free-photo/woman-s-hand-pours-medicine-pills-out-bottle_1150-14190.jpg" alt="" srcset="" /></div>
                <div className="carousel-item"><img src="https://png.pngtree.com/thumb_back/fh260/background/20230713/pngtree-health-content-chart-with-prescription-bottle-in-3d-rendering-image_3867454.jpg" alt="" srcset="" /></div>
                {/* Add more items as needed */}
            </Slider>
        </div>
    );
};

export default Carousel;
