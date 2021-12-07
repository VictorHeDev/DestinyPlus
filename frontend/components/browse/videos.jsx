import React, { Component } from 'react';
// import { selectVideosFromGenre } from '../../reducers/selectors'
import VideoContainer from './video_container';

const Videos = ({ genre, videos }) => {
  return (
    <div className='genre-item'>
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
    </div>
  );
};

export default Videos;

// export default class Videos extends Component {
//   constructor(props) {
//     super(props)

//     // this.rerouteToVideoDescriptionPage = this.rerouteToVideoDescriptionPage.bind(this)
//   }

//   // rerouteToVideoDescriptionPage() {
//     // this.props.history.push(`/browse/${video.id}`)
//   // }

//   render() {
//     const { genre, videos } = this.props
//     // const selectedVideos = selectVideosFromGenre(genre, videos)

//     return (
//       <div className="genre-item">
//         {videos.map((video, idx) => {
//             return (
//             <VideoContainer
//               // reroute = {  this.rerouteToVideoDescriptionPage(video.id) }
//               video={video}
//               key={idx}
//               genre={genre}
//             />
//         )})}
//       </div>
//     )
//   }
// }
