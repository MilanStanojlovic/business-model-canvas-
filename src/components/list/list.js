import React from 'react';
import style from './list.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import CanvasCard from '../canvas-card/canvasCard';
import { canvasList } from '../../enum/canvasList';

const List = ({ name, showModal, list }) => {
  let content = null;
  let listSize = style.list_md;

  if (list) {
    content = list.map(element => {
      return <CanvasCard key={element.id} id={element.id} content={element.content} />
    })
  }

  if (name === canvasList.CUSTOMER_SEGMENTS || name === canvasList.VALUE_PROPOSITION || name === canvasList.KEY_PARTNERS) {
    listSize = style.list_lg;
  } else if (name === canvasList.REVENUE_STREAMS || name === canvasList.COST_STRUCTURE) {
    listSize = style.list_sm;
  }


  return (
    <section className={style.list}>
      <div className={style.list__top}>
        <span className={style.list__heading}>{name}</span>
        <span className={style.list__info}><FontAwesomeIcon icon={faQuestionCircle} size="lg" /></span>

      </div>
      <div className={`${style.list__content} ${listSize}`} >
        {content}
      </div>
      <div className={style.list__add} onClick={showModal.bind(this, name)}><FontAwesomeIcon icon={faPlus} size="lg" /></div>
    </section>
  );
}

export default List;