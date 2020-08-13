import React from 'react';
import style from './list.module.scss';

const List = ({ name }) => {
  return (
    <section className={style.list}>
      <div className={style.list__top}>
        <span className={style.list__heading}>{name}</span>
        <span className={style.list__info}>Info</span>
        <span className={style.list__add}>Add</span>
      </div>
    </section>
  );
}

export default List;