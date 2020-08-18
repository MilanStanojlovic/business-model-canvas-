import React from 'react';
import style from './modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const Modal = ({ list, modalClosed }) => {
  return (
    <div className={`${style.modal} shadow`}>
      <div className={style.modal__controls}>
        <p>{list}</p>
        <span className={style.modal__close} onClick={modalClosed}>
          <FontAwesomeIcon icon={faTimesCircle} size="lg" />
        </span>
      </div>
      <div className={style.modal__input}>
        <textarea placeholder="Card content"></textarea>
      </div>
      <button className="btn btn-primary">Add Card</button>
    </div>
  )
}

export default Modal;
