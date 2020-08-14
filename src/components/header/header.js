import React from 'react';
import style from './header.module.scss';
import grid from '../../styles/global/grid.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={grid.grid}>
        <span className={style.header__logo}>
          Logo
        </span>
        <nav className={style.navigation}>
          <ul>
            <li><FontAwesomeIcon icon={faCloudDownloadAlt} size="lg" /></li>
            <li><FontAwesomeIcon icon={faUser} size="lg" /></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;