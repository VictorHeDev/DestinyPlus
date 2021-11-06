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

// export an array of all movies/tv shows in a particular genre
// use Object.values

// export const selectReviewsForBench = ({ benches, reviews }, bench) => {
//   return bench.reviewIds.map((reviewId) => reviews[reviewId]);
// };

// export const asArray = ({ benches }) =>
//   Object.keys(benches).map((key) => benches[key]);
