import * as GenreApiUtil from '../util/genre_api_util';

// constants
export const RECEIVE_GENRES = 'RECEIVE_GENRES';
export const RECEIVE_GENRE = 'RECEIVE_GENRE';

// action creators
const receiveGenres = (genres) => ({
  type: RECEIVE_GENRES,
  genres,
});

const receiveGenre = (genre) => ({
  type: RECEIVE_GENRE,
  genre,
});

// thunk action creators
export const requestGenres = () => (dispatch) => {
  return GenreApiUtil.fetchGenres().then((genres) =>
    dispatch(receiveGenres(genres))
  );
};

export const requestGenre = (genreId) => (dispatch) => {
  return GenreApiUtil.fetchGenre(genreId).then((genre) =>
    dispatch(receiveGenre(genre))
  );
};
