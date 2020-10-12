import React, { useContext } from 'react';
import style from './canvasCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { CanvasContext } from '../../context/CanvasContext';

const CanvasCard = ({ content, color, id, parentList }) => {
  const { deleteCanvasCard } = useContext(CanvasContext);

  return (
    <div className={style.canvasCard} style={{ backgroundColor: `#${color}` }}>
      {content}
      <span className={style.canvasCard__icon} onClick={deleteCanvasCard.bind(this, id, parentList)}>
        <FontAwesomeIcon icon={faTimesCircle} size="sm" />
      </span>
    </div>
  )
}

export default CanvasCard;