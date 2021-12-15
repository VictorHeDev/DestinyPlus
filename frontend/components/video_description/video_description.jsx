import React, { Component, useState, useEffect } from 'react';
import NavBarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoDescription = ({
  video,
  currentProfileId,
  watchlists,
  requestVideo,
  createWatchlistItem,
  deleteWatchlistItem,
  match,
  requestWatchlistItems,
}) => {
  // const [muted, setMuted] = useState(true);

  useEffect(() => {
    requestVideo(match.params.videoId);
    requestWatchlistItems();
  }, []);

  const handleClickPlay = (e) => {
    e.preventDefault();
    const myVideo = document.getElementById('myvideo');
    myVideo
      .requestFullscreen()
      .then(() => myVideo.classList.remove('hidden'))
      .then(() => myVideo.play());
  };


  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    let watchlist = {};
    watchlist.profile_id = currentProfileId;
    watchlist.video_id = video.id;

    if (!watchlists.includes(watchlist)) {
      createWatchlistItem(watchlist);
    }
    setAddBtn(false);
    setMinusBtn(true);
  };

  const handleDeleteFromWatchlist = (e) => {
    e.preventDefault();
    // let videoId = match.params.videoId;
    let watchlistItemArr = watchlists.filter((watchlist) => {
      return watchlist.videoId === parseInt(video.id);
    });

    console.log(watchlistItemArr);
    // let firstWatchlistItem = watchlistItemArr[0];

    // deleteWatchlistItem(firstWatchlistItem.id);
    watchlistItemArr.forEach((item) => deleteWatchlistItem(item.id));
    setMinusBtn(false);
    setAddBtn(true);
  };

  const checkForWatchlistItem = () => {
    return watchlists.some((watchlist) => {
      return (
        watchlist.videoId === parseInt(video.id) &&
        currentProfileId === watchlist.profileId
      );
    });
  };

  if (!video) return null;
  const {
    title,
    description,
    year,
    runtime,
    mediatype,
    backgroundUrl,
    fileUrl,
  } = video;

  return (
    <div
      className='video-desc-container'
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className='video-desc-gradient'></div>

      <header>
        <NavBarContainer />
      </header>

      <video
        src={fileUrl}
        controls
        width='100%'
        type='video/mp4'
        className='hidden'
        id='myvideo'
      ></video>

      <div className='video-desc-main-content'>
        <div className='video-info'>
          <div className='video-desc-buttons'>
            <button
              className='video-play-btn'
              onClick={(e) => handleClickPlay(e)}
            >
              <FontAwesomeIcon className='play-icon' icon={faPlay} size='2x' />
              <div>PLAY</div>
            </button>
            {/* <div className='plus radius'></div> */}

            {checkForWatchlistItem() ? (
              <button
                className='watchlist-minus-btn'
                onClick={(e) => handleDeleteFromWatchlist(e)}
              >
                <FontAwesomeIcon
                  className='plus-icon'
                  icon={faMinus}
                  size='2x'
                />
              </button>
            ) : (
              <button
                className='watchlist-add-btn'
                onClick={(e) => handleAddToWatchlist(e)}
              >
                <FontAwesomeIcon
                  className='plus-icon'
                  icon={faPlus}
                  size='2x'
                />
              </button>
            )}
          </div>
          <ul>
            <li>
              <p>{description}</p>
            </li>
            <li>Year Released: {year}</li>
            <li>Total Runtime: {runtime}</li>
            <li>Type: {mediatype.toUpperCase()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoDescription;

document.addEventListener('fullscreenchange', (e) => {
  const myvideo = document.getElementById('myvideo');
  if (!document.fullscreenElement) {
    // document.exitFullscreen().catch((err) => Promise.resolve(err))
    document.exitFullscreen().catch(() => myvideo.pause());
    myvideo.classList.add('hidden');
  }
});
