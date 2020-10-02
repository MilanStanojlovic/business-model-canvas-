import React from 'react';
import CanvasItem from '../canvas-item/canvasItem';
import style from './canvasList.module.scss';

const CanvasList = React.memo(({ canvasItems }) => {

  let canvasesTemplate = null;

  if (canvasItems) {
    canvasesTemplate = canvasItems.map(canvas => <CanvasItem key={canvas.canvasId} canvasId={canvas.canvasId} canvasName={canvas.canvasName} />)
  }

  return (
    <div className={style.canvasList}>
      <div className={style.canvasList__header}>
        Canvases
      </div>
      <div>
        {canvasesTemplate}
      </div>
    </div>
  )

});

export default CanvasList;