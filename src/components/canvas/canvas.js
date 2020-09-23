import React, { useState, Fragment, useCallback, useContext } from 'react';
import { canvasElements } from '../../enum/canvas';
import style from './canvas.module.scss';
import { v4 as uuid4 } from 'uuid';

import List from '../list/list';
import Modal from '../modal/modal';
import Auth from '../auth/auth';
import SaveCanvas from '../save-canvas/saveCanvas';
import { CanvasContext } from '../../context/CanvasContext';
import { UiControlsContext } from '../../context/UIControlsContext';

const Canvas = () => {
  const {
    partners,
    setPartners,
    activities,
    setActivities,
    resources,
    setResources,
    values,
    setValues,
    customerRelationships,
    setCustomerRelationships,
    chanels,
    setChanels,
    customerSegments,
    setCustomerSegments,
    costStructure,
    setCostStructure,
    revenueStreams,
    setRevenueStreams } = useContext(CanvasContext);
  const { displaySaveModal, displayAuth } = useContext(UiControlsContext);

  const [selectedList, setSelectedList] = useState(undefined);


  const showModalHandler = useCallback((listName) => {
    switch (listName) {
      case canvasElements.KEY_PARTNERS: setSelectedList(canvasElements.KEY_PARTNERS);
        break;
      case canvasElements.KEY_ACTIVITIES: setSelectedList(canvasElements.KEY_ACTIVITIES);
        break;
      case canvasElements.KEY_RESOURCES: setSelectedList(canvasElements.KEY_RESOURCES);
        break;
      case canvasElements.VALUE_PROPOSITION: setSelectedList(canvasElements.VALUE_PROPOSITION)
        break;
      case canvasElements.CUSTOMER_RELATIONSHIPS: setSelectedList(canvasElements.CUSTOMER_RELATIONSHIPS);
        break;
      case canvasElements.CHANELS: setSelectedList(canvasElements.CHANELS)
        break;
      case canvasElements.CUSTOMER_SEGMENTS: setSelectedList(canvasElements.CUSTOMER_SEGMENTS);
        break;
      case canvasElements.COST_STRUCTURE: setSelectedList(canvasElements.COST_STRUCTURE);
        break;
      case canvasElements.REVENUE_STREAMS: setSelectedList(canvasElements.REVENUE_STREAMS);
        break;
      default: setSelectedList(undefined);
    }
  }, [setSelectedList])

  const handleModalClose = () => {
    setSelectedList(undefined);
  }

  const addCardHandler = useCallback((value, list, color) => {
    if (value) {
      const card = { id: uuid4(), content: value, color: color };

      switch (list) {
        case canvasElements.KEY_PARTNERS: setPartners(partners => [...partners, card]);
          break;
        case canvasElements.KEY_ACTIVITIES: setActivities(activities => [...activities, card]);
          break;
        case canvasElements.KEY_RESOURCES: setResources(resources => [...resources, card]);
          break;
        case canvasElements.VALUE_PROPOSITION: setValues(values => [...values, card]);
          break;
        case canvasElements.CUSTOMER_RELATIONSHIPS: setCustomerRelationships(customerRelationships => [...customerRelationships, card]);
          break;
        case canvasElements.CHANELS: setChanels(chanels => [...chanels, card]);
          break;
        case canvasElements.CUSTOMER_SEGMENTS: setCustomerSegments(customerSegments => [...customerSegments, card]);
          break;
        case canvasElements.COST_STRUCTURE: setCostStructure(costStructure => [...costStructure, card]);
          break;
        case canvasElements.REVENUE_STREAMS: setRevenueStreams(revenueStreams => [...revenueStreams, card]);
          break;
        default: throw new Error('Unknown list error.');
      }
    }
    setSelectedList(undefined);
  }, [setPartners,
    setActivities,
    setResources,
    setValues,
    setCustomerRelationships,
    setChanels,
    setCustomerSegments,
    setCostStructure,
    setRevenueStreams]);

  return (
    <Fragment>
      <section className={style.canvas}>
        <div className={style.canvas__partners}>
          <List name={canvasElements.KEY_PARTNERS} showModal={showModalHandler} list={partners} />
        </div>
        <div className={style.canvas__activities}>
          <List name={canvasElements.KEY_ACTIVITIES} showModal={showModalHandler} list={activities} />
        </div>
        <div className={style.canvas__resources}>
          <List name={canvasElements.KEY_RESOURCES} showModal={showModalHandler} list={resources} />
        </div>
        <div className={style.canvas__values}>
          <List name={canvasElements.VALUE_PROPOSITION} showModal={showModalHandler} list={values} />
        </div>
        <div className={style.canvas__customerRelationships}>
          <List name={canvasElements.CUSTOMER_RELATIONSHIPS} showModal={showModalHandler} list={customerRelationships} />
        </div>
        <div className={style.canvas__chanels}>
          <List name={canvasElements.CHANELS} showModal={showModalHandler} list={chanels} />
        </div>
        <div className={style.canvas__customerSegments}>
          <List name={canvasElements.CUSTOMER_SEGMENTS} showModal={showModalHandler} list={customerSegments} />
        </div>
        <div className={style.canvas__costStructure}>
          <List name={canvasElements.COST_STRUCTURE} showModal={showModalHandler} list={costStructure} />
        </div>
        <div className={style.canvas__revenueStreams}>
          <List name={canvasElements.REVENUE_STREAMS} showModal={showModalHandler} list={revenueStreams} />
        </div>
      </section>
      {displaySaveModal && <SaveCanvas />}
      {selectedList && <Modal listName={selectedList} modalClosed={handleModalClose} addCard={addCardHandler} />}
      {displayAuth && <Auth />}
    </Fragment>
  )
}

export default Canvas;