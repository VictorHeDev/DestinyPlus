# json.array! @watchlists do |watchlist|
#   json.extract! watchlist, :id, :profile_id, :video_id
# end

@watchlists.each do |watchlist|
  json.set! watchlist.id do
    json.extract! watchlist, :id, :profile_id,:video_id
  end
end