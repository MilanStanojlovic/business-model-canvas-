import React from 'react';
import style from './canvasItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const CanvasItem = ({ canvasName }) => {

  return (
    <div className={style.canvasItem}>
      <span>{canvasName}</span>

      <i className={`${style.canvasItem__icon} icon icon-circle`}>
        <FontAwesomeIcon icon={faTrashAlt} size="sm" />
      </i>

    </div>
  )
}

export default CanvasItem;