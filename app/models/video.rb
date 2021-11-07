# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  year        :integer          not null
#  runtime     :string           not null
#  mediatype   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord
  validates :title, :description, :year, :runtime, :mediatype, presence: true

  has_one_attached :thumbnail

  # has_one_attached :background
  # has_one_attached :video

  has_many :video_genres,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :VideoGenre

  has_many :genres,
    through: :video_genres,
    source: :genre


end
