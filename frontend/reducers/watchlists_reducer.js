import {
  RECEIVE_WATCHLIST_ITEMS,
  RECEIVE_WATCHLIST_ITEM,
  REMOVE_WATCHLIST_ITEM,
} from '../actions/watchlist_actions';

const watchlistItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = { ...oldState };

  switch (action.type) {
    case RECEIVE_WATCHLIST_ITEMS:
      return action.watchlistItems;
    case RECEIVE_WATCHLIST_ITEM:
      return { ...nextState, [action.watchlistItem.id]: action.watchlistItem };
    case REMOVE_WATCHLIST_ITEM:
      delete nextState[action.watchlistItemId];
      return nextState;
    default:
      return oldState;
  }
};

export default watchlistItemsReducer;
