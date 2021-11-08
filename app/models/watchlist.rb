# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint           not null, primary key
#  profile_id :integer
#  video_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Watchlist < ApplicationRecord

  belongs_to :profile,
    primary_key: :id,
    foreign_key: :profile_id,
    class_name: :Profile

  belongs_to :video,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Video

end
