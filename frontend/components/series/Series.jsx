import React, { useEffect } from 'react';
import NavBar from '../navbar/navbar';
import { Link } from 'react-router-dom';

function Series({ requestVideos, series }) {
  useEffect(() => {
    requestVideos();
  }, []);

  // console.log(series);

  return (
    <div className='main-series-movies-container'>
      <NavBar />
      <div className='main-browse-content'>
        <h3>Series</h3>
        <div className='series-movie-videos-container'>
          {series.map((video) => {
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
}

export default Series;

// const Series = ({ requestVideos, series }) => {
//   useEffect(() => {
//     requestVideos();
//   }, []);

//   // console.log(series);

//   return (
//     <div className='main-series-movies-container'>
//       <NavBar />
//       <div className='main-browse-content'>
//         <h3>Series</h3>
//         <div className='series-movie-videos-container'>
//           {series.map((video) => {
//             return (
//               <Link to={`/browse/${video.id}`} key={video.id}>
//                 <div className='video-container'>
//                   {video.thumbnailUrl ? (
//                     <div className='series-movie-video-container'>
//                       <img src={video.thumbnailUrl} />
//                     </div>
//                   ) : (
//                     <div className='video-placeholder'>{video.title}</div>
//                   )}
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Series;
