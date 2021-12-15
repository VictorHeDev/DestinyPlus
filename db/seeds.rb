# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Profile.destroy_all
Genre.destroy_all
VideoGenre.destroy_all
Video.destroy_all
Watchlist.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("profiles")
ActiveRecord::Base.connection.reset_pk_sequence!("genres")
ActiveRecord::Base.connection.reset_pk_sequence!("video_genres")
ActiveRecord::Base.connection.reset_pk_sequence!("videos")
ActiveRecord::Base.connection.reset_pk_sequence!("watchlists")

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
  name: 'DemoUser',
  user_id: 1
)

demoUserProfile2 = Profile.create!(
  name: 'Stella',
  user_id: 1
)

demoUserProfile3 = Profile.create!(
  name: 'Jon!',
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
fantasy = Genre.create!(name: "Fantasy") # maybe get rid of
drama = Genre.create!(name: "Drama")
family = Genre.create!(name: "Family")
education = Genre.create!(name: "Education")
anime = Genre.create!(name: "Anime")
animation = Genre.create!(name: "Animation")

# BONUS GENRES

classic = Genre.create!(name: "Classic")
# romance = Genre.create!(name: "Romance")
# quirky = Genre.create!(name: "Quirky")
# reality = Genre.create!(name: "Reality")

# VIDEOS
# AMERICAN DRAGON JAKE LONG
american_dragon = Video.create!(
  title: "american dragon jake long",
  description: "Jake Long is a skateboarding teenager who secretly is a fire-breathing dragon and the magical protector from New York City. He uses his duties as a dragon to help defend the underground magical world of New York City, while continuing his training.",
  year: "2005",
  runtime: "2 seasons",
  mediatype: "tv"
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
VideoGenre.create!(
  video_id: american_dragon.id,
  genre_id: drama.id
)

american_dragon_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/american-dragon.jpeg')
american_dragon.thumbnail.attach(io: american_dragon_thumbnail, filename: 'american-dragon.jpeg')

american_dragon_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/american-dragon-bg.jpg')
american_dragon.background.attach(io: american_dragon_bg, filename: 'american-dragon-bg.jpg')

american_dragon_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/american-dragon.mp4')
american_dragon.file.attach(io: american_dragon_file, filename: 'american-dragon.mp4')

# # COSMOS
cosmos = Video.create!(
  title: "cosmos",
  description: "Following the wildly successful Cosmos: A Spacetime Odyssey, Neil deGrasse Tyson returns as host to translate more revelations of science into a lavish transporting experience, taking audiences on a series of spiritual voyages of exploration. The show reveals previously uncharted realms, including lost worlds, worlds yet to come, and the worlds that humans may one day inhabit.",
  year: "2020",
  runtime: "1 season",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: cosmos.id,
  genre_id: education.id
)
VideoGenre.create!(
  video_id: cosmos.id,
  genre_id: family.id
)
# cosmos_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/cosmos.jpeg')
# cosmos_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/cosmos_bg.jpg')
# cosmos_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/cosmos.mp4')

cosmos.thumbnail.attach(io: URI.open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/cosmos.jpeg'), filename: 'cosmos.jpeg')

cosmos.background.attach(io: URI.open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/cosmos_bg.jpg'), filename: 'cosmos_bg.jpg')

cosmos.file.attach(io: URI.open('https://destinyplus-seeds.s3.amazonaws.com/videos/cosmos.mp4'), filename: 'cosmos.mp4')

# # AVENGERS
avengers = Video.create!(
  title: "avengers",
  description: "Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a. the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner, a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and the alien invasion.",
  year: "2012",
  runtime: "143 minutes",
  mediatype: "movie"
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

avengers_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/avengers.jpeg')
avengers.thumbnail.attach(io: avengers_thumbnail, filename: 'avengers.jpeg')

avengers_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/avengers_bg.jpg')
avengers.background.attach(io: avengers_bg, filename: 'avengers_bg.jpg')

avengers_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/avengers.mp4')
avengers.file.attach(io: avengers_file, filename: 'avengers.mp4')

# BIG HERO 6
bh6 = Video.create!(
  title: "big hero six",
  description: 'When a devastating event befalls the city of San Fransokyo and catapults Hiro into the midst of danger, he turns to Baymax and his close friends adrenaline junkie Go Go Tomago, neatnik Wasabi, chemistry whiz Honey Lemon and fanboy Fred. Determined to uncover the mystery, Hiro transforms his friends into a band of high-tech heroes called "Big Hero 6."',
  year: "2014",
  runtime: "102 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: bh6.id,
  genre_id: animation.id
)
VideoGenre.create!(
  video_id: bh6.id,
  genre_id: family.id
)
VideoGenre.create!(
  video_id: bh6.id,
  genre_id: comedy.id
)

bh6_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/bh6.jpeg')
bh6.thumbnail.attach(io: bh6_thumbnail, filename: 'bh6.jpeg')

bg6_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/bh6_bg.jpg')
bh6.background.attach(io: bg6_bg, filename: 'bg6_bg.jpg')

bh6_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/bh6.mp4')
bh6.file.attach(io: bh6_file, filename: 'bh6.mp4')

# THE SUITE LIFE OF ZACK AND CODY
suitelife = Video.create!(
  title: "the suite life of zack and cody",
  description: "The Suite Life of Zack and Cody stars identical twin brothers Dylan and Cole Sprouse, as Zack and Cody, whose lives change when their mother, ends up landing a job at one of Boston's finest hotels, the Tipton Hotel. Ashley Michelle Tisdale stars as Maddie Fitzpatrick, who plays the role of the hotel candy counter girl and part-time babysitter. Brenda Song stars as the rich and spoiled hotel heiress, London Tipton; while Phill Lewis plays the role of Mr. Moseby, the Tipton Hotel Manager.",
  year: "2005",
  runtime: "3 seasons",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: suitelife.id,
  genre_id: comedy.id
)
VideoGenre.create!(
  video_id: suitelife.id,
  genre_id: family.id
)
VideoGenre.create!(
  video_id: suitelife.id,
  genre_id: drama.id
)

suitelife_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/suite-life.jpeg')
suitelife.thumbnail.attach(io: suitelife_thumbnail, filename: 'suite-life.jpeg')

suitelife_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/suitelife_bg.jpg')
suitelife.background.attach(io: suitelife_bg, filename: 'suitelife_bg.jpg')

suitelife_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/suitelife.mp4')
suitelife.file.attach(io: suitelife_file, filename: 'suitelife.mp4')

# A GOOFY MOVIE
goofy = Video.create!(
  title: "a goofy movie",
  description: "Though Goofy always means well, his amiable cluelessness and klutzy pratfalls regularly embarrass his awkward adolescent son, Max. When Max's lighthearted prank on his high-school principal finally gets his longtime crush, Roxanne, to notice him, he asks her on a date. Max's trouble at school convinces Goofy that he and the boy need to bond over a cross-country fishing trip like the one he took with his dad when he was Max's age, which throws a kink in his son's plans to impress Roxanne.",
  year: "1995",
  runtime: "81 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: goofy.id,
  genre_id: family.id
)
VideoGenre.create!(
  video_id: goofy.id,
  genre_id: classic.id
)
VideoGenre.create!(
  video_id: goofy.id,
  genre_id: comedy.id
)
VideoGenre.create!(
  video_id: goofy.id,
  genre_id: animation.id
)

goofy_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/goofy-movie.jpeg')
goofy.thumbnail.attach(io: goofy_thumbnail, filename: 'goofy-movie.jpeg')

goofy_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/goofy_bg.jpg')
goofy.background.attach(io: goofy_bg, filename: 'goofy_bg.jpg')

goofy_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/goofy.mp4')
goofy.file.attach(io: goofy_file, filename: 'goofy.mp4')

# RAYA AND THE LAST DRAGON
raya = Video.create!(
  title: "raya and the last dragon",
  description: "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. However, when sinister monsters known as the Druun threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, those same monsters have returned, and it's up to a lone warrior to track down the last dragon and stop the Druun for good.",
  year: "2021",
  runtime: "107 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: raya.id,
  genre_id: family.id
)
VideoGenre.create!(
  video_id: raya.id,
  genre_id: fantasy.id
)
VideoGenre.create!(
  video_id: raya.id,
  genre_id: animation.id
)
VideoGenre.create!(
  video_id: raya.id,
  genre_id: comedy.id
)
raya_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/raya.jpeg')
raya.thumbnail.attach(io: raya_thumbnail, filename: 'raya.jpeg')

raya_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/raya_bg.jpg')
raya.background.attach(io: raya_bg, filename: 'raya_bg.jpg')

raya_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/raya.mp4')
raya.file.attach(io: raya_file, filename: 'raya.mp4')

# FREE SOLO
freesolo = Video.create!(
  title: "free solo",
  description: "Free Solo a stunning, intimate and unflinching portrait of free soloist climber Alex Honnold, as he prepares to achieve his lifelong dream: climbing the face of the world’s most famous rock ... the 3,200-foot El Capitan in Yosemite National Park … without a rope.",
  year: "2018",
  runtime: "100 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: freesolo.id,
  genre_id: education.id
)
freesolo_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/free-solo.jpeg')
freesolo.thumbnail.attach(io: freesolo_thumbnail, filename: 'free-solo.jpeg')

freesolo_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/freesolo_bg.jpg')
freesolo.background.attach(io: freesolo_bg, filename: 'freesolo_bg.jpg')

freesolo_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/freesolo.mp4')
freesolo.file.attach(io: freesolo_file, filename: 'freesolo.mp4')

# WENDY WU
wendywu = Video.create!(
  title: "wendy wu homecoming warrior",
  description: "Wendy Wu is a teenager who seems to have the perfect life: she's beautiful, popular and one of the two candidates to be voted Homecoming Queen. However, her life is changed when Shen, a monk from China, imparts to her the shocking truth about herself- she is a reincarnated Yin Warrior, whose destiny is to battle the evil Yan Lo.",
  year: "2006",
  runtime: "91 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: wendywu.id,
  genre_id: family.id
)
VideoGenre.create!(
  video_id: wendywu.id,
  genre_id: drama.id
)
VideoGenre.create!(
  video_id: wendywu.id,
  genre_id: action.id
)
wendywu_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/wendy-wu.jpeg')
wendywu.thumbnail.attach(io: wendywu_thumbnail, filename: 'wendy-wu.jpeg')

wendywu_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/wendywu_bg.jpg')
wendywu.background.attach(io: wendywu_bg, filename: 'wendywu_bg.jpg')

wendywu_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/wendywu.mp4')
wendywu.file.attach(io: wendywu_file, filename: 'wendywu.mp4')

# LILO & STITCH THE MOVIE
liloandstitch = Video.create!(
  title: "lilo and stitch",
  description: "A tale of a young girl's close encounter with the galaxy's most wanted extraterrestrial. Lilo is a lonely Hawaiian girl who adopts a small ugly 'dog', whom she names Stitch. Stitch would be the perfect pet if he weren't in reality a genetic experiment who has escaped from an alien planet and crash-landed on Earth. Through her love, faith and unwavering belief in ohana, the Hawaiian concept of family, Lilo helps unlock Stitch's heart and gives him the ability to care for someone else.",
  year: "2002",
  runtime: "92 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: liloandstitch.id,
  genre_id: family.id
)
VideoGenre.create!(
  video_id: liloandstitch.id,
  genre_id: classic.id
)
VideoGenre.create!(
  video_id: liloandstitch.id,
  genre_id: animation.id
)
VideoGenre.create!(
  video_id: liloandstitch.id,
  genre_id: comedy.id
)
liloandstitch_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/lilo-and-stitch.jpeg')
liloandstitch.thumbnail.attach(io: liloandstitch_thumbnail, filename: 'lilo-and-stitch.jpeg')

liloandstitch_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/liloandstitch_bg.jpg')
liloandstitch.background.attach(io: liloandstitch_bg, filename: 'liloandstitch_bg.jpg')

liloandstitch_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/liloandstitch.mp4')
liloandstitch.file.attach(io: liloandstitch_file, filename: 'liloandstitch.mp4')

# WOLFGANG
wolfgang = Video.create!(
  title: "wolfgang",
  description: "The true story of Wolfgang Puck, a man who survived a troubled childhood filled with a series of challenging obstacles and whose perseverance led him to become a prolific and celebrated chef.",
  year: "2021",
  runtime: "78 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: wolfgang.id,
  genre_id: education.id
)
wolfgang_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/wolfgang.jpeg')
wolfgang.thumbnail.attach(io: wolfgang_thumbnail, filename: 'wolfgang.jpeg')

wolfgang_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/wolfgang_bg.jpg')
wolfgang.background.attach(io: wolfgang_bg, filename: 'wolfgang_bg.jpg')

wolfgang_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/wolfgang.mp4')
wolfgang.file.attach(io: wolfgang_file, filename: 'wolfgang.mp4')

# THE MANDALORIAN
mandalorian = Video.create!(
  title: "the mandalorian",
  description: "After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.",
  year: "2019",
  runtime: "2 seasons",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: mandalorian.id,
  genre_id: fantasy.id
)
VideoGenre.create!(
  video_id: mandalorian.id,
  genre_id: action.id
)
VideoGenre.create!(
  video_id: mandalorian.id,
  genre_id: drama.id
)
mandalorian_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/mandalorian.jpeg')
mandalorian.thumbnail.attach(io: mandalorian_thumbnail, filename: 'mandalorian.jpeg')

mandalorian_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/mandalorian_bg.jpg')
mandalorian.background.attach(io: mandalorian_bg, filename: 'mandalorian_bg.jpg')

mandalorian_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/mandalorian.mp4')
mandalorian.file.attach(io: mandalorian_file, filename: 'mandalorian.mp4')

# BRAIN GAMES
braingames = Video.create!(
  title: "brain games",
  description: "Brain Games investigates every piece of the memory puzzle, from how we recognize faces to how we can move memories from short-term to long-term storage.",
  year: "2011",
  runtime: "6 seasons",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: braingames.id,
  genre_id: education.id
)
braingames_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/brain-games.jpg')
braingames.thumbnail.attach(io: braingames_thumbnail, filename: 'brain-games.jpg')

braingames_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/braingames_bg.jpg')
braingames.background.attach(io: braingames_bg, filename: 'braingames_bg.jpg')

braingames_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/braingames.mp4')
braingames.file.attach(io: braingames_file, filename: 'braingames.mp4')

# THE SIMPSONS
simpsons = Video.create!(
  title: "the simpsons",
  description: "This is an animated sitcom about the antics of a dysfunctional family. Homer is the oafish unhealthy beer loving father, Marge is the hardworking homemaker wife, Bart is the perpetual ten-year-old underachiever (and proud of it), Lisa is the unappreciated eight-year-old genius, and Maggie is the cute, pacifier loving silent infant.",
  year: "1989",
  runtime: "34 seasons",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: simpsons.id,
  genre_id: comedy.id
)
VideoGenre.create!(
  video_id: simpsons.id,
  genre_id: classic.id
)
VideoGenre.create!(
  video_id: simpsons.id,
  genre_id: animation.id
)
simpsons_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/simpsons.jpg')
simpsons.thumbnail.attach(io: simpsons_thumbnail, filename: 'simpsons.jpg')

simpsons_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/simpsons_bg.jpg')
simpsons.background.attach(io: simpsons_bg, filename: 'simpsons_bg.jpg')

simpsons_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/simpsons.mp4')
simpsons.file.attach(io: simpsons_file, filename: 'simpsons.mp4')

# JOHNNY KAPAHALA
johnny_kapahala = Video.create!(
  title: "johnny kapahala back on board",
  description: "Johnny Kapahala is back in Hawaii, hoping to catch some surf and also attend the wedding of his grandfather, the legendary surfing hero. All he really wants to do is get on the mountain boarding team, but life quickly gets complicated for Johnny as he meets his 12-year-old uncle (his step-grandmother's son), and gets involved in a turf war between rival boarding shops.",
  year: "2008",
  runtime: "90 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: johnny_kapahala.id,
  genre_id: drama.id
)
VideoGenre.create!(
  video_id: johnny_kapahala.id,
  genre_id: family.id
)
johnny_kapahala_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/johnny-kapahala.jpeg')
johnny_kapahala.thumbnail.attach(io: johnny_kapahala_thumbnail, filename: 'johnny-kapahala.jpeg')

johnny_kapahala_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/johnny_kapahala_bg.jpg')
johnny_kapahala.background.attach(io: johnny_kapahala_bg, filename: 'johnny_kapahala_bg.jpg')

johnny_kapahala_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/johnny_tsunami.mp4')
johnny_kapahala.file.attach(io: johnny_kapahala_file, filename: 'johnny_tsunami.mp4')

# SHANGCHI AND THE LEGEND OF THE TEN RINGS
shangchi = Video.create!(
  title: "shang chi and the legend of the ten rings",
  description: "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
  year: "2021",
  runtime: "90 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: shangchi.id,
  genre_id: action.id
)
VideoGenre.create!(
  video_id: shangchi.id,
  genre_id: fantasy.id
)
shangchi_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/shang-chi.jpeg')
shangchi.thumbnail.attach(io: shangchi_thumbnail, filename: 'shang-chi.jpeg')

shangchi_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/shangchi_bg.jpg')
shangchi.background.attach(io: shangchi_bg, filename: 'shangchi_bg.jpg')

shangchi_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/shangchi.mp4')
shangchi.file.attach(io: shangchi_file, filename: 'shangchi.mp4')

# BLACK WIDOW
black_widow = Video.create!(
  title: "black widow",
  description: "Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursed by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationship left in her wake long before she became an Avenger.",
  year: "2021",
  runtime: "135 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: black_widow.id,
  genre_id: action.id
)
VideoGenre.create!(
  video_id: black_widow.id,
  genre_id: fantasy.id
)
black_widow_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/black-widow.jpeg')
black_widow.thumbnail.attach(io: black_widow_thumbnail, filename: 'black-widow.jpeg')

black_widow_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/black-widow-bg.jpg')
black_widow.background.attach(io: black_widow_bg, filename: 'back-widow-bg.jpg')

black_widow_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/black-widow.mp4')
black_widow.file.attach(io: black_widow_file, filename: 'black-widow.mp4')

# MULAN
mulan = Video.create!(
  title: "mulan",
  description: "Fearful that her ailing father will be drafted into the Chinese military, Mulan (Ming-Na Wen) takes his spot -- though, as a girl living under a patriarchal regime, she is technically unqualified to serve. She cleverly impersonates a man and goes off to train with fellow recruits. Accompanied by her dragon, Mushu (Eddie Murphy), she uses her smarts to help ward off a Hun invasion, falling in love with a dashing captain along the way.
",
  year: "1998",
  runtime: "95 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: mulan.id,
  genre_id: action.id
)
VideoGenre.create!(
  video_id: mulan.id,
  genre_id: fantasy.id
)
VideoGenre.create!(
  video_id: mulan.id,
  genre_id: animation.id
)
VideoGenre.create!(
  video_id: mulan.id,
  genre_id: classic.id
)

mulan_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/mulan.jpeg')
mulan.thumbnail.attach(io: mulan_thumbnail, filename: 'mulan.jpeg')

mulan_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/mulan-bg.jpg')
mulan.background.attach(io: mulan_bg, filename: 'mulan-bg.jpg')

mulan_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/mulan.mp4')
mulan.file.attach(io: mulan_file, filename: 'mulan.mp4')


# TEN THINGS I HATE ABOUT YOU
ten_things = Video.create!(
  title: "ten things I hate about you",
  description: "On the first day at his new school, Cameron instantly falls for Bianca, the gorgeous girl of his dreams, but she is forbidden from dating until her ill-tempered, completely un-datable older sister Kat goes out, too",
  year: "1999",
  runtime: "98 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: ten_things.id,
  genre_id: comedy.id
)
VideoGenre.create!(
  video_id: ten_things.id,
  genre_id: drama.id
)
VideoGenre.create!(
  video_id: ten_things.id,
  genre_id: classic.id
)

ten_things_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/ten-things-i-hate-about-you.jpeg')
ten_things.thumbnail.attach(io: ten_things_thumbnail, filename: 'ten-things-i-hate-about-you.jepg')

ten_things_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/ten-things-bg.jpg')
ten_things.background.attach(io: ten_things_bg, filename: 'ten-things-bg.jpg')

ten_things_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/ten-things.mp4')
ten_things.file.attach(io: ten_things_file, filename: 'ten-things.mp4')

# AROUND THE WORLD IN 80 DAYS
eighty_days = Video.create!(
  title: "around the world in eighty days",
  description: "After being forced into a bet by the Royal Academy's Minister of Science, Phileas Fogg, Lau Xing and Monique La Roche dare to do what no one has done before--beat the click in a race around the world. Traveling the globe by land, sea, air, and even in-line skates, Fogg must complete his trip around the world in 80 days, or he will never be allowed to invent again.",
  year: "2004",
  runtime: "120 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: eighty_days.id,
  genre_id: comedy.id
)
VideoGenre.create!(
  video_id: eighty_days.id,
  genre_id: drama.id
)
VideoGenre.create!(
  video_id: eighty_days.id,
  genre_id: action.id
)

eighty_days_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/around-the-world.jpg')
eighty_days.thumbnail.attach(io: eighty_days_thumbnail, filename: 'around-the-world.jepg')

eighty_days_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/eighty-days-bg.jpg')
eighty_days.background.attach(io: eighty_days_bg, filename: 'eighty-days-bg.jpg')

eighty_days_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/eighty-days.mp4')
eighty_days.file.attach(io: eighty_days_file, filename: 'eighty-days.mp4')

# ATLANTIS THE LOST EMPIRE
atlantis = Video.create!(
  title: "atlantis the lost empire",
  description: "A crew of archeologists and explorers, led by historian Milo Thatch, board an incredible submarine and head deep into the mysteries of the sea in search of the legendary kingdom of Atlantis. The underwater expedition takes an unexpected turn when the team's mission must shift from exploring the submerged kingdom to protecting it from the mystical powers that be.",
  year: "2001",
  runtime: "98 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: atlantis.id,
  genre_id: comedy.id
)
VideoGenre.create!(
  video_id: atlantis.id,
  genre_id: fantasy.id
)
VideoGenre.create!(
  video_id: atlantis.id,
  genre_id: action.id
)
VideoGenre.create!(
  video_id: atlantis.id,
  genre_id: animation.id
)
VideoGenre.create!(
  video_id: atlantis.id,
  genre_id: classic.id
)

atlantis_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/atlantis.jpg')
atlantis.thumbnail.attach(io: atlantis_thumbnail, filename: 'atlantis.jpg')

atlantis_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/atlantis.jpg')
atlantis.background.attach(io: atlantis_bg, filename: 'atlantis_bg.jpg')

atlantis_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/atlantis.mp4')
atlantis.file.attach(io: atlantis_file, filename: 'atlantis.mp4')

# HIGH SCHOOL MUSICAL
hsm = Video.create!(
  title: "high school musical",
  description: "East High is taken by storm when Troy, the star captain of the school's basketball team, and Gabriella, a brainy new student, connect on a level that's more than a school crush. When the two discover they might have a real passion for singing, they take their place in the spotlight, setting off a chain of events that puts all of East High into a musical frenzy.",
  year: "2006",
  runtime: "100 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: hsm.id,
  genre_id: comedy.id
)
VideoGenre.create!(
  video_id: hsm.id,
  genre_id: drama.id
)
VideoGenre.create!(
  video_id: hsm.id,
  genre_id: family.id
)
VideoGenre.create!(
  video_id: hsm.id,
  genre_id: classic.id
)

hsm_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/high-school-musical.jpeg')
hsm.thumbnail.attach(io: hsm_thumbnail, filename: 'high-school-musical.jpeg')

hsm_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/hsm-bg.jpg')
hsm.background.attach(io: hsm_bg, filename: 'hsm-bg.jpg')

hsm_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/hsm.mp4')
hsm.file.attach(io: hsm_file, filename: 'hsm.mp4')

# TOY STORY
toy_story = Video.create!(
  title: "toy story",
  description: "WElcome to an astonishing world where toys play while their owners are away. Meet Woody, Buzz, and all their friends in an adventure filled with humor, heart, and friendship.",
  year: "1995",
  runtime: "83 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: toy_story.id,
  genre_id: comedy.id
)
VideoGenre.create!(
  video_id: toy_story.id,
  genre_id: drama.id
)
VideoGenre.create!(
  video_id: toy_story.id,
  genre_id: family.id
)
VideoGenre.create!(
  video_id: toy_story.id,
  genre_id: animation.id
)
VideoGenre.create!(
  video_id: toy_story.id,
  genre_id: classic.id
)

toy_story_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/toy-story.jpeg')
toy_story.thumbnail.attach(io: toy_story_thumbnail, filename: 'toy-story.jepg')

toy_story_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/toy-story-bg.jpg')
toy_story.background.attach(io: toy_story_bg, filename: 'toy-story-bg.jpg')

toy_story_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/toy-story.mp4')
toy_story.file.attach(io: toy_story_file, filename: 'toy-story.mp4')


# ISLE OF DOGS
isle_of_dogs = Video.create!(
  title: "isle of dogs",
  description: "Set in Japan, Isle of Dogs follows a boy's odyssey in search of his lost dog. ... After an outbreak of snout fever, all the dogs in Japan are sent to Trash Island and live in exile and eventually die.",
  year: "2018",
  runtime: "91 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: isle_of_dogs.id,
  genre_id: family.id
)
VideoGenre.create!(
  video_id: isle_of_dogs.id,
  genre_id: animation.id
)
VideoGenre.create!(
  video_id: isle_of_dogs.id,
  genre_id: comedy.id
)
isle_of_dogs_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/isle-of-dogs.jpeg')
isle_of_dogs.thumbnail.attach(io: isle_of_dogs_thumbnail, filename: 'isle-of-dogs.jepg')

isle_of_dogs_bg = open('https://destinyplus-seeds.s3.amazonaws.com/backgrounds/isle_of_dogs_bg.jpg')
isle_of_dogs.background.attach(io: isle_of_dogs_bg, filename: 'isle_of_dogs_bg.jpg')

isle_of_dogs_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/isle-of-dogs.mp4')
isle_of_dogs.file.attach(io: isle_of_dogs_file, filename: 'isle-of-dogs.mp4')


# ANTHONY BOURDAIN: PARTS UNKNOWN
parts_unknown = Video.create!(
  title: "anthony bourdain parts unknown",
  description: "Anthony Bourdain visits countries, delving into their political issues as well as indigenous food and culture.",
  year: "2013",
  runtime: "12 seasons",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: parts_unknown.id,
  genre_id: education.id
)
VideoGenre.create!(
  video_id: parts_unknown.id,
  genre_id: family.id
)
parts_unknown_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/parts-unknown.jpg')
parts_unknown.thumbnail.attach(io: parts_unknown_thumbnail, filename: 'parts-unknown.jpg')

parts_unknown_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/parts-unknown.mp4')
parts_unknown.file.attach(io: parts_unknown_file, filename: 'parts-unknown.mp4')

# JIRO DREAMS OF SUSHI
jiro = Video.create!(
  title: "jiro dreams of sushi",
  description: "In the basement of a Tokyo office building, 85 year old sushi master Jiro Ono works tirelessly in his world renowned restaurant, Sukiyabashi Jiro. As his son Yoshikazu faces the pressures of stepping into his father's shoes and taking over the legendary restaurant, Jiro relentlessly pursues his lifelong quest to create the perfect piece of sushi.",
  year: "2011",
  runtime: "86 mins",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: jiro.id,
  genre_id: education.id
)
jiro_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/jiro.jpg')
jiro.thumbnail.attach(io: jiro_thumbnail, filename: 'jiro.jpg')

joro_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/jiro.mp4')
jiro.file.attach(io: joro_file, filename: 'jiro.mp4')

# THE LAST DANCE
last_dance = Video.create!(
  title: "the last dance",
  description: "The Last Dance is a 2020 American sports documentary miniseries co-produced by ESPN Films and Netflix. Directed by Jason Hehir, the series revolves around the career of Michael Jordan, with particular focus on his final season with the Chicago Bulls.",
  year: "2020",
  runtime: "1 season",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: last_dance.id,
  genre_id: education.id
)
last_dance_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/last-dance.jpg')
last_dance.thumbnail.attach(io: last_dance_thumbnail, filename: 'last-dance-jpg')

last_dance_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/last-dance.mp4')
last_dance.file.attach(io: last_dance_file, filename: 'last-dance.mp4')

# SALT ACID FAT HEAT
# TODO: ADD SAFH VIDEO
safh = Video.create!(
  title: "salt acid fat heat",
  description: "Docuseries, based on the award-winning book by Samin Nosrat, explores the essence of cooking and the vital ingredients at the heart of a great dish.",
  year: "2018",
  runtime: "1 season",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: safh.id,
  genre_id: education.id
)
safh_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/safh.jpg')
safh.thumbnail.attach(io: safh_thumbnail, filename: 'safh.jpg')

safh_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/safh.mp4')
safh.file.attach(io: safh_file, filename: 'safh.mp4')

# COWBOY BEBOP
bebop = Video.create!(
  title: "cowboy bebop",
  description: "Spike Spiegel is a bounty hunter in the far future with an easy going attitude and some deadly skill at martial arts. Together with his partners, Jet Black, and later Faye Valentine as well, they go from job to job across the galaxy looking for the high priced fugitives to bag.",
  year: "1998",
  runtime: "1 season",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: bebop.id,
  genre_id: anime.id
)
bebop_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/cowboy-bebop.jpg')
bebop.thumbnail.attach(io: bebop_thumbnail, filename: 'cowboy-bebop.jpg')

bebop_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/bebop.mp4')
bebop.file.attach(io: bebop_file, filename: 'bebop.mp4')

# SPIRITED AWAY
spirited_away = Video.create!(
  title: "spirited away",
  description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
  year: "2001",
  runtime: "125 mins",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: spirited_away.id,
  genre_id: anime.id
)
spirited_away_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/spirited-away.jpg')
spirited_away.thumbnail.attach(io: spirited_away_thumbnail, filename: 'spirited-away.jpg')

spirited_away_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/spirited-away.mp4')
spirited_away.file.attach(io: spirited_away_file, filename: 'spirited-away.mp4')

# PRINCESS MONONOKE
mononoke = Video.create!(
  title: "princess mononoke",
  description: "While protecting his village from rampaging boar-god/demon, a confident young warrior, Ashitaka, is stricken by a deadly curse. To save his life, he must journey to the forests of the west. Once there, he's embroiled in a fierce campaign that humans were waging on the forest. The ambitious Lady Eboshi and her loyal clan use their guns against the gods of the forest and a brave young woman, Princess Mononoke, who was raised by a wolf-god. Ashitaka sees the good in both sides and tries to stem the flood of blood. This is met by animosity by both sides as they each see him as supporting the enemy.",
  year: "1997",
  runtime: "134 mins",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: mononoke.id,
  genre_id: anime.id
)
mononoke_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/princess-mononoke.jpg')
mononoke.thumbnail.attach(io: mononoke_thumbnail, filename: 'princess-mononoke.jpg')

mononoke_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/mononoke.mp4')
mononoke.file.attach(io: mononoke_file, filename: 'mononoke.mp4')

# YOUR NAME
your_name = Video.create!(
  title: "your name",
  description: "Mitsuha is the daughter of the mayor of a small mountain town. She's a straightforward high school girl who lives with her sister and her grandmother and has no qualms about letting it be known that she's uninterested in Shinto rituals or helping her father's electoral campaign. Instead she dreams of leaving the boring town and trying her luck in Tokyo. Taki is a high school boy in Tokyo who works part-time in an Italian restaurant and aspires to become an architect or an artist. Every night he has a strange dream where he becomes...a high school girl in a small mountain town.",
  year: "2016",
  runtime: "106 mins",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: your_name.id,
  genre_id: anime.id
)
your_name_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/your-name.jpg')
your_name.thumbnail.attach(io: your_name_thumbnail, filename: 'your-name.jpg')

your_name_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/your-name.mp4')
your_name.file.attach(io: your_name_file, filename: 'your-name.mp4')

# FULLMETAL ALCHEMIST
fma = Video.create!(
  title: "fullmetal alchemist brotherhood",
  description: "Two brothers lose their mother to an incurable disease. With the power of 'alchemy', they use taboo knowledge to resurrect her. The process fails, and as a toll for using this type of alchemy, the older brother, Edward Elric loses his left leg while the younger brother, Alphonse Elric loses his entire body. To save his brother, Edward sacrifices his right arm and is able to affix his brother's soul to a suit of armor. With the help of a family friend, Edward receives metal limbs - 'automail' - to replace his lost ones. With that, Edward vows to search for the Philosopher's Stone to return the brothers to their original bodies, even if it means becoming a 'State Alchemist', one who uses his/her alchemy for the military.",
  year: "2009",
  runtime: "2 seasons",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: fma.id,
  genre_id: anime.id
)
fma_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/fma.jpg')
fma.thumbnail.attach(io: fma_thumbnail, filename: 'fma.jpg')

fma_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/fma.mp4')
fma.file.attach(io: fma_file, filename: 'fma.mp4')

# ONE PIECE
op = Video.create!(
  title: "one piece",
  description: "There once lived a pirate named Gol D. Roger. He obtained wealth, fame, and power to earn the title of Pirate King. When he was captured and about to be executed, he revealed that his treasure called One Piece was hidden somewhere at the Grand Line. This made all people set out to search and uncover the One Piece treasure, but no one ever found the location of Gol D. Roger's treasure, and the Grand Line was too dangerous a place to overcome. Twenty-two years after Gol D. Roger's death, a boy named Monkey D. Luffy decided to become a pirate and search for Gol D. Roger's treasure to become the next Pirate King.",
  year: "1999",
  runtime: "40 seasons",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: op.id,
  genre_id: anime.id
)
op_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/op.jpg')
op.thumbnail.attach(io: op_thumbnail, filename: 'op.jpg')

op_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/op.mp4')
op.file.attach(io: op_file, filename: 'op.mp4')

# NARUTO SHIPPUDEN
shippuden = Video.create!(
  title: "naruto shippuden",
  description: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
  year: "2007",
  runtime: "10 seasons",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: shippuden.id,
  genre_id: anime.id
)
shippuden_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/shippuden.jpg')
shippuden.thumbnail.attach(io: shippuden_thumbnail, filename: 'shippuden.jpg')

shippuden_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/shippuden.mp4')
shippuden.file.attach(io: shippuden_file, filename: 'shippuden.mp4')

# MY HERO ACADEMIA
mha = Video.create!(
  title: "my hero academia",
  description: "In a world populated with superhumans, the superhero-loving Izuku Midoriya is without power. However, after the Quirkless dreamer Izuku inherits the powers of the world's best superhero, All Might, his hopes of becoming the top hero are now possible. Once enrolled in the high school for heroes, U.A., Izuku soon discovers being a hero is much more complicated than it appears.",
  year: "2016",
  runtime: "6 seasons",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: mha.id,
  genre_id: anime.id
)
mha_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/mha.jpg')
mha.thumbnail.attach(io: mha_thumbnail, filename: 'mha.jpg')

mha_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/mha.mp4')
mha.file.attach(io: mha_file, filename: 'mha.mp4')

# DEMON SLAYER
demon_slayer = Video.create!(
  title: "demon slayer",
  description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
  year: "2019",
  runtime: "2 seasons",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: demon_slayer.id,
  genre_id: anime.id
)
demon_slayer_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/thumbnails/demon-slayer.jpg')
demon_slayer.thumbnail.attach(io: demon_slayer_thumbnail, filename: 'demon-slayer.jpg')

demon_slayer_file = open('https://destinyplus-seeds.s3.amazonaws.com/videos/demon-slayer.mp4')
demon_slayer.file.attach(io: demon_slayer_file, filename: 'demon-slayer.mp4')


# WATCHLIST
demoUserWatchlist1 = Watchlist.create!(
  profile_id: demoUserProfile1.id,
  video_id: american_dragon.id
)
demoUserWatchlist2 = Watchlist.create!(
  profile_id: demoUserProfile1.id,
  video_id: cosmos.id
)
demoUserWatchlist3 = Watchlist.create!(
  profile_id: demoUserProfile1.id,
  video_id: avengers.id
)
demoUserWatchlist4 = Watchlist.create!(
  profile_id: demoUserProfile2.id,
  video_id: american_dragon.id
)
demoUserWatchlist5 = Watchlist.create!(
  profile_id: demoUserProfile2.id,
  video_id: cosmos.id
)
demoUserWatchlist6 = Watchlist.create!(
  profile_id: demoUserProfile2.id,
  video_id: avengers.id
)
demoUserWatchlist7= Watchlist.create!(
  profile_id: demoUserProfile3.id,
  video_id: american_dragon.id
)
demoUserWatchlist8 = Watchlist.create!(
  profile_id: demoUserProfile3.id,
  video_id: cosmos.id
)
demoUserWatchlist9 = Watchlist.create!(
  profile_id: demoUserProfile3.id,
  video_id: avengers.id
)

u1Watchlist1 = Watchlist.create!(
  profile_id: u1p1.id,
  video_id: bh6.id
)
u1Watchlist2 = Watchlist.create!(
  profile_id: u1p1.id,
  video_id: suitelife.id
)
u1Watchlist3 = Watchlist.create!(
  profile_id: u1p1.id,
  video_id: goofy.id
)

