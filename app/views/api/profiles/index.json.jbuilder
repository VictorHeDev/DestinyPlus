# @profiles.each do |profile|
#   json.set! profile.id do
#     json.partial! "profile", profile: profile
#   end
# end

@profiles.each do |profile|
  json.set! profile.id do
    json.id profile.id
    json.name profile.name
  end
end