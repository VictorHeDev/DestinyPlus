import React, { Component, useEffect, useState } from 'react';
import NavBarContainer from '../navbar/navbar_container';
import GenresContainer from './genres_container';
import Carousel from './Carousel';

const Browse = ({
  genres,
  videos,
  currentProfile,
  requestGenres,
  requestVideos,
  history,
}) => {
  useEffect(() => {
    requestGenres();
    requestVideos();

    if (!currentProfile) {
      history.push('./profiles');
    }
  }, []);

  return (
    <div className='browse-container'>
      <NavBarContainer />
      <div className='main-browse-content'>
        <Carousel />
        <GenresContainer genres={genres} videos={videos} />
      </div>
    </div>
  );
};

export default Browse;
