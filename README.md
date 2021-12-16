# WELCOME TO DESTINY PLUS

[Check out the Live Site!](https://destinyplus.herokuapp.com/#/)

### Introduction

Destiny Plus is a clone of the Disney Plus website at the time of creation. Disney Plus is a streaming platform that users can sign up for to watch movies and tv shows from the comfort of their own home. I am a huge fan of their original content thus I decided to create this fullstack project to showcase some of my technical skills as well as having a lot of fun with currating my favorite content from agnostic sources. Lastly, I was inspired by their fantastic styling and great UI design. The technologies used in this project include:

- React
- Redux
- JavaScript
- HTML
- SCSS
- Ruby on Rails
- Postgres
- Heroku
- ... and many more!

### Versions

Ruby v2.5.1
Node v17.01

### Destiny Plus setup

To run this App locally:

1. Git clone this repo
2. Make sure the proper Ruby version is downloaded
3. Open up the App and in the root directory run: "bundle install" followed by "npm install"
4. Set up the database by running: "bundle exec rails db:setup"
5. Launch the App using "npm start" in one terminal and "bundle exec rails server" in another
6. Open up localhost:3000 in the browser of your choosing

### Code Highlights

```js
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: {
        id: window.currentUser.id,
        currentProfile: JSON.parse(localStorage.getItem('currentProfile'))
          .currentProfile,
      },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  store.subscribe(() => {
    localStorage.setItem(
      'currentProfile',
      JSON.stringify(store.getState()['session'])
    );
  });

  ReactDOM.render(<Root store={store} />, root);
});
```

I was initially having an issue with persisting the User's current selected profile when navigating through different pages in the Destiny Plus app. This was an issue because the current profile's avatar must be displayed in the upper right corner of the navbar. Without persisting the currentProfile, the component would essentially break. My solution was to add the information for the current selected profile to the browser's Local Storage, as seen above. This allows the profile to persist, changes it upon selecting it on the /profiles page, and erases the information upon logout.

```ruby
# watchlists_controller.rb
  def index
    @watchlists = [];
    current_user.profiles.includes(:videos).each do |profile|
      @watchlists += profile.watchlists
    end

    render :index
  end
```

This code snippet is used to illustrate how I used the current user's information to retrieve a list of all the watchlist items for all of the user's profiles. The watchlist items are placed in an array which can be utilized later in order to display the video associated which each item using React in the frontend.

```js
const Search = ({ requestVideos, videos }) => {
  const [query, setQuery] = useState('');
  const [searchVideos, setSearchVideos] = useState([]);

  useEffect(() => {
    requestVideos();
  }, []);

  useEffect(() => {
    // console.log('Search message inside useEffect: ', query);
    let searchResultsArr = videos
      .filter((video) => {
        return video.title.toLowerCase().includes(query.toLowerCase());
      })
      .slice(0, 25);

    setSearchVideos([...searchResultsArr]);
  }, [query, setSearchVideos]);

  const handleQueryChange = (e) => {
    let newQuery = e.target.value;
    setQuery(newQuery);
  };
};
```

In this last code snippet, I am showcasing how I immplemented the Search functionality in my application by using a useState and useEffect hook. Because the amount of data I am retreiving is relatively small in scope, I decided to query the database and grab all of the videos at once. Then I filtered through the video titles via an array and re-rendered the video thumbnails to the frontend. This works well in my small-scale application because it gives instantaneous feedback to the user (thereby improving user experience).

### Additional Information

Check out the Wiki page for a deeper look on the planning that went into creating this project

### Special thanks to:

- Jon B
- Yehuda
- Pasan
- Al
- Hank

### Licensing

Please note that none of these assets are mine. I do not claim any of the images nor videos featured on Destiny Plus and I do not gain any monetary value from this application.
