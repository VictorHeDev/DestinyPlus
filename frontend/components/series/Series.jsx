import React, { useState, useEffect } from 'react';
import videos_container from '../browse/videos_container';
import NavBar from '../navbar/navbar';

const Series = ({ requestVideos, series }) => {
  useEffect(() => {
    requestVideos();
  }, []);

  console.log(series);

  return (
    <div>
      <NavBar />
      {series.map((video, idx) => {
        return <p key={idx}>{video.title}</p>;
      })}
    </div>
  );
};

export default Series;
