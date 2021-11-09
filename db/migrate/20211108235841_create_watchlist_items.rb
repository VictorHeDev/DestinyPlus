class CreateWatchlistItems < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlist_items do |t|
      t.integer :profile_id, null: false
      t.integer :video_id, null: false, uniqueness: true

      t.timestamps
    end

    add_index :watchlist_items, :profile_id
    add_index :watchlist_items, :video_id
  end
end
