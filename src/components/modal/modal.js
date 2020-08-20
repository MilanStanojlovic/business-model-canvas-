import React, { useState } from 'react';
import style from './modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const Modal = ({ listName, modalClosed, addCard }) => {
  const [value, setValue] = useState('');

  return (
    <div className={`${style.modal} shadow`}>
      <div className={style.modal__controls}>
        <p>{listName}</p>
        <span className={style.modal__close} onClick={modalClosed}>
          <FontAwesomeIcon icon={faTimesCircle} size="lg" />
        </span>
      </div>
      <div className={style.modal__input}>
        <textarea placeholder="Card content" value={value} onChange={(event) => setValue(event.target.value)}></textarea>
      </div>
      <button className="btn btn-primary" onClick={addCard.bind(this, value, listName)}>Add Card</button>
    </div>
  )
}

export default Modal;
