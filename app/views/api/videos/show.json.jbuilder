json.extract! @video, :id, :title, :description, :year, :runtime, :mediatype
json.backgroundUrl @video.background.attached? ? url_for(@video.background) : ""
# json.backgroundUrl url_for(@video.background)
# json.thumbnailUrl url_for(@video.thumbnail)
