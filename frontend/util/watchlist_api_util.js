export const fetchWatchlistItems = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/watchlists',
  });
};

export const fetchWatchlistItem = (watchlistId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/watchlists/${watchlistId}`,
  });
};

export const createWatchlistItem = (watchlist) => {
  return $.ajax({
    method: 'POST',
    url: `/api/watchlists`,
    data: { watchlist },
  });
};

export const deleteWatchlistItem = (watchlistItemId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/watchlists/${watchlistItemId}`,
  });
};
