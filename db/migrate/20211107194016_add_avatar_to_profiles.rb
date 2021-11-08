class AddAvatarToProfiles < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :avatar, :text, default: "https://github.com/VictorHeDev/DestinyPlus/blob/main/app/assets/images/avatars/profile_1.jpeg?raw=true"
  end
end
