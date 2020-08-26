import React, { useState } from 'react';
import style from './header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../sidebar/sideBar';
import Backdrop from '../backdrop/backdrop';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  let sidebar;
  let backDrop;
  if (isOpen) {
    sidebar = <Sidebar toggle={toggleSidebar} isOpen={isOpen} />;
    backDrop = <Backdrop toggle={toggleSidebar} />;
  }
  return (
    <header className={style.header}>
      <div className="grid">
        <span className={style.header__logo}>
          Logo
        </span>
        <nav className={style.navigation}>
          <ul>
            <li><FontAwesomeIcon icon={faCloudDownloadAlt} size="lg" /></li>
            <li><FontAwesomeIcon icon={faUser} size="lg" onClick={toggleSidebar} /></li>
          </ul>
        </nav>
      </div>
      {sidebar}
      {backDrop}
    </header>
  )
}

export default Header;