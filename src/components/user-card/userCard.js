import React from 'react';
import style from './userCard.module.scss';

const UserCard = ({ email, displayName, photoUrl }) => {
  // TODO: Add photo ?

  return (
    <div className={style.userCard}>
      <div className={style.userCard__name}>{displayName}</div>
      <div>{email}</div>
    </div>
  )
}

export default UserCard;