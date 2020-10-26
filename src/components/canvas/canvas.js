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
      case canvasElements.KEY_PARTNERS.name: setSelectedList(canvasElements.KEY_PARTNERS.name);
        break;
      case canvasElements.KEY_ACTIVITIES.name: setSelectedList(canvasElements.KEY_ACTIVITIES.name);
        break;
      case canvasElements.KEY_RESOURCES.name: setSelectedList(canvasElements.KEY_RESOURCES.name);
        break;
      case canvasElements.VALUE_PROPOSITION.name: setSelectedList(canvasElements.VALUE_PROPOSITION.name)
        break;
      case canvasElements.CUSTOMER_RELATIONSHIPS.name: setSelectedList(canvasElements.CUSTOMER_RELATIONSHIPS.name);
        break;
      case canvasElements.CHANELS.name: setSelectedList(canvasElements.CHANELS.name)
        break;
      case canvasElements.CUSTOMER_SEGMENTS.name: setSelectedList(canvasElements.CUSTOMER_SEGMENTS.name);
        break;
      case canvasElements.COST_STRUCTURE.name: setSelectedList(canvasElements.COST_STRUCTURE.name);
        break;
      case canvasElements.REVENUE_STREAMS.name: setSelectedList(canvasElements.REVENUE_STREAMS.name);
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
        case canvasElements.KEY_PARTNERS.name: setPartners(partners => [...partners, card]);
          break;
        case canvasElements.KEY_ACTIVITIES.name: setActivities(activities => [...activities, card]);
          break;
        case canvasElements.KEY_RESOURCES.name: setResources(resources => [...resources, card]);
          break;
        case canvasElements.VALUE_PROPOSITION.name: setValues(values => [...values, card]);
          break;
        case canvasElements.CUSTOMER_RELATIONSHIPS.name: setCustomerRelationships(customerRelationships => [...customerRelationships, card]);
          break;
        case canvasElements.CHANELS.name: setChanels(chanels => [...chanels, card]);
          break;
        case canvasElements.CUSTOMER_SEGMENTS.name: setCustomerSegments(customerSegments => [...customerSegments, card]);
          break;
        case canvasElements.COST_STRUCTURE.name: setCostStructure(costStructure => [...costStructure, card]);
          break;
        case canvasElements.REVENUE_STREAMS.name: setRevenueStreams(revenueStreams => [...revenueStreams, card]);
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
          <List name={canvasElements.KEY_PARTNERS.name} 
                tag={canvasElements.KEY_PARTNERS.tag} 
                showModal={showModalHandler} 
                list={partners} />
        </div>
        <div className={style.canvas__activities}>
          <List name={canvasElements.KEY_ACTIVITIES.name} 
                tag={canvasElements.KEY_ACTIVITIES.tag} 
                showModal={showModalHandler} 
                list={activities} />
        </div>
        <div className={style.canvas__resources}>
          <List name={canvasElements.KEY_RESOURCES.name} 
                tag={canvasElements.KEY_RESOURCES.tag} 
                showModal={showModalHandler} 
                list={resources} />
        </div>
        <div className={style.canvas__values}>
          <List name={canvasElements.VALUE_PROPOSITION.name}
                tag={canvasElements.VALUE_PROPOSITION.tag} 
                showModal={showModalHandler} 
                list={values} />
        </div>
        <div className={style.canvas__customerRelationships}>
          <List name={canvasElements.CUSTOMER_RELATIONSHIPS.name} 
                tag={canvasElements.CUSTOMER_RELATIONSHIPS.tag} 
                showModal={showModalHandler} 
                list={customerRelationships} />
        </div>
        <div className={style.canvas__chanels}>
          <List name={canvasElements.CHANELS.name} 
                tag={canvasElements.CHANELS.tag} 
                showModal={showModalHandler} 
                list={chanels} />
        </div>
        <div className={style.canvas__customerSegments}>
          <List name={canvasElements.CUSTOMER_SEGMENTS.name} 
                tag={canvasElements.CUSTOMER_SEGMENTS.tag} 
                showModal={showModalHandler} 
                list={customerSegments} />
        </div>
        <div className={style.canvas__costStructure}>
          <List name={canvasElements.COST_STRUCTURE.name} 
                tag={canvasElements.COST_STRUCTURE.tag}
                showModal={showModalHandler} 
                list={costStructure} />
        </div>
        <div className={style.canvas__revenueStreams}>
          <List name={canvasElements.REVENUE_STREAMS.name} 
                tag={canvasElements.REVENUE_STREAMS.tag} 
                showModal={showModalHandler} 
                list={revenueStreams} />
        </div>
      </section>
      {displaySaveModal && <SaveCanvas />}
      {selectedList && <Modal listName={selectedList} modalClosed={handleModalClose} addCard={addCardHandler} />}
      {displayAuth && <Auth />}
    </Fragment>
  )
}

export default Canvas;