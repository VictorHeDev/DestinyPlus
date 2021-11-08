import React from 'react'
import NavBarContainer from '../navbar/navbar_container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'


export default function Splash() {

  return (
    <div className="splash-container">
      <header>
        <NavBarContainer />
      </header>

      <section className="splash-main-content">
        {/* <img className="splash-home-img" src={ window.splashHomeURL } /> */}
        <img className="media-bundle" src={ window.mediaBundleURL } />
        <button>GET THE DESTINY BUNDLE</button>
        <p>Stream now. Terms Apply</p>
        <img className="media-bundle2" src={ window.mediaBundleURL2 } />
        <p>Sign up for Destiny+ only.</p>
      </section>

      <div className="splash-extra-content">

        <section className="splash-the-way-you-want">
          <img className="way-you-want-img" src={ window.wayYouWantURL } />
          <div className="watch-details">
            <h2>Watch the way you want</h2>
            <ul>
              <li>
                Host virtual movie nights with GroupWatch. Pause, rewind, and react with up to six friends. Subscription is required to join GroupWatch.
              </li>
              <li>
                Download any movie or series and watch on-the-go.
              </li>
              <li>
                Enjoy an ever-growing range of titles in stunning 4K UHD and Dolby Atmos sound on compatible devices.
              </li>
              <li>
                Stream on up to four devices at the same time.
              </li>
            </ul>
          </div>
        </section>

        <section className="splash-favorite-stories">
          <h3>Destiny+ has your favorite stories</h3>
          <h5>An unprecedented collection of the world's most beloved movies and TV series.</h5>
          <img className="favorite-shows-image" src={ window.favoriteShowsURL } />
        </section>

        <section className="splash-side-content">
          <img className="media-bundle-small" src={ window.mediaBundleURL } />
          <aside>
            <p>Get The Destiny Bundle to stream the best movies, shows, and sports with Destiny+, Holo, and ASPN+. Terms Apply. Learn more about The Destiny Bundle</p>
            <button>GET THE DESTINY BUNDLE</button>
          </aside>
        </section>

        <section className="favorite-devices">
          <h3>Available on your favorite devices</h3>

          <aside>
            <div>
              <FontAwesomeIcon icon={ faTv } size="6x" />
              <h5>TV</h5>
              <ul>
                <li>Amazon Fire TV</li>
                <li>Android TV devices</li>
                <li>AppleTV</li>
                <li>Chromecast</li>
                <li>LG TV</li>
                <li>Roku</li>
                <li>Samsung</li>
                <li>Xfinity X1 & Flex</li>
              </ul>
            </div>
            <div>
              <FontAwesomeIcon icon={ faLaptop } size="6x" />
              <h5>Computer</h5>
              <ul>
                <li>Chrome OS</li>
                <li>MacOS</li>
                <li>Windows PC</li>
              </ul>
            </div>
            <div>
              <FontAwesomeIcon icon={ faMobileAlt } size="6x" />
              <h5>Mobile & Tablet</h5>
              <ul><li>Amazon Fire Tablets</li>
              <li>Android Phones & Tablets</li>
              <li>iPhone and iPad</li></ul>
            </div>
            <div>
              <FontAwesomeIcon icon={ faGamepad } size="6x" />
              <h5>Game Consoles</h5>
              <ul>
                <li>PS4</li>
                <li>PS5</li>
                <li>Xbox One</li>
                <li>Xbox Series X</li>
                <li>Xbox Series S</li>
              </ul>
            </div>
          </aside>

        </section>

        <section className="FAQ">
          <h3>Frequently Asked Questions</h3>
        </section>
      </div>
    </div>
  )
}
