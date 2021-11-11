json.extract! profile, :id, :name, :avatar

# video_ids = []
# profile.videos.each do |video|
#   video_ids.push(video.id)
# end
# json.watchlist_video_ids video_ids

json.watch_video_ids profile.videos.map { |video| video.id }

# watchlist_video_ids -> [video1, video2 video3] within watchlist
# use the through association between profiles has many videos
# loop through them that
# loop through watchlists
# check and push array
# profit!!!