class CreateVideoGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :video_genres do |t|
      t.integer :video_id
      t.integer :genre_id

      t.timestamps
    end
    add_index :video_genres, :video_id
    add_index :video_genres, :genre_id
  end
end
