# == Schema Information
#
# Table name: video_genres
#
#  id         :bigint           not null, primary key
#  video_id   :integer
#  genre_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class VideoGenre < ApplicationRecord
  validates :video_id, :genre_id, presence: true

  belongs_to :video,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Video

  belongs_to :genre,
    primary_key: :id,
    foreign_key: :genre_id,
    class_name: :Genre
end
