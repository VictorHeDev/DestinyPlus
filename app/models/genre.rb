# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Genre < ApplicationRecord
  validates :name, presence: true

  # has_many :video_genres,
  #   primary_key: :id,
  #   foreign_key: :genre_id,
  #   class_name: :VideoGenres

  # has_many :videos,
  #   through: :video_genres,
  #   source: :video

end
