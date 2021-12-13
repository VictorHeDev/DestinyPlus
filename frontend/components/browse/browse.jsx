import React, { Component, useEffect, useState } from 'react';
import NavBarContainer from '../navbar/navbar_container';
import GenresContainer from './genres_container';
import Carousel from './carousel';

const Browse = ({
  genres,
  videos,
  currentProfile,
  requestGenres,
  requestVideos,
  history,
  requestWatchlistItems,
}) => {
  useEffect(() => {
    requestGenres();
    requestVideos();
    requestWatchlistItems();

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
