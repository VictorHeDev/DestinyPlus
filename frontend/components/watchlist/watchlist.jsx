import React, { useEffect } from 'react';
import NavBar from '../navbar/navbar';
import { Link } from 'react-router-dom';

const Watchlist = ({
  requestVideos,
  requestWatchlistItems,
  watchlistVideos,
}) => {
  useEffect(() => {
    requestVideos();
    requestWatchlistItems();
  }, []);

  return (
    <div className='main-series-movies-container'>
      <NavBar />
      <div className='main-browse-content'>
        <h3>Watchlist</h3>
        <div className='series-movie-videos-container'>
          {watchlistVideos.map((video) => {
            return (
              <Link to={`/browse/${video.id}`} key={video.id}>
                <div className='video-container'>
                  {video.thumbnailUrl ? (
                    <div className='series-movie-video-container'>
                      <img src={video.thumbnailUrl} />
                    </div>
                  ) : (
                    <div className='video-placeholder'>{video.title}</div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
