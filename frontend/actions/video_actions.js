import * as VideoApiUtil from '../util/video_api_util';

// constants
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

// action creators
const receiveVideos = (videos) => ({
  type: RECEIVE_VIDEOS,
  videos,
});

const receiveVideo = (video) => ({
  type: RECEIVE_VIDEO,
  video,
});

// thunk action creators
export const requestVideos = () => (dispatch) => {
  return VideoApiUtil.fetchVideos().then((videos) =>
    dispatch(receiveVideos(videos))
  );
};

export const requestVideo = (videoId) => (dispatch) => {
  return VideoApiUtil.fetchVideo(videoId).then((video) =>
    dispatch(receiveVideo(video))
  );
};
