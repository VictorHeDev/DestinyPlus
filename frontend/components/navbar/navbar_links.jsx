import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseUser,
  faSearch,
  faPlus,
  faFilm,
  faTv,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function NavBarLinks() {
  // might have to refactor this later to use NavLinks
  return (
    <div className='navbar-links'>
      <ul>
        <li>
          <Link to='/browse'>
            <FontAwesomeIcon
              icon={faHouseUser}
              size='lg'
              className='nav-icon'
            />
            <span className='navbar-link'>HOME</span>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faSearch} size='lg' className='nav-icon' />{' '}
          <span className='navbar-link'>SEARCH</span>
        </li>
        <li>
          <Link to='/watchlist'>
            <FontAwesomeIcon icon={faPlus} size='lg' className='nav-icon' />{' '}
            <span className='navbar-link'>WATCHLIST</span>
          </Link>
        </li>
        <li>
          <Link to='/movies'>
            <FontAwesomeIcon icon={faFilm} size='lg' className='nav-icon' />{' '}
            <span className='navbar-link'>MOVIES</span>
          </Link>
        </li>
        <li>
          <Link to='/series'>
            <FontAwesomeIcon icon={faTv} size='lg' className='nav-icon' />{' '}
            <span className='navbar-link'>SERIES</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
