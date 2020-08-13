import React from 'react';
import style from './canvas.module.scss';
import List from '../list/list';

const Canvas = () => {
  return (
    <section className={style.canvas}>
      <div className={style.canvas__partners}>
        <List name="Key Partners" />
      </div>
      <div className={style.canvas__activities}>
        <List name="Key Activities" />
      </div>
      <div className={style.canvas__resources}>
        <List name="Key Resources" />
      </div>
      <div className={style.canvas__value}>
        <List name="Value Proposition" />
      </div>
      <div className={style.canvas__customerRelationship}>
        <List name="Customer Relatinships" />
      </div>
      <div className={style.canvas__chanels}>
        <List name="Chanels" />
      </div>
      <div className={style.canvas__customerSegments}>
        <List name="Customer Segments" />
      </div>
      <div className={style.canvas__cost}>
        <List name="Cost structure" />
      </div>
      <div className={style.canvas__revenue}>
        <List name="Revenue Streams" />
      </div>
    </section>
  )
}

export default Canvas;