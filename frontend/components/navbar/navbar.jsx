import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBarLinks from './navbar_links';
import AccountContainer from './account_container';

const NavBar = ({ currentUser }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <header>
      <nav className={navbar ? 'nav-bar' : 'nav-bar-active'}>
        <div className='main-nav'>
          <Link to='/browse'>
            <img className='navLogo' src={window.destinyLogoURL} />
          </Link>
          <NavBarLinks />
        </div>
      </nav>
      <AccountContainer currentUser={currentUser} />
    </header>
  );
};

export default NavBar;

// export default class NavBar extends React.Component {

//   render () {
//     return (
//       <header>
//         <nav className="nav-bar">
//           <div className="main-nav">
//             <Link to="/browse">
//               <img
//                 className="navLogo"
//                 src={ window.destinyLogoURL }
//               />
//             </Link>
//             <NavBarLinks />
//           </div>
//         </nav>
//         <AccountContainer currentUser={ this.props.currentUser }/>
//       </header>
//     )
//   }
// }
