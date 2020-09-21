import React, { Fragment } from 'react';
import style from './businessModel.module.scss';
import Canvas from '../canvas/canvas';
import Header from '../header/header';
import { CanvasProvider } from '../../context/CanvasContext';


const BusinessModel = () => {
  return (
    <Fragment>
      <CanvasProvider>
        <Header />
        <div className={`${style.businessModel}`}>
          <div className={style.businessModel__canvas}>
            <Canvas />
          </div>
        </div>
      </CanvasProvider>
    </Fragment>
  )
}

export default BusinessModel;
