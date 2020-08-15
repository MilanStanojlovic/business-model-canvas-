import React from 'react';
import style from './list.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const List = ({ name, addCard }) => {
  return (
    <section className={style.list}>
      <div className={style.list__top}>
        <span className={style.list__heading}>{name}</span>
        <span className={style.list__info}><FontAwesomeIcon icon={faQuestionCircle} size="lg" /></span>
        <div className={style.list__add} onClick={addCard.bind(this, name)}><FontAwesomeIcon icon={faPlus} size="lg" /></div>
      </div>
    </section>
  );
}

export default List;