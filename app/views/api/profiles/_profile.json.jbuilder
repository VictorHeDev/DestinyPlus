json.extract! profile, :id, :name, :avatar

# may want to add an identifier for picture here ... like :color perhaps or :profile_number

# watchlist_video_ids -> [video1, video2 video3] within watchlist
# use the through association between profiles has many videos
# loop through them that
# loop through watchlists
# check and push array
# profit!!!