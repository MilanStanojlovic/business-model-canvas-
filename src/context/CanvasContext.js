import React, { useState, createContext, useContext, useEffect, useCallback } from 'react';

import { UiControlsContext } from './UIControlsContext';
import { UserContext } from './UserContext';

import { db } from '../firebase';
import { data } from '../enum/data';
import { canvasElements } from '../enum/canvas';

export const CanvasContext = createContext();

export const CanvasProvider = ({ children }) => {
  const [canvasName, setCanvasName] = useState('');
  const [partners, setPartners] = useState([]);
  const [activities, setActivities] = useState([]);
  const [resources, setResources] = useState([]);
  const [values, setValues] = useState([]);
  const [customerRelationships, setCustomerRelationships] = useState([]);
  const [chanels, setChanels] = useState([]);
  const [customerSegments, setCustomerSegments] = useState([]);
  const [costStructure, setCostStructure] = useState([]);
  const [revenueStreams, setRevenueStreams] = useState([]);

  const [canvases, setCanvases] = useState([]);

  const { toggleSave } = useContext(UiControlsContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user !== null && user.uid !== undefined) {
      // console.log(user.uid);
      db.collection(data.collections.MODELS).where(data.fields.USER_ID, '==', user.uid).get().then(querySnapshot => {
        const canvasList = [];
        querySnapshot.forEach(doc => {
          const canvas = {
            canvasId: doc.id,
            canvasName: doc.data().name,
            canvas: doc.data().canvas
          }
          canvasList.push(canvas);
          // console.log(canvases);
        })
        setCanvases(canvasList);
      }, error => {
        console.log(error);
      })
    }
  }, [user]);

  const deleteCanvas = useCallback((canvasId) => {
    //logic for deleting canvases
    // console.log(canvasId);
    db.collection(data.collections.MODELS).doc(canvasId).delete().then(() => {
      const temp = [...canvases];
      temp.forEach((element, index) => {
        if (element.canvasId === canvasId) {
          temp.splice(index, 1);
          setCanvases(temp);
        }
        console.log('deleted from firebase');
      });
    }, error => {
      console.log('error', error);
    })

  }, [canvases])

  const renameCanvas = (canvasId) => {
    console.log(canvasId);
  }

  const deleteCard = useCallback((cardId, list) => {
    const temp = [...list];
    temp.forEach((element, index) => {
      if (element.id === cardId) {
        temp.splice(index, 1);
      }
    })
    return temp;
  }, [])

  const deleteCanvasCard = (cardId, listTag) => {
    switch (listTag) {
      case canvasElements.KEY_PARTNERS.tag: setPartners(deleteCard(cardId, partners));
        break;
      case canvasElements.KEY_ACTIVITIES.tag: setActivities(deleteCard(cardId, activities));
        break;
      case canvasElements.KEY_RESOURCES.tag: setResources(deleteCard(cardId, resources));
        break;
      case canvasElements.VALUE_PROPOSITION.tag: setValues(deleteCard(cardId, values))
        break;
      case canvasElements.CUSTOMER_RELATIONSHIPS.tag: setCustomerRelationships(deleteCard(cardId, customerRelationships))
        break;
      case canvasElements.CHANELS.tag: setChanels(deleteCard(cardId, chanels))
        break;
      case canvasElements.CUSTOMER_SEGMENTS.tag: setCustomerSegments(deleteCard(cardId, customerSegments))
        break;
      case canvasElements.COST_STRUCTURE.tag: setCostStructure(deleteCard(cardId, costStructure))
        break;
      case canvasElements.REVENUE_STREAMS.tag: setRevenueStreams(deleteCard(cardId, revenueStreams))
        break;
      default: throw new Error('Unknown list error.');
    }
  }

  const saveCanvas = (event) => {
    event.preventDefault();
    // console.log('CanvasName: ', canvasName);
    // console.log('Canvas: ', partners,
    //   activities,
    //   resources,
    //   values,
    //   customerRelationships,
    //   chanels,
    //   customerSegments,
    //   costStructure,
    //   revenueStreams)
    // console.log('User ID: ', user.uid);

    db.collection('models').doc().set({
      userId: user.uid,
      name: canvasName,
      canvas: {
        partners: partners,
        activities: activities,
        resources: resources,
        values: values,
        customerRelationships: customerRelationships,
        chanels: chanels,
        customerSegments: customerSegments,
        costStructure: costStructure,
        revenueStreams: revenueStreams
      }
    });
    toggleSave();
  }

  return (
    <CanvasContext.Provider value={{
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
      setRevenueStreams,
      canvasName,
      setCanvasName,
      saveCanvas,
      canvases,
      deleteCanvas,
      renameCanvas,
      deleteCanvasCard
    }}>
      {children}
    </CanvasContext.Provider>
  )
}