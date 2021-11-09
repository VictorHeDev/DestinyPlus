# == Schema Information
#
# Table name: watch_list_items
#
#  id         :bigint           not null, primary key
#  profile_id :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class WatchListItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
