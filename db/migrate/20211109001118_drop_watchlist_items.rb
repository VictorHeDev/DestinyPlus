class DropWatchlistItems < ActiveRecord::Migration[5.2]
  def change
    drop_table :watchlist_items
  end
end
