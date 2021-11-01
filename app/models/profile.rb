# == Schema Information
#
# Table name: profiles
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Profile < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  # ... has_one relationship?\
  # has_one :watchlist
  # has_many :watchlists,
  #   primary_key: :id,
  #   foreign_key: :profile_id,
  #   class_name: :Watchlsts,
  #   dependent: :destroy



  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
