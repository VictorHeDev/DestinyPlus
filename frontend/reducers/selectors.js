// not really sure what this is going to do for now
export const selectGenre = (genres, genreId) => {
  return genres[genreId] || { genreId: [] };
};

// export an array of all videos within a particular genre
export const selectVideosFromGenre = (genre, videos) => {
  const selectedVideos = genre.videoIds.map((videoId) => {
    return videos[videoId];
  });

  return selectedVideos;
};

export const selectVideosByMediatype = (mediatype, videos) => {
  const filteredVideos = Object.values(videos).filter((video) => {
    return video.mediatype === mediatype;
  });

  return filteredVideos;
};

export const selectWatchlistItems = (
  currentProfileId,
  watchlists,
  videos
) => {
  let filteredWatchlistVideos = [];
  // change the watchlists Obj into an arr
  const watchlistItemsArr = Object.values(watchlists);
  // filter through the watchlistsArr and take only the items that match curentProfileId
  const currentProfileWatchlistItems = watchlistItemsArr.filter(watchlistItem => watchlistItem.profileId === currentProfileId);
  // now that we have the filtered watchlist items, loop through them
  // and return an arr with all the videos that match
  currentProfileWatchlistItems.forEach(watchlistItem => {
    if (videos[watchlistItem.videoId]) {
      filteredWatchlistVideos.push(videos[watchlistItem.videoId])
    }
  })

  return filteredWatchlistVideos;
};
