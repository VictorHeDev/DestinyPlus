import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser,
  faSearch,
  faPlus,
  faFilm,
  faTv
} from '@fortawesome/free-solid-svg-icons'


export default function NavBarLinks() {
  // might have to refactor this later to use NavLinks
  return (
    <div className="navbar-links">
      <ul>
        <li><FontAwesomeIcon icon={ faHouseUser } size="lg" className="nav-icon" />HOME</li>
        <li><FontAwesomeIcon icon={ faSearch } size="lg" className="nav-icon" /> SEARCH</li>
        <li><FontAwesomeIcon icon={ faPlus } size="lg" className="nav-icon" /> WATCHLIST</li>
        <li><FontAwesomeIcon icon={ faFilm } size="lg" className="nav-icon" /> MOVIES</li>
        <li><FontAwesomeIcon icon={ faTv } size="lg" className="nav-icon" /> SERIES</li>
      </ul>
    </div>
  )
}
