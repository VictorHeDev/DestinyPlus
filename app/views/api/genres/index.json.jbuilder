@genres.each do |genre|
  json.set! genre.id do
    json.id genre.id
    json.name genre.name
    # json.videoIds genre.videos.pluck(:id)
  end
end