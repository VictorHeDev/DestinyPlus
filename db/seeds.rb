# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demoUser = User.create!(
  email: 'demo@gmail.com',
  password: 'password'
)

u1 = User.create!(
  email: 'VictorHe97@gmail.com',
  password: 'creator'
)

u2 = User.create!(
  email: 'pasan@gmail.com',
  password: 'cssGOD'
)

u3 = User.create!(
  email: 'alKim@gmail.com',
  password: 'burrito'
)


