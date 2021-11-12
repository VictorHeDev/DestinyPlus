@profiles.each do |profile|
  json.set! profile.id do
    json.partial! "profile", profile: profile
  end
end

# @profiles.each do |profile|
#   json.set! profile.id do
#     json.id profile.id
#     json.name profile.name
#     json.avatar profile.avatar
#   end
# end

# 1. bring up array of strings of video names
#   load inside searchbar component
#   .startsWith('as;ldkf')

#   used if you bring up strings

# 2. every letter you type in, you would do an AJAX call to search the backend
#   ruby on rails method to backend search
#   first ten videos formatted in the jbuilder to the store
#   store changes the searchbar component

# Tradeoffs:
# 1.

# 2.

