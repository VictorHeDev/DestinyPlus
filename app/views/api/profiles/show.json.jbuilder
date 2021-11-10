
json.profile do
  json.partial! "profile", profile: @profile
end

json.watchlist do
  # debugger
  @profile.watchlists.each do |watchlist_item|
    # debugger
    json.set! watchlist_item.id do
      json.id watchlist_item.id
      json.video_id watchlist_item.id
    end
  end
end