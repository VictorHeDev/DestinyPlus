# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Profile.destroy_all
Genre.destroy_all
VideoGenre.destroy_all
Video.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("profiles")
ActiveRecord::Base.connection.reset_pk_sequence!("genres")
ActiveRecord::Base.connection.reset_pk_sequence!("video_genres")
ActiveRecord::Base.connection.reset_pk_sequence!("videos")

# USERS
demoUser = User.create!(
  email: 'demo@gmail.com',
  password: 'password'
)

u1 = User.create!(
  email: 'VictorHe97@gmail.com',
  password: 'creator'
)

# PROFILES
demoUserProfile1 = Profile.create!(
  name: 'Demo1',
  user_id: 1
)

demoUserProfile2 = Profile.create!(
  name: '<3 Mom',
  user_id: 1
)

demoUserProfile1 = Profile.create!(
  name: 'Hello!',
  user_id: 1
)

u1p1 = Profile.create!(
  name: 'wood',
  user_id: 2
)

u1p2 = Profile.create!(
  name: 'wood2',
  user_id: 2
)

u1p3 = Profile.create!(
  name: 'wood3',
  user_id: 2
)

# GENRES
comedy = Genre.create!(name: "Comedy")
action = Genre.create!(name: "Action")
fantasy = Genre.create!(name: "Fantasy")
drama = Genre.create!(name: "Drama")
family = Genre.create!(name: "Family")
classic = Genre.create!(name: "Classic")
education = Genre.create!(name: "Education")
anime = Genre.create!(name: "Anime")
animation = Genre.create!(name: "Animation")

# BONUS GENRES
romance = Genre.create!(name: "Romance")
quirky = Genre.create!(name: "Quirky")
reality = Genre.create!(name: "Reality")

# VIDEOS
# AMERICAN DRAGON JAKE LONG
american_dragon = Video.create!(
  title: "American Dragon Jake Long",
  description: "Jake Long is a skateboarding teenager who secretly is a fire-breathing dragon and the magical protector from New York City. He uses his duties as a dragon to help defend the underground magical world of New York City, while continuing his training.",
  year: "2005",
  runtime: "2 seasons",
  type: "tv"
)

VideoGenre.create!(
  video_id: american_dragon.id,
  genre_id: comedy.id
)
VideoGenre.create!(
  video_id: american_dragon.id,
  genre_id: animation.id
)
VideoGenre.create!(
  video_id: american_dragon.id,
  genre_id: fantasy.id
)
## ATTACH PHOTO AND VIDEO

cosmos = Video.create!(
  title: "Cosmos",
  description: "Following the wildly successful Cosmos: A Spacetime Odyssey, Neil deGrasse Tyson returns as host to translate more revelations of science into a lavish transporting experience, taking audiences on a series of spiritual voyages of exploration. The show reveals previously uncharted realms, including lost worlds, worlds yet to come, and the worlds that humans may one day inhabit.",
  year: "2020",
  runtime: "1 season",
  type: "tv"
)

VideoGenre.create!(
  video_id: cosmos.id,
  genre_id: education.id
)
VideoGenre.create!(
  video_id: cosmos.id,
  genre_id: family.id
)
## ATTACH PHOTO AND VIDEO

avengers = Video.create!(
  title: "Avengers",
  description: "Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a. the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner, a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and the alien invasion.",
  year: "2012",
  runtime: "143 minutes",
  type: "movie"
)

VideoGenre.create!(
  video_id: avengers.id,
  genre_id: comedy.id
)
VideoGenre.create!(
  video_id: avengers.id,
  genre_id: action.id
)
VideoGenre.create!(
  video_id: avengers.id,
  genre_id: fantasy.id
)
VideoGenre.create!(
  video_id: avengers.id,
  genre_id: drama.id
)
## ATTACH PHOTO AND VIDEO

bh6 = Video.create!(
  title: "Big Hero 6",
  description: "Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a. the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner, a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and the alien invasion.",
  year: "2012",
  runtime: "143 minutes",
  type: "movie"
)

VideoGenre.create!(
  video_id: avengers.id,
  genre_id: comedy.id
)
VideoGenre.create!(
  video_id: avengers.id,
  genre_id: action.id
)
VideoGenre.create!(
  video_id: avengers.id,
  genre_id: fantasy.id
)
VideoGenre.create!(
  video_id: avengers.id,
  genre_id: drama.id
)
## ATTACH PHOTO AND VIDEO









