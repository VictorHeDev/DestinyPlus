# json.extract! @user, :email, :id

json.partial! 'api/users/user', user: @user

json.profiles do
  @user.profiles.each do |profile|
    json.set! profile.id do
      json.id profile.id
      json.name profile.name
      json.profile ""
    end
  end

  # watchlist
end

# genre

# video


# add list later