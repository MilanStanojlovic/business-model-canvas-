import React, { useContext } from 'react';
import style from './sideBar.module.scss';

import { auth } from '../../firebase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import { UserContext } from '../../context/UserContext';
import UserCard from '../userCard/userCard';


const SideBar = ({ toggle, isOpen }) => {
  // SIDEBAR OF CANVAS WITH LIST OF PREVIOUSLY CREATED CANVSES
  const { user, setUser } = useContext(UserContext);
  let openSidebar;
  if (isOpen) {
    openSidebar = style.open;
  } else {
    openSidebar = '';
  }

  const logOutHandler = () => {
    auth.signOut().then(() => {
      setUser(null);
      toggle();
    }, error => {
      console.log(error);
    });
  }

  return (
    <aside className={`${style.sideBar} ${openSidebar}`} >
      <div className={`${style.sideBar__close}`}>
        <FontAwesomeIcon icon={faTimesCircle} size="lg" className="icon" onClick={toggle} />
      </div>
      <div>
        {/* {user ? <div className="btn btn-secondary">{user.email} {user.displayName}</div> : <p>login</p>} */}
        {user && <UserCard email={user.email} displayName={user.displayName} />}
        <div className="btn btn-secondary">Settings</div>
        <div className="btn btn-secondary">Dark Mode</div>
        <div className="btn btn-secondary" onClick={logOutHandler}>Log Out</div>
      </div>
    </aside>
  )
}

export default SideBar;