import React, { useState, useContext } from 'react';
import style from './header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../sidebar/sideBar';
import Backdrop from '../backdrop/backdrop';
import Auth from '../auth/auth';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const { user } = useContext(UserContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const toggleAuth = () => {
    setShowAuth(!showAuth);
  }

  let sidebar;
  let backDrop;
  let auth;
  if (isOpen) {
    sidebar = <Sidebar toggle={toggleSidebar} isOpen={isOpen} />;
    backDrop = <Backdrop toggle={toggleSidebar} />;
  }

  if (showAuth) {
    auth = <Auth toggle={toggleAuth} />;
    backDrop = <Backdrop toggle={toggleAuth} />;
  }

  return (
    <header className={style.header}>
      <div className="grid">
        <span className={style.header__logo}>
          Logo
        </span>
        <nav className={style.navigation}>
          <ul>
            <li>{user}</li>
            <li><FontAwesomeIcon icon={faCloudDownloadAlt} size="lg" onClick={toggleAuth} /></li>
            <li><FontAwesomeIcon icon={faUser} size="lg" onClick={toggleSidebar} /></li>
          </ul>
        </nav>
      </div>
      {sidebar}
      {auth}
      {backDrop}
    </header>
  )
}

export default Header;