@videos.each do |video|
  json.set! video.id do
    json.extract! video, :id, :title, :description, :year, :runtime, :mediatype
    # json.photoUrl url_for(video.image)
  end
end