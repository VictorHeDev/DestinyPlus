class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :name, null: false
      t.integer :user_id

      t.timestamps
    end

    add_index :profiles, :name
  end
end
