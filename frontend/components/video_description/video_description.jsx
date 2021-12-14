import React, { Component, useState, useEffect } from 'react';
import NavBarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faPlay } from '@fortawesome/free-solid-svg-icons';
// import VideoPlayer from './video_player'

const VideoDescription = ({
  video,
  currentProfileId,
  watchlists,
  requestVideo,
  createWatchlistItem,
  deleteWatchlistItem,
  match,
}) => {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    requestVideo(match.params.videoId);
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

    createWatchlistItem(watchlist);
  };

  const handleDeleteFromWatchlist = (e) => {
    e.preventDefault();
    // debugger;
    let videoId = match.params.videoId;
    let watchlistItemArr = watchlists.filter((watchlist) => {
      // debugger;
      return watchlist.videoId === parseInt(videoId);
    });

    console.log(watchlistItemArr);
    let firstWatchlistItem = watchlistItemArr[0];

    // debugger;
    // this.props.deleteWatchlistItem(this.props.watchlists.id);
    deleteWatchlistItem(firstWatchlistItem.id);
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

            <button
              className='watchlist-add-btn'
              onClick={(e) => handleAddToWatchlist(e)}
            >
              <FontAwesomeIcon className='plus-icon' icon={faPlus} size='2x' />
            </button>

            <button
              className='watchlist-minus-btn'
              onClick={(e) => handleDeleteFromWatchlist(e)}
            >
              <FontAwesomeIcon className='plus-icon' icon={faMinus} size='2x' />
            </button>
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

// export default class VideoDescription extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       muted: true,
//     };

//     this.handleClickPlay = this.handleClickPlay.bind(this);
//     this.handleAddToWatchlist = this.handleAddToWatchlist.bind(this);
//     this.handleDeleteFromWatchlist = this.handleDeleteFromWatchlist.bind(this);
//   }

//   componentDidMount() {
//     this.props.requestVideo(this.props.match.params.videoId);
//   }

//   handleClickPlay(e) {
//     e.preventDefault();
//     const myVideo = document.getElementById('myvideo');
//     myVideo
//       .requestFullscreen()
//       .then(() => myVideo.classList.remove('hidden'))
//       .then(() => myVideo.play());
//   }

//   handleAddToWatchlist(e) {
//     e.preventDefault();
//     let watchlist = {};
//     watchlist.profile_id = this.props.currentProfileId;
//     watchlist.video_id = this.props.video.id;

//     this.props.createWatchlistItem(watchlist);
//   }

//   handleDeleteFromWatchlist(e) {
//     e.preventDefault();
//     // debugger;
//     let videoId = this.props.match.params.videoId;
//     let watchlistItemArr = this.props.watchlists.filter((watchlist) => {
//       // debugger;
//       return watchlist.videoId === parseInt(videoId);
//     });

//     console.log(watchlistItemArr);
//     let firstWatchlistItem = watchlistItemArr[0];

//     // debugger;
//     // this.props.deleteWatchlistItem(this.props.watchlists.id);
//     this.props.deleteWatchlistItem(firstWatchlistItem.id);
//   }

//   render() {
//     if (!this.props.video) return null;
//     const {
//       title,
//       description,
//       year,
//       runtime,
//       mediatype,
//       backgroundUrl,
//       fileUrl,
//     } = this.props.video;

//     return (
//       <div
//         className='video-desc-container'
//         style={{
//           backgroundImage: `url(${backgroundUrl})`,
//         }}
//       >
//         <div className='video-desc-gradient'></div>

//         <header>
//           <NavBarContainer />
//         </header>

//         <video
//           src={fileUrl}
//           controls
//           width='100%'
//           type='video/mp4'
//           className='hidden'
//           id='myvideo'
//         ></video>

//         <div className='video-desc-main-content'>
//           <div className='video-info'>
//             <div className='video-desc-buttons'>
//               <button
//                 className='video-play-btn'
//                 onClick={(e) => this.handleClickPlay(e)}
//               >
//                 <FontAwesomeIcon
//                   className='play-icon'
//                   icon={faPlay}
//                   size='2x'
//                 />
//                 <div>PLAY</div>
//               </button>
//               {/* <div className='plus radius'></div> */}

//               <button
//                 className='watchlist-add-btn'
//                 onClick={(e) => this.handleAddToWatchlist(e)}
//               >
//                 <FontAwesomeIcon
//                   className='plus-icon'
//                   icon={faPlus}
//                   size='2x'
//                 />
//               </button>

//               <button
//                 className='watchlist-minus-btn'
//                 onClick={(e) => this.handleDeleteFromWatchlist(e)}
//               >
//                 <FontAwesomeIcon
//                   className='plus-icon'
//                   icon={faMinus}
//                   size='2x'
//                 />
//               </button>
//             </div>
//             <ul>
//               <li>
//                 <p>{description}</p>
//               </li>
//               <li>Year Released: {year}</li>
//               <li>Total Runtime: {runtime}</li>
//               <li>Type: {mediatype.toUpperCase()}</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

document.addEventListener('fullscreenchange', (e) => {
  const myvideo = document.getElementById('myvideo');
  if (!document.fullscreenElement) {
    // document.exitFullscreen().catch((err) => Promise.resolve(err))
    document.exitFullscreen().catch(() => myvideo.pause());
    myvideo.classList.add('hidden');
  }
});
