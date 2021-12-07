import React from 'react';
import Slider from 'react-slick';

export default function Carousel() {
  let settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover: true,
    pauseOnHover: true,
  };
  return (
    <div className='main-carousel'>
      <Slider {...settings}>
        <div className='main-carousel-item-container'>
          <img
            src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/browse-main-carousel/shangchi-carousel.jpg?raw=true'
            alt=''
          />
        </div>
        <div className='main-carousel-item-container'>
          <img
            src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/browse-main-carousel/simpsons.jpg?raw=true'
            alt=''
          />
        </div>
        <div className='main-carousel-item-container'>
          <img
            src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/browse-main-carousel/black-widow.jpg?raw=true'
            alt=''
          />
        </div>
      </Slider>
    </div>
  );
}
