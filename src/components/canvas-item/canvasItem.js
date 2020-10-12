import React, { useContext } from 'react';
import style from './canvasItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { CanvasContext } from '../../context/CanvasContext';

const CanvasItem = React.memo(({ canvasName, canvasId }) => {
  const { deleteCanvas, renameCanvas } = useContext(CanvasContext);

  return (
    <div className={style.canvasItem}>
      <div className={style.canvasItem__name}>{canvasName}</div>

      <div className={style.canvasItem__controls}>
        <span className="tooltip">
          <i className={`${style.canvasItem__icon} icon icon-circle`} onClick={renameCanvas.bind(this, canvasId)}>
            <FontAwesomeIcon icon={faPencilAlt} size="sm" />
          </i>
          <span className="tooltip__text">Rename</span>
        </span>
        <span className="tooltip">
          <i className={`${style.canvasItem__icon} icon icon-circle`} onClick={deleteCanvas.bind(this, canvasId)}>
            <FontAwesomeIcon icon={faTrashAlt} size="sm" />
          </i>
          <span className="tooltip__text">Delete</span>
        </span>
      </div>

    </div>
  )
})

export default CanvasItem;