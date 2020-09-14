import React, { Fragment } from 'react';
import style from './businessModel.module.scss';
import Canvas from '../canvas/canvas';
import Header from '../header/header';
// import CanvasList from '../canvas-list/canvasList';

const BusinessModel = () => {
  return (
    <Fragment>
      <Header />
      <div className={`${style.businessModel}`}>
        {/* TODO: MOVE TO SIDEBAR */}
        {/* <div className={style.businessModel__canvasList}>
        <CanvasList />
      </div> */}
        <div className={style.businessModel__canvas}>
          <Canvas />
        </div>
      </div>
    </Fragment>
  )
}

export default BusinessModel;
