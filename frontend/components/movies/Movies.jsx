import React, { useEffect } from 'react';
import NavBar from '../navbar/navbar';
import { Link } from 'react-router-dom';

const Movies = ({ requestVideos, movies }) => {
  useEffect(() => {
    requestVideos();
  }, []);

  // console.log(series);

  return (
    <div className='main-series-movies-container'>
      <NavBar />
      <div className='main-browse-content'>
        <h3>Movies</h3>
        <div className='series-movie-videos-container'>
          {movies.map((video) => {
            return (
              <Link to={`/browse/${video.id}`}>
                <div className='video-container' key={video.id}>
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

export default Movies;
