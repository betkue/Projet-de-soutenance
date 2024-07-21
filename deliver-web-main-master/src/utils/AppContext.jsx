"use client"
import React, { createContext, useState, useEffect } from 'react';

// Créez le contexte
export const AppContext = createContext();

// Créez un fournisseur de contexte
export default function AppProvider ({ children }){
  // Fonction pour charger l'état depuis le localStorage
  const loadState = () => {
    const savedState = localStorage.getItem('appState');
    return savedState ? JSON.parse(savedState) : {
      // Définissez vos variables par défaut ici
      colis: [],
      user:{},
      user2:{},
      recipient:{},
      token:null
    };
  };

  const [state, setState] = useState(loadState);

  // Utilisez useEffect pour sauvegarder l'état dans le localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  const updateState = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <AppContext.Provider value={{ state, updateState }}>
     {children}
    </AppContext.Provider>
  );
};