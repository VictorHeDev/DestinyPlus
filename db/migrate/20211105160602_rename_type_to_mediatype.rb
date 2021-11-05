class RenameTypeToMediatype < ActiveRecord::Migration[5.2]
  def change
    rename_column :videos, :type, :mediatype
  end
end
