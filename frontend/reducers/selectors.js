// not really sure what this is going to do for now
export const selectGenre = (genres, genreId) => {
  return genres[genreId] || { genreId: [] };
};

// export an array of all videos within a particular genre
export const selectVideosFromGenre = (genre, videos) => {
  // debugger;
  const selectedVideos = genre.videoIds.map((videoId) => {
    // debugger;
    // for some reason, videos is starting at index 0
    // look at debugger
    return videos[videoId - 1];
    // return videos[videoId];
  });

  return selectedVideos;
};

// export an array of all movies/tv shows in a particular genre
// use Object.values

// export const selectReviewsForBench = ({ benches, reviews }, bench) => {
//   return bench.reviewIds.map((reviewId) => reviews[reviewId]);
// };

// export const asArray = ({ benches }) =>
//   Object.keys(benches).map((key) => benches[key]);
