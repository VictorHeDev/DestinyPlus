import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MainCarousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
  };

  return (
    // <div className='main-carousel'>
    //   <img src={window.shangchiCarouselURL} alt='' />
    // </div>
    <div>
      <Slider {...settings}>
        <div>
          <img
            src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/browse-main-carousel/shangchi-carousel.jpg?raw=true'
            alt=''
          />
        </div>
        <div>
          <img
            src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/browse-main-carousel/black-widow.jpg?raw=true'
            alt=''
          />
        </div>
        <div>
          <img
            src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/browse-main-carousel/simpsons.jpg?raw=true'
            alt=''
          />
        </div>
      </Slider>
    </div>
  );
}
