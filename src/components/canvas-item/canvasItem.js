import React, { useContext } from 'react';
import style from './canvasItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { CanvasContext } from '../../context/CanvasContext';

const CanvasItem = ({ canvasName, canvasId }) => {
  const { deleteCanvas, renameCanvas } = useContext(CanvasContext);

  return (
    <div className={style.canvasItem}>
      <div className={style.canvasItem__name}>{canvasName}</div>

      <div className={style.canvasItem__controls}>
        <i className={`${style.canvasItem__icon} icon icon-circle`} onClick={renameCanvas.bind(this, canvasId)}>
          <FontAwesomeIcon icon={faPencilAlt} size="sm" />
        </i>
        <i className={`${style.canvasItem__icon} icon icon-circle`} onClick={deleteCanvas.bind(this, canvasId)}>
          <FontAwesomeIcon icon={faTrashAlt} size="sm" />
        </i>
      </div>

    </div>
  )
}

export default CanvasItem;