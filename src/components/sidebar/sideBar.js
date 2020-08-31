import React from 'react';
import style from './sideBar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';


const SideBar = ({ toggle, isOpen }) => {
  // SIDEBAR OF CANVAS WITH LIST OF PREVIOUSLY CREATED CANVSES
  let openSidebar;
  if (isOpen) {
    openSidebar = style.open;
  }
  return (
    <aside className={`${style.sideBar} ${openSidebar}`} >
      <div className={`${style.sideBar__close}`}>
        <FontAwesomeIcon icon={faTimesCircle} size="lg" className="icon" onClick={toggle} />
      </div>
    </aside>
  )
}

export default SideBar;