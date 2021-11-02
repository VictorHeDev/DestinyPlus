import React from 'react'

export default function Splash() {
  return (
    <div className="splash-content">
      <section className="splash-main-content">
        {/* <img className="splash-home-img" src={ window.splashHomeURL } /> */}
        <img className="media-bundle" src={ window.mediaBundleURL } />
        <button>GET THE DESTINY BUNDLE</button>
        <p>Stream now. Terms Apply</p>
        <img className="media-bundle2" src={ window.mediaBundleURL2 } />
        <p>Sign up for Destiny+ only.</p>
      </section>

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

      <section className="splash-side-content">
        <img className="media-bundle-small" src={ window.mediaBundleURL } />
        <aside>
          <p>Get The Destiny Bundle to stream the best movies, shows, and sports with Destiny+, Holo, and ASPN+. Terms Apply. Learn more about The Destiny Bundle</p>
          <button>GET THE DESTINY BUNDLE</button>
        </aside>
      </section>

      <section className="favorite-devices">
        <h3>Available on your favorite devices</h3>

      </section>

      <section className="FAQ">
        <h3>Frequently Asked Questions</h3>

      </section>
    </div>
  )
}
