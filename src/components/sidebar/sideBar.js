import React, { useContext, useEffect, useState } from 'react';
import style from './sideBar.module.scss';

import { auth, db } from '../../firebase';
import { data } from '../../enum/data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import { UserContext } from '../../context/UserContext';
import UserCard from '../user-card/userCard';
import CanvasList from '../canvas-list/canvasList';


const SideBar = ({ toggle, isOpen }) => {
  // SIDEBAR OF CANVAS WITH LIST OF PREVIOUSLY CREATED CANVSES
  //TODO: canvases loaded and displayed in sidebar displayed in sidebar
  //TODO: option to delete canvas
  //TODO: option to rename canvas
  const { user, setUser } = useContext(UserContext);
  const [canvasItems, setCanvasItems] = useState([]);

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

  useEffect(() => {
    if (user !== null && user.uid !== undefined && isOpen) {
      // console.log(user.uid);
      db.collection(data.collections.MODELS).where(data.fields.USER_ID, '==', user.uid).get().then(querySnapshot => {
        const canvasList = [];
        querySnapshot.forEach(doc => {
          const canvas = {
            canvasId: doc.id,
            canvasName: doc.data().name
          }
          canvasList.push(canvas);
          // console.log(canvases);
        })
        // console.log(canvasList);
        setCanvasItems(canvasList);
      }, error => {
        console.log(error);
      })
    }
  }, [user, isOpen]);

  return (
    <aside className={`${style.sideBar} ${openSidebar}`} >
      <div className={`${style.sideBar__close}`}>
        <FontAwesomeIcon icon={faTimesCircle} size="lg" className="icon" onClick={toggle} />
      </div>
      <div>
        {/* {user ? <div className="btn btn-secondary">{user.email} {user.displayName}</div> : <p>login</p>} */}
        {user && <UserCard email={user.email} displayName={user.displayName} />}
        <CanvasList canvasItems={canvasItems} />
        <div className="btn btn-secondary">Settings</div>
        <div className="btn btn-secondary">Dark Mode</div>
        <div className="btn btn-secondary" onClick={logOutHandler}>Log Out</div>
      </div>
    </aside>
  )
}

export default SideBar;