import React, { useState } from 'react';
import style from './modal.module.scss';

import { colors } from '../../enum/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const Modal = ({ listName, modalClosed, addCard }) => {
  const [value, setValue] = useState('');
  const [selectedColor, setSelectedColor] = useState('ffadad');

  const colorSelectHandler = (color) => {
    if (color !== selectedColor) {
      setSelectedColor(color);
    }
  }

  return (
    <div className="modal shadow">
      <div className="modal__controls">
        <p>{listName}</p>
        <FontAwesomeIcon icon={faTimesCircle} size="lg" className="modal__close icon" onClick={modalClosed} />
      </div>
      <div className={style.modal__colors}>
        {colors.map((color) => {
          return (
            <div className={style.modal__color}
              key={color}
              onClick={colorSelectHandler.bind(this, color)}
              style={{ backgroundColor: `#${color}` }}></div>
          )
        })}
      </div>
      <div className="modal__input">
        <textarea placeholder="Card content" value={value} style={{ borderColor: `#${selectedColor}` }} onChange={(event) => setValue(event.target.value)}></textarea>
      </div>
      <button className="btn btn-primary" onClick={addCard.bind(this, value, listName, selectedColor)}>Add Card</button>
    </div>
  )
}

export default Modal;
