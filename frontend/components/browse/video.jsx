import React, { Component } from 'react';
const Video = ({ video, history }) => {
  const handleRerouteOnClick = () => {
    history.push(`/browse/${video.id}`);
  };

  if (video) {
    const placeholder = video.thumbnailUrl ? (
      <img src={video.thumbnailUrl} />
    ) : (
      <p>{video.title}</p>
    );
    return (
      <div onClick={() => handleRerouteOnClick()} className='video-container'>
        {placeholder}
        {/* <p>{video.title}</p>
        <img src={video.thumbnailUrl} alt='video thumbnail' /> */}
      </div>
    );
  } else {
    return null;
  }
};

export default Video;
