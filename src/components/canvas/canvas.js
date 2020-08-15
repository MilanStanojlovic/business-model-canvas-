import React, { useState } from 'react';
import style from './canvas.module.scss';
import List from '../list/list';
import { canvasList } from '../../enum/canvasList';

const Canvas = () => {
  const [partners, setPartners] = useState([]);
  const [activities, setActivities] = useState([]);
  const [resources, setResources] = useState([]);
  const [values, setValues] = useState([]);
  const [customerRelationships, setCustomerRelationships] = useState([]);
  const [chanels, setChanels] = useState([]);
  const [customerSegments, setCustomerSegments] = useState([]);
  const [costStructure, setCostStructure] = useState([]);
  const [revenueStreams, setRevenueStreams] = useState([]);

  const addElementHandler = (listName) => {
    switch (listName) {
      case canvasList.KEY_PARTNERS: console.log('Partners');
        break;
      case canvasList.KEY_ACTIVITIES: console.log('Activities');
        break;
      case canvasList.KEY_RESOURCES: console.log('RESOURCES');
        break;
      case canvasList.VALUE_PROPOSITION: console.log('VALUE PROPOSITION');
        break;
      case canvasList.CUSTOMER_RELATIONSHIPS: console.log('Customer Relationships');
        break;
      case canvasList.CHANELS: console.log('Chanels');
        break;
      case canvasList.CUSTOMER_SEGMENTS: console.log('Customer Segments');
        break;
      case canvasList.COST_STRUCTURE: console.log('Const Structure');
        break;
      case canvasList.REVENUE_STREAMS: console.log('Revenue streams');
        break;
      default: throw new ReferenceError('Unknown type.');
    }
  }

  return (
    <section className={style.canvas}>
      <div className={style.canvas__partners}>
        <List name={canvasList.KEY_PARTNERS} addCard={addElementHandler} />
      </div>
      <div className={style.canvas__activities}>
        <List name={canvasList.KEY_ACTIVITIES} addCard={addElementHandler} />
      </div>
      <div className={style.canvas__resources}>
        <List name={canvasList.KEY_RESOURCES} addCard={addElementHandler} />
      </div>
      <div className={style.canvas__value}>
        <List name={canvasList.VALUE_PROPOSITION} addCard={addElementHandler} />
      </div>
      <div className={style.canvas__customerRelationship}>
        <List name={canvasList.CUSTOMER_RELATIONSHIPS} addCard={addElementHandler} />
      </div>
      <div className={style.canvas__chanels}>
        <List name={canvasList.CHANELS} addCard={addElementHandler} />
      </div>
      <div className={style.canvas__customerSegments}>
        <List name={canvasList.CUSTOMER_SEGMENTS} addCard={addElementHandler} />
      </div>
      <div className={style.canvas__cost}>
        <List name={canvasList.COST_STRUCTURE} addCard={addElementHandler} />
      </div>
      <div className={style.canvas__revenue}>
        <List name={canvasList.REVENUE_STREAMS} addCard={addElementHandler} />
      </div>
    </section>
  )
}

export default Canvas;