# @profiles.each do |profile|
#   json.set! profile.id do
#     json.partial! "profile", profile: profile
#   end
# end

@profiles.each do |profile|
  json.set! profile.id do
    json.name profile.name
    json.id profile.id
  end
end