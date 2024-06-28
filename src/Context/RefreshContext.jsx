import React, { createContext, useContext, useState } from 'react';

const RefreshContext = createContext();

// Componente provedor para fornecer o contexto aos componentes filhos
export const RefreshProvider = ({ children }) => {
  
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [textMessage, setTextMessage] = useState('');
    const [snackStatus, setSnackStatus] = useState('');

    const showSnackbar = (message, status) => {
        setTextMessage(message);
        setSnackStatus(status);
        setOpenSnackbar(true);
    };

    const closeSnackbar = () => {
        setOpenSnackbar(false);
    };
    

  return (
    <RefreshContext.Provider value={{ openSnackbar, textMessage, snackStatus, showSnackbar, closeSnackbar }}>
      {children}
    </RefreshContext.Provider>
  );
};
export const useRefresh = () => useContext(RefreshContext);
