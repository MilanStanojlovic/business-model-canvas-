import React from 'react';
import Backdrop from '../backdrop/backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const SaveCanvas = () => {

  return (
    <Backdrop>
      <div className="modal">
        <div className="modal__controls">
          Save canvas
          <FontAwesomeIcon icon={faTimesCircle} size="lg" className="modal__close icon" />
        </div>
        <form noValidate>
          <div className="modal__input">
            <input type="text" placeholder="Canvas Name" name="canvas" />
          </div>
          <button className="btn btn-primary">Save Canvas</button>
        </form>
      </div>
    </Backdrop>
  )
}

export default SaveCanvas;