# == Schema Information
#
# Table name: profiles
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  avatar     :text             default("https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_1.jpeg?raw=true")
#
class Profile < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  # check this
  # has_one :watchlist
  has_many :watchlists,
    primary_key: :id,
    foreign_key: :profile_id,
    dependent: :destroy

  has_many :videos,
    through: :watchlists,
    source: :video

end
