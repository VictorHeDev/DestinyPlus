import React, { useEffect, useState } from 'react';
import NavBar from '../navbar/navbar';
import { Link } from 'react-router-dom';

const Search = ({ requestVideos, videos }) => {
  const [query, setQuery] = useState('');
  const [searchVideos, setSearchVideos] = useState([]);

  useEffect(() => {
    requestVideos();
  }, []);

  useEffect(() => {
    // console.log('Search message inside useEffect: ', query);
    let searchResultsArr = videos
      .filter((video) => {
        return video.title.toLowerCase().includes(query.toLowerCase());
      })
      .slice(0, 25);

    setSearchVideos([...searchResultsArr]);
  }, [query, setSearchVideos]);

  const handleQueryChange = (e) => {
    let newQuery = e.target.value;
    // console.log(e.target.value);
    setQuery(newQuery);
    // console.log(query);
  };

  return (
    <div className='main-series-movies-container'>
      <NavBar />
      <div className='main-browse-content'>
        <form className='search-form-container'>
          <input
            type='text'
            placeholder='Search by title ...'
            value={query}
            onChange={(e) => handleQueryChange(e)}
          />
        </form>

        <div className='series-movie-videos-container'>
          {query
            ? searchVideos.map((video) => {
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
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Search;
