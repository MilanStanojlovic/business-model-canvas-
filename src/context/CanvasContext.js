import React, { useState, createContext, useContext } from 'react';

import { UiControlsContext } from './UIControlsContext';
import { UserContext } from './UserContext';

import { db } from '../firebase';

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

  const { toggleSave } = useContext(UiControlsContext);
  const { user } = useContext(UserContext);

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
      saveCanvas
    }}>
      {children}
    </CanvasContext.Provider>
  )
}