import React from 'react';
import style from './canvasCard.module.scss';

const CanvasCard = ({ content, color, id }) => {
  return (
    <div className={style.canvasCard} style={{ backgroundColor: `#${color}` }}>
      {content}
    </div>
  )
}

export default CanvasCard;