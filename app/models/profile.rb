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

  # has_many :watchlists
  #   primary_key: :id,
  #   foreign_key: :profile_id,
  #   dependent: :destroy

  belongs_to :user,
    primary_id: :id,
    foreign_key: :user_id,

end
