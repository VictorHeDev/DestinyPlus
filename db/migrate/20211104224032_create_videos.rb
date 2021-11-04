class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title
      t.text :description
      t.integer :year
      t.string :runtime
      t.string :type

      t.timestamps
    end
  end
end
