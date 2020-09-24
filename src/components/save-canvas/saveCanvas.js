import React, { useContext } from 'react';
import Backdrop from '../backdrop/backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { CanvasContext } from '../../context/CanvasContext';
import { UiControlsContext } from '../../context/UIControlsContext';

const SaveCanvas = () => {
  const { setCanvasName, saveCanvas } = useContext(CanvasContext);
  const { toggleSave } = useContext(UiControlsContext);
  
  return (
    <Backdrop>
      <div className="modal">
        <div className="modal__controls">
          Save canvas
          <FontAwesomeIcon icon={faTimesCircle} size="lg" className="modal__close icon" onClick={toggleSave} />
        </div>
        <form noValidate>
          <div className="modal__input">
            <input type="text" placeholder="Canvas Name" name="canvas" onChange={(event) => { setCanvasName(event.target.value) }} />
          </div>
          <button className="btn btn-primary" onClick={saveCanvas}>Save Canvas</button>
        </form>
      </div>
    </Backdrop>
  )
}

export default SaveCanvas;