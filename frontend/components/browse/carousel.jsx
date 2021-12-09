import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

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
          <Link to='/browse/16'>
            <img
              className='main-carousel-picture'
              src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/browse-main-carousel/shangchi-carousel.jpg?raw=true'
              alt='shang chi carousel picture'
            />
          </Link>
        </div>
        <div className='main-carousel-item-container'>
          <Link to='/browse/14'>
            <img
              className='main-carousel-picture'
              src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/browse-main-carousel/simpsons.jpg?raw=true'
              alt='simpsons carousel picture'
            />
          </Link>
        </div>
        <div className='main-carousel-item-container'>
          <Link to='/browse/17'>
            <img
              className='main-carousel-picture'
              src='https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/browse-main-carousel/black-widow.jpg?raw=true'
              alt='black widow carousel picture'
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
}
