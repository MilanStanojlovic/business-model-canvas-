import React from 'react';
import style from './businessModel.module.scss';
import Canvas from '../canvas/canvas';
import CanvasList from '../canvas-list/canvasList';

const BusinessModel = () => {
  return (
    <div className={style.businessModel}>
      Business model
      <CanvasList />
      <Canvas />
    </div>
  )
}

export default BusinessModel;
