import React, { useState, Fragment } from 'react';
import { canvasList } from '../../enum/canvasList';
import style from './canvas.module.scss';
import { v4 as uuid4 } from 'uuid';

import List from '../list/list';
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


  const showModalHandler = (listName) => {
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

  const addCardHandler = (value, list) => {
    const card = { id: uuid4(), content: value };
    switch (list) {
      case canvasList.KEY_PARTNERS: setPartners(partners => [...partners, card]);
        break;
      case canvasList.KEY_ACTIVITIES: setActivities(activities => [...activities, card]);
        break;
      case canvasList.KEY_RESOURCES: setResources(resources => [...resources, card]);
        break;
      case canvasList.VALUE_PROPOSITION: setValues(values => [...values, card]);
        break;
      case canvasList.CUSTOMER_RELATIONSHIPS: setCustomerRelationships(customerRelationships => [...customerRelationships, card]);
        break;
      case canvasList.CHANELS: setChanels(chanels => [...chanels, card]);
        break;
      case canvasList.CUSTOMER_SEGMENTS: setCustomerSegments(customerSegments => [...customerSegments, card]);
        break;
      case canvasList.COST_STRUCTURE: setCostStructure(costStructure => [...costStructure, card]);
        break;
      case canvasList.REVENUE_STREAMS: setRevenueStreams(revenueStreams => [...revenueStreams, card]);
        break;
      default: throw new Error('Unknown list error.');
    }



    setSelectedList(undefined);
  }

  return (
    <Fragment>
      <section className={style.canvas}>
        <div className={style.canvas__partners}>
          <List name={canvasList.KEY_PARTNERS} showModal={showModalHandler} list={partners} />
        </div>
        <div className={style.canvas__activities}>
          <List name={canvasList.KEY_ACTIVITIES} showModal={showModalHandler} list={activities} />
        </div>
        <div className={style.canvas__resources}>
          <List name={canvasList.KEY_RESOURCES} showModal={showModalHandler} list={resources} />
        </div>
        <div className={style.canvas__values}>
          <List name={canvasList.VALUE_PROPOSITION} showModal={showModalHandler} list={values} />
        </div>
        <div className={style.canvas__customerRelationships}>
          <List name={canvasList.CUSTOMER_RELATIONSHIPS} showModal={showModalHandler} list={customerRelationships} />
        </div>
        <div className={style.canvas__chanels}>
          <List name={canvasList.CHANELS} showModal={showModalHandler} list={chanels} />
        </div>
        <div className={style.canvas__customerSegments}>
          <List name={canvasList.CUSTOMER_SEGMENTS} showModal={showModalHandler} list={customerSegments} />
        </div>
        <div className={style.canvas__costStructure}>
          <List name={canvasList.COST_STRUCTURE} showModal={showModalHandler} list={costStructure} />
        </div>
        <div className={style.canvas__revenueStreams}>
          <List name={canvasList.REVENUE_STREAMS} showModal={showModalHandler} list={revenueStreams} />
        </div>
      </section>
      {selectedList ? <Modal listName={selectedList} modalClosed={handleModalClose} addCard={addCardHandler} /> : null}
    </Fragment>
  )
}

export default Canvas;