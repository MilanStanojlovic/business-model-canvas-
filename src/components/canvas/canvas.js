import React, { useState, Fragment } from 'react';
import style from './canvas.module.scss';
import List from '../list/list';
import { canvasList } from '../../enum/canvasList';
import Modal from '../modal/modal';

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

  const [selectedList, setSelectedList] = useState(undefined);


  const addElementHandler = (listName) => {
    switch (listName) {
      case canvasList.KEY_PARTNERS: setSelectedList(canvasList.KEY_PARTNERS);
        break;
      case canvasList.KEY_ACTIVITIES: setSelectedList(canvasList.KEY_ACTIVITIES);
        break;
      case canvasList.KEY_RESOURCES: setSelectedList(canvasList.KEY_RESOURCES);
        break;
      case canvasList.VALUE_PROPOSITION: setSelectedList(canvasList.VALUE_PROPOSITION)
        break;
      case canvasList.CUSTOMER_RELATIONSHIPS: setSelectedList(canvasList.CUSTOMER_RELATIONSHIPS);
        break;
      case canvasList.CHANELS: setSelectedList(canvasList.CHANELS)
        break;
      case canvasList.CUSTOMER_SEGMENTS: setSelectedList(canvasList.CUSTOMER_SEGMENTS);
        break;
      case canvasList.COST_STRUCTURE: setSelectedList(canvasList.COST_STRUCTURE);
        break;
      case canvasList.REVENUE_STREAMS: setSelectedList(canvasList.REVENUE_STREAMS);
        break;
      default: setSelectedList(undefined);
    }
  }

  const handleModalClose = () => {
    setSelectedList(undefined);
  }

  return (
    <Fragment>
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
      {selectedList ? <Modal list={selectedList} modalClosed={handleModalClose} /> : null}
    </Fragment>
  )
}

export default Canvas;