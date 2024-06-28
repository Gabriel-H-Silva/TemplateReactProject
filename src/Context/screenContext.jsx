import React, { createContext, useContext, useState } from 'react';

const ScreenAndAuthContext = createContext();

export const useScreenAndAuth = () => useContext(ScreenAndAuthContext);

export const ScreenAndAuthProvider = ({ children }) => {
  const [state, setState] = useState({
    currentScreen: 'Inicio',
    setCurrentScreen: (screen) => setState(prev => ({ ...prev, currentScreen: screen })),
    accessToken: null,
    authenticated: false,
    pages: [],
    refreshToken: '',
    username: '',
    setAuthData: (data) => setState(prev => ({ ...prev, ...data })),
  });

  return (
    <ScreenAndAuthContext.Provider value={state}>
      {children}
    </ScreenAndAuthContext.Provider>
  );
};
export default ScreenAndAuthContext;
