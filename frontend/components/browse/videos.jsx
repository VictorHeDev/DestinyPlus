import React, { Component } from 'react';
import VideoContainer from './video_container';
import Slider from 'react-slick';

const Videos = ({ genre, videos }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className='genre-item'>
      <Slider {...settings}>
        {videos.map((video, idx) => {
          return (
            <VideoContainer
              // reroute = {  this.rerouteToVideoDescriptionPage(video.id) }
              video={video}
              key={idx}
              genre={genre}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Videos;

