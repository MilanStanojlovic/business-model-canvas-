import React from 'react';
import style from './canvas.module.scss';
import CanvasCard from '../canvas-card/canvasCard';

const Canvas = () => {

  return (
    <div className={style.canvas}>
      Canvas
      <CanvasCard />
    </div>
  )
}

export default Canvas;