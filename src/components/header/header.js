import React, { useContext } from 'react';
import style from './header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../sidebar/sideBar';
import Backdrop from '../backdrop/backdrop';
import { UserContext } from '../../context/UserContext';
import { UiControlsContext } from '../../context/UIControlsContext';

const Header = () => {
  const { user } = useContext(UserContext);
  const { toggleSave, toggleAuth, toggleSidebar, displaySidebar } = useContext(UiControlsContext);

  return (
    <>
      <header className={`${style.header}`}>
        <div className="grid">
          <span className={style.header__logo}>
            <span className="logo">BusinessCanvas</span>
          </span>
          <nav className={style.navigation}>
            <ul>
              {!user && <li className={style.navigation__cta} onClick={toggleAuth}><FontAwesomeIcon icon={faUser} size="sm" />Sign In</li>}
              {user && <li className={style.navigation__cta} onClick={toggleSave} ><FontAwesomeIcon icon={faCloudDownloadAlt} size="sm" /> Save Canvas</li>}
              {user && <li><FontAwesomeIcon icon={faBars} size="lg" onClick={toggleSidebar} /></li>}
            </ul>
          </nav>
        </div>
      </header>
      { displaySidebar && <Backdrop toggle={toggleSidebar} />}
      <Sidebar toggle={toggleSidebar} isOpen={displaySidebar} />
    </>
  )
}

export default Header;