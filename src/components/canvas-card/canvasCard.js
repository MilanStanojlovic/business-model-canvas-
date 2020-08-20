import React from 'react';
import style from './canvasCard.module.scss';

const CanvasCard = ({ content, id }) => {
  return (
    <div className={style.canvasCard}>
      {id}
      {content}
    </div>
  )
}

export default CanvasCard;