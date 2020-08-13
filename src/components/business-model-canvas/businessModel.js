import React from 'react';
import style from './businessModel.module.scss';
import Canvas from '../canvas/canvas';

const BusinessModel = () => {
  return (
    <div className={style.businessModel}>
      Business model
      <Canvas />
    </div>
  )
}

export default BusinessModel;
