import React from 'react';
import Slider from 'react-slick';

export default function Carousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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

// export default function Carousel() {
//   return (
//     <div className="main-carousel">
//       <img src={window.shangchiCarouselURL} alt="" />
//     </div>
//   )
// }
