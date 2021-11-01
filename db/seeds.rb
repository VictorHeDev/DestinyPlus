# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Profile.destroy_all

demoUser = User.create!(
  email: 'demo@gmail.com',
  password: 'password'
)

demoUserProfile1 = Profile.create!(
  name: 'Pls hire me',
  user_id: 1
)

demoUserProfile2 = Profile.create!(
  name: '<3 Mom',
  user_id: 1
)

demoUserProfile1 = Profile.create!(
  name: 'Vic',
  user_id: 1
)

u1 = User.create!(
  email: 'VictorHe97@gmail.com',
  password: 'creator'
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

