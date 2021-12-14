import * as WatchlistApiUtil from '../util/watchlist_api_util';

// constants
export const RECEIVE_WATCHLIST_ITEMS = 'RECEIVE_WATCHLIST_ITEMS';
export const RECEIVE_WATCHLIST_ITEM = 'RECEIVE_WATCHLIST_ITEM';
export const REMOVE_WATCHLIST_ITEM = 'REMOVE_WATCHLIST_ITEM';

// action creators
const receiveWatchlistItems = (watchlistItems) => {
  return {
    type: RECEIVE_WATCHLIST_ITEMS,
    watchlistItems,
  };
};

const receiveWatchlistItem = (watchlistItem) => {
  return {
    type: RECEIVE_WATCHLIST_ITEM,
    watchlistItem,
  };
};

const removeWatchlistItem = (watchlistItemId) => {
  return {
    type: REMOVE_WATCHLIST_ITEM,
    watchlistItemId,
  };
};

// thunk action creators
export const requestWatchlistItems = () => (dispatch) => {
  return WatchlistApiUtil.fetchWatchlistItems().then((watchlistItems) =>
    dispatch(receiveWatchlistItems(watchlistItems))
  );
};

export const requestWatchlistItem = (watchlistItemId) => (dispatch) => {
  return WatchlistApiUtil.fetchWatchlistItem(watchlistItemId).then(
    (watchlistItem) => dispatch(receiveWatchlistItem(watchlistItem))
  );
};

export const createWatchlistItem = (watchlistItem) => (dispatch) => {
  return WatchlistApiUtil.createWatchlistItem(watchlistItem).then(
    (watchlistItem) => dispatch(receiveWatchlistItem(watchlistItem))
  );
};

export const deleteWatchlistItem = (watchlistItemId) => (dispatch) => {
  return WatchlistApiUtil.deleteWatchlistItem(watchlistItemId).then(() =>
    dispatch(removeWatchlistItem(watchlistItemId))
  );
};
