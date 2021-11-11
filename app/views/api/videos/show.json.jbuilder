json.extract! @video, :id, :title, :description, :year, :runtime, :mediatype
json.backgroundUrl @video.background.attached? ? url_for(@video.background) : ""
json.fileUrl @video.file.attached? ? url_for(@video.file) : ""

# json.backgroundUrl url_for(@video.background)
# json.thumbnailUrl url_for(@video.thumbnail)
