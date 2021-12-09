import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import SplashNavbar from './splash_navbar';

export default function Splash() {
  return (
    <div className='splash-container'>
      <SplashNavbar />

      <section className='splash-main-content'>
        <img className='media-bundle' src={window.mediaBundleURL} />
        <button>
          <Link to='/signup'>GET THE DESTINY BUNDLE</Link>
        </button>
        <p className='splash-stream'>
          <span className='splash-banana'>Stream now.</span>{' '}
          <span className='splash-terms'>Terms Apply</span>
        </p>
        <img className='media-bundle2' src={window.mediaBundleURL2} />
        <p className='splash-sign-up'>
          <Link to='/signup'>Sign up for Destiny+ only.</Link>
        </p>
      </section>

      <div className='splash-extra-content'>
        <section className='splash-the-way-you-want'>
          <img className='way-you-want-img' src={window.wayYouWantURL} />
          <div className='watch-details'>
            <h2>Watch the way you want</h2>
            <ul>
              <li>
                Host virtual movie nights with GroupWatch. Pause, rewind, and
                react with up to six friends. Subscription is required to join
                GroupWatch.
              </li>
              <li>Download any movie or series and watch on-the-go.</li>
              <li>
                Enjoy an ever-growing range of titles in stunning 4K UHD and
                Dolby Atmos sound on compatible devices.
              </li>
              <li>Stream on up to four devices at the same time.</li>
            </ul>
          </div>
        </section>

        <section className='splash-favorite-stories'>
          <h3>Destiny+ has your favorite stories</h3>
          <p>
            An unprecedented collection of the world's most beloved movies and
            TV series.
          </p>
          <img className='favorite-shows-image' src={window.favoriteShowsURL} />
        </section>

        <section className='splash-side-content'>
          <img className='media-bundle-small' src={window.mediaBundleURL} />
          <aside>
            <p>
              Get The Destiny Bundle to stream the best movies, shows, and
              sports with Destiny+, Holo, and ASPN+. Terms Apply. Learn more
              about The Destiny Bundle
            </p>
            <button>
              <Link to='/signup'>GET THE DESTINY BUNDLE</Link>
            </button>
          </aside>
        </section>

        <section className='favorite-devices'>
          <h3>Available on your favorite devices</h3>

          <aside>
            <div className='splash-devices'>
              <FontAwesomeIcon className='devices-icon' icon={faTv} size='6x' />
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
            <div className='splash-devices'>
              <FontAwesomeIcon
                className='devices-icon'
                icon={faLaptop}
                size='6x'
              />
              <h5>Computer</h5>
              <ul>
                <li>Chrome OS</li>
                <li>MacOS</li>
                <li>Windows PC</li>
              </ul>
            </div>
            <div className='splash-devices'>
              <FontAwesomeIcon
                className='devices-icon'
                icon={faMobileAlt}
                size='6x'
              />
              <h5>Mobile & Tablet</h5>
              <ul>
                <li>Amazon Fire Tablets</li>
                <li>Android Phones & Tablets</li>
                <li>iPhone and iPad</li>
              </ul>
            </div>
            <div className='splash-devices'>
              <FontAwesomeIcon
                className='devices-icon'
                icon={faGamepad}
                size='6x'
              />
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

        <section className='FAQ'>
          <h3>Frequently Asked Questions</h3>
        </section>
      </div>
    </div>
  );
}
