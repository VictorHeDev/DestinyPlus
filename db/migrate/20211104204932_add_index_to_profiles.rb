class AddIndexToProfiles < ActiveRecord::Migration[5.2]
  def change
    add_index :profiles, :user_id
  end
end
