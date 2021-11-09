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
fantasy = Genre.create!(name: "Fantasy") # maybe get rid of
drama = Genre.create!(name: "Drama")
family = Genre.create!(name: "Family")
education = Genre.create!(name: "Education")
anime = Genre.create!(name: "Anime")
animation = Genre.create!(name: "Animation")

# BONUS GENRES
classic = Genre.create!(name: "Classic")

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

american_dragon_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/jake-long.jpeg')
american_dragon.thumbnail.attach(io: american_dragon_thumbnail, filename: 'jake-long.jpeg')

# COSMOS
cosmos = Video.create!(
  title: "Cosmos",
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
cosmos_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/cosmos.jpeg')
cosmos.thumbnail.attach(io: cosmos_thumbnail, filename: 'cosmos.jpeg')

# AVENGERS
avengers = Video.create!(
  title: "Avengers",
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

avengers_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/avengers.jpeg')
avengers.thumbnail.attach(io: avengers_thumbnail, filename: 'avengers.jpeg')


bh6 = Video.create!(
  title: "Big Hero 6",
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

bh6_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/bh6.jpeg')
bh6.thumbnail.attach(io: bh6_thumbnail, filename: 'bh6.jpeg')

# THE SUITE LIFE OF ZACK AND CODY
suitelife = Video.create!(
  title: "The Suite Life of Zack and Cody",
  description: "The Suite Life of Zack and Cody stars identical twin brothers Dylan and Cole Sprouse, as Zack and Cody, whose lives change when their mother Carey (Kim Rhodes), ends up landing a job at one of Boston's finest hotels, the Tipton Hotel. As part of Carey's contractual deal, the twins and her get to live in an upper floor suite of the hotel. Ashley Michelle Tisdale stars as Maddie Fitzpatrick, who plays the role of the hotel candy counter girl and part-time babysitter, that tends to having to put an end to Zack and Cody's antics. Brenda Song stars as the rich and spoiled hotel heiress, London Tipton; while Phill Lewis plays the role of Mr. Moseby, the Tipton Hotel Manager.",
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

suitelife_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/suite-life.jpeg')
suitelife.thumbnail.attach(io: suitelife_thumbnail, filename: 'suite-life.jpeg')

# A GOOFY MOVIE
goofy = Video.create!(
  title: "A Goofy Movie",
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

goofy_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/goofy-movie.jpeg')
goofy.thumbnail.attach(io: goofy_thumbnail, filename: 'goofy-movie.jpeg')

# RAVA AND THE LAST DRAGON
rava = Video.create!(
  title: "Rava and The Last Dragon",
  description: "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. However, when sinister monsters known as the Druun threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, those same monsters have returned, and it's up to a lone warrior to track down the last dragon and stop the Druun for good.",
  year: "2021",
  runtime: "107 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: rava.id,
  genre_id: family.id
)
VideoGenre.create!(
  video_id: rava.id,
  genre_id: fantasy.id
)
VideoGenre.create!(
  video_id: rava.id,
  genre_id: animation.id
)
rava_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/rava.jpeg')
rava.thumbnail.attach(io: rava_thumbnail, filename: 'rava.jpeg')

# FREE SOLO
freesolo = Video.create!(
  title: "Free Solo",
  description: "Free Solo a stunning, intimate and unflinching portrait of free soloist climber Alex Honnold, as he prepares to achieve his lifelong dream: climbing the face of the world’s most famous rock ... the 3,200-foot El Capitan in Yosemite National Park … without a rope.",
  year: "2018",
  runtime: "100 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: freesolo.id,
  genre_id: education.id
)
freesolo_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/free-solo.jpeg')
freesolo.thumbnail.attach(io: freesolo_thumbnail, filename: 'free-solo.jpeg')

# WENDY WU
wendywu = Video.create!(
  title: "Wendy Wu: Homecoming Warrior",
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
wendywu_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/wendy-wu.jpeg')
wendywu.thumbnail.attach(io: wendywu_thumbnail, filename: 'wendy-wu.jpeg')

# LILO & STITCH THE MOVIE
liloandstitch = Video.create!(
  title: "Lilo & Stitch",
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
liloandstitch_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/lilo-and-stitch.jpeg')
liloandstitch.thumbnail.attach(io: liloandstitch_thumbnail, filename: 'lilo-and-stitch.jpeg')

# WOLFGANG
wolfgang = Video.create!(
  title: "Wolfgang",
  description: "The true story of Wolfgang Puck, a man who survived a troubled childhood filled with a series of challenging obstacles and whose perseverance led him to become a prolific and celebrated chef.",
  year: "2021",
  runtime: "78 minutes",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: wolfgang.id,
  genre_id: education.id
)
wolfgang_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/wolfgang.jpeg')
wolfgang.thumbnail.attach(io: wolfgang_thumbnail, filename: 'wolfgang.jpeg')

# THE MANDALORIAN
mandalorian = Video.create!(
  title: "The Mandalorian",
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
mandalorian_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/mandalorian.jpeg')
mandalorian.thumbnail.attach(io: mandalorian_thumbnail, filename: 'mandalorian.jpeg')

# BRAIN GAMES
braingames = Video.create!(
  title: "Brain Games",
  description: "Brain Games investigates every piece of the memory puzzle, from how we recognize faces to how we can move memories from short-term to long-term storage.",
  year: "2011",
  runtime: "6 seasons",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: braingames.id,
  genre_id: education.id
)
braingames_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/brain-games.jpg')
braingames.thumbnail.attach(io: braingames_thumbnail, filename: 'mandalorian.jpeg')

# THE SIMPSONS
simpsons = Video.create!(
  title: "The Simpsons",
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
simpsons_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/simpsons.jpg')
simpsons.thumbnail.attach(io: simpsons_thumbnail, filename: 'simpsons.jpg')

# JOHNNY KAPAHALA
johnny_kapahala = Video.create!(
  title: "Johnny Kapahala Back on Board",
  description: "Johnny Kapahala, a teen snowboarding champion from Vermont, returns to Oahu, Hawaii for the wedding of his hero--his grandfather, local surf legend Johnny Tsunami--and to catch a few famous Kauai waves. When Johnny arrives, he meets his new family including Uncle Chris, his new stepgrandmother's 12-year-old son, who resents the upcoming marriage and whose only interest is to join a mountain-boarding crew led by a teenage bully. When Johnny's grandfather and his new wife open a surf shop that also caters to mountain boarders, they are soon embroiled in a turf war with a rival shop-owner who wants to shut down their business.",
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
johnny_kapahala_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/johnny-kapahala.jpeg')
johnny_kapahala.thumbnail.attach(io: johnny_kapahala_thumbnail, filename: 'johnny-kapahala.jepg')

# SHANGCHI AND THE LEGEND OF THE TEN RINGS
shangchi = Video.create!(
  title: "Shang Chi and the Legend of the Ten Rings",
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
shangchi_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/shang-chi.jpeg')
shangchi.thumbnail.attach(io: shangchi_thumbnail, filename: 'shang-chi.jepg')

# ISLE OF DOGS
isle_of_dogs = Video.create!(
  title: "Isle of Dogs",
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
isle_of_dogs_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/isle-of-dogs.jpeg')
isle_of_dogs.thumbnail.attach(io: isle_of_dogs_thumbnail, filename: 'isle-of-dogs.jepg')


# ANTHONY BOURDAIN: PARTS UNKNOWN
parts_unknown = Video.create!(
  title: "Anthony Bourdain: Parts Unknown",
  description: "Anthony Bourdain visits countries, delving into their political issues as well as indigenous food and culture.",
  year: "2013",
  runtime: "12 seasons",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: parts_unknown.id,
  genre_id: education.id
)
parts_unknown_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/parts-unknown.jpg')
parts_unknown.thumbnail.attach(io: parts_unknown_thumbnail, filename: 'parts-unknown.jpg')

# JIRO DREAMS OF SUSHI
jiro = Video.create!(
  title: "Jiro Dreams of Sushi",
  description: "In the basement of a Tokyo office building, 85 year old sushi master Jiro Ono works tirelessly in his world renowned restaurant, Sukiyabashi Jiro. As his son Yoshikazu faces the pressures of stepping into his father's shoes and taking over the legendary restaurant, Jiro relentlessly pursues his lifelong quest to create the perfect piece of sushi.",
  year: "2011",
  runtime: "86 mins",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: jiro.id,
  genre_id: education.id
)
jiro_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/jiro.jpg')
jiro.thumbnail.attach(io: jiro_thumbnail, filename: 'jiro.jpg')

# THE LAST DANCE
last_dance = Video.create!(
  title: "The Last Dance",
  description: "The Last Dance is a 2020 American sports documentary miniseries co-produced by ESPN Films and Netflix. Directed by Jason Hehir, the series revolves around the career of Michael Jordan, with particular focus on his final season with the Chicago Bulls.",
  year: "2020",
  runtime: "1 season",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: last_dance.id,
  genre_id: education.id
)
last_dance_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/last-dance.jpg')
last_dance.thumbnail.attach(io: last_dance_thumbnail, filename: 'last-dance-jpg')

# SALT ACID FAT HEAT
safh = Video.create!(
  title: "Salt Acid Fat Heat",
  description: "Docuseries, based on the award-winning book by Samin Nosrat, explores the essence of cooking and the vital ingredients at the heart of a great dish.",
  year: "2018",
  runtime: "1 season",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: safh.id,
  genre_id: education.id
)
safh_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/safh.jpg')
safh.thumbnail.attach(io: safh_thumbnail, filename: 'safh.jpg')

# COWBOY BEBOP
bebop = Video.create!(
  title: "Cowboy Bebop",
  description: "Spike Spiegel is a bounty hunter in the far future with an easy going attitude and some deadly skill at martial arts. Together with his partners, Jet Black, and later Faye Valentine as well, they go from job to job across the galaxy looking for the high priced fugitives to bag.",
  year: "1998",
  runtime: "1 season",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: bebop.id,
  genre_id: anime.id
)
# bebop_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/bebop.jpg')
# bebop.thumbnail.attach(io: bebop_thumbnail, filename: 'safh.jpg')

# SPIRITED AWAY
spirited_away = Video.create!(
  title: "Spirited Away",
  description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
  year: "2001",
  runtime: "125 mins",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: spirited_away.id,
  genre_id: anime.id
)
# spirited_away_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/spirited_away.jpg')
# spirited_away.thumbnail.attach(io: spirited_away_thumbnail, filename: 'safh.jpg')

# PRINCESS MONONOKE
mononoke = Video.create!(
  title: "Princess Mononoke",
  description: "While protecting his village from rampaging boar-god/demon, a confident young warrior, Ashitaka, is stricken by a deadly curse. To save his life, he must journey to the forests of the west. Once there, he's embroiled in a fierce campaign that humans were waging on the forest. The ambitious Lady Eboshi and her loyal clan use their guns against the gods of the forest and a brave young woman, Princess Mononoke, who was raised by a wolf-god. Ashitaka sees the good in both sides and tries to stem the flood of blood. This is met by animosity by both sides as they each see him as supporting the enemy.",
  year: "1997",
  runtime: "134 mins",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: mononoke.id,
  genre_id: anime.id
)
# safh_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/mononoke.jpg')
# mononoke.thumbnail.attach(io: safh_thumbnail, filename: 'mononoke.jpg')

# YOUR NAME
your_name = Video.create!(
  title: "Your Name",
  description: "Mitsuha is the daughter of the mayor of a small mountain town. She's a straightforward high school girl who lives with her sister and her grandmother and has no qualms about letting it be known that she's uninterested in Shinto rituals or helping her father's electoral campaign. Instead she dreams of leaving the boring town and trying her luck in Tokyo. Taki is a high school boy in Tokyo who works part-time in an Italian restaurant and aspires to become an architect or an artist. Every night he has a strange dream where he becomes...a high school girl in a small mountain town.",
  year: "2016",
  runtime: "106 mins",
  mediatype: "movie"
)

VideoGenre.create!(
  video_id: your_name.id,
  genre_id: anime.id
)
# safh_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/your_name.jpg')
# your_name.thumbnail.attach(io: safh_thumbnail, filename: 'your_name.jpg')

# FULLMETAL ALCHEMIST
fma = Video.create!(
  title: "Fullmetal Alchemist: Brotherhood",
  description: "Two brothers lose their mother to an incurable disease. With the power of 'alchemy', they use taboo knowledge to resurrect her. The process fails, and as a toll for using this type of alchemy, the older brother, Edward Elric loses his left leg while the younger brother, Alphonse Elric loses his entire body. To save his brother, Edward sacrifices his right arm and is able to affix his brother's soul to a suit of armor. With the help of a family friend, Edward receives metal limbs - 'automail' - to replace his lost ones. With that, Edward vows to search for the Philosopher's Stone to return the brothers to their original bodies, even if it means becoming a 'State Alchemist', one who uses his/her alchemy for the military.",
  year: "2009",
  runtime: "2 seasons",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: fma.id,
  genre_id: anime.id
)
# safh_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/fma.jpg')
# fma.thumbnail.attach(io: safh_thumbnail, filename: 'fma.jpg')

# ONE PIECE
op = Video.create!(
  title: "One Piece",
  description: "There once lived a pirate named Gol D. Roger. He obtained wealth, fame, and power to earn the title of Pirate King. When he was captured and about to be executed, he revealed that his treasure called One Piece was hidden somewhere at the Grand Line. This made all people set out to search and uncover the One Piece treasure, but no one ever found the location of Gol D. Roger's treasure, and the Grand Line was too dangerous a place to overcome. Twenty-two years after Gol D. Roger's death, a boy named Monkey D. Luffy decided to become a pirate and search for Gol D. Roger's treasure to become the next Pirate King.",
  year: "1999",
  runtime: "40 seasons",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: op.id,
  genre_id: anime.id
)
# safh_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/op.jpg')
# op.thumbnail.attach(io: safh_thumbnail, filename: 'op.jpg')

# NARUTO SHIPPUDEN
shippuden = Video.create!(
  title: "Naruto Shippuden",
  description: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
  year: "2007",
  runtime: "10 seasons",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: shippuden.id,
  genre_id: anime.id
)
# safh_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/shippuden.jpg')
# shippuden.thumbnail.attach(io: safh_thumbnail, filename: 'shippuden.jpg')

# MY HERO ACADEMIA
mha = Video.create!(
  title: "My Hero Academia",
  description: "In a world populated with superhumans, the superhero-loving Izuku Midoriya is without power. However, after the Quirkless dreamer Izuku inherits the powers of the world's best superhero, All Might, his hopes of becoming the top hero are now possible. Once enrolled in the high school for heroes, U.A., Izuku soon discovers being a hero is much more complicated than it appears.",
  year: "2016",
  runtime: "6 seasons",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: mha.id,
  genre_id: anime.id
)
# safh_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/mha.jpg')
# mha.thumbnail.attach(io: safh_thumbnail, filename: 'mha.jpg')

# DEMON SLAYER
demon_slayer = Video.create!(
  title: "Demon Slayer",
  description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
  year: "2019",
  runtime: "2 seasons",
  mediatype: "tv"
)

VideoGenre.create!(
  video_id: demon_slayer.id,
  genre_id: anime.id
)
# demon_slayer_thumbnail = open('https://destinyplus-seeds.s3.amazonaws.com/demon_slayer.jpg')
# demon_slayer.thumbnail.attach(io: demon_slayer_thumbnail, filename: 'demon_slayer.jpg')






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

