import React from 'react';
import style from './sideBar.module.scss';

const SideBar = ({ toggle, isOpen }) => {
  // SIDEBAR OF CANVAS WITH LIST OF PREVIOUSLY CREATED CANVSES
  let openSidebar;
  if (isOpen) {
    openSidebar = style.open;
  }
  return (
    <aside className={`${style.sideBar} ${openSidebar}`} >
      Canvas-list
      <p onClick={toggle}>
        Close Sidebar
      </p>
    </aside>
  )
}

export default SideBar;