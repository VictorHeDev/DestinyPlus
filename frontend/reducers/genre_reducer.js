import { RECEIVE_GENRES, RECEIVE_GENRE } from '../actions/genre_actions';

const genresReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = { ...oldState };

  switch (action.type) {
    case RECEIVE_GENRES:
      return action.genres;
    case RECEIVE_GENRE:
      // return action.genre
      return { ...nextState, [action.genre.id]: action.genre };
    default:
      return oldState;
  }
};

export default genresReducer;
