import React, { useState, createContext, useContext, useEffect, useCallback } from 'react';

import { UiControlsContext } from './UIControlsContext';
import { UserContext } from './UserContext';

import { db } from '../firebase';
import { data } from '../enum/data';

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
        if(element.canvasId === canvasId){
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

  const deleteCanvasCard = (cardId, listName) => {
    //TODO ADD LIST TAGS THAT MATCH STATE NAMES FOR EASIER DELETING
    console.log('Deleting canvas card: ', cardId , 'from ', listName);
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