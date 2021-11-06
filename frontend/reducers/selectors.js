export const selectGenre = ({ genres }) 


// export an array of all videos within a particular genre
export const selectVideosFromGenre = (state, genre) => {

}

// export an array of all movies/tv shows in a particular genre

// use Object.values

export const selectBench = ({ benches }, benchId) => {
  return benches[benchId] || { reviewIds: [] };
};

export const selectReviewsForBench = ({ benches, reviews }, bench) => {
  return bench.reviewIds.map((reviewId) => reviews[reviewId]);
};

export const asArray = ({ benches }) =>
  Object.keys(benches).map((key) => benches[key]);
