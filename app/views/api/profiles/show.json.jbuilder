json.partial! "profile", profile: @profile

json.watchlist do
  @profile.watchlists.each do |watchlist_item|
    json.set! watchlist_item.id do
      json.id watchlist_item.id
      json.video_id watchlist_item.id
    end
  end
end