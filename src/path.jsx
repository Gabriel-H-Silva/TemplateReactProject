// MainContent.js
import React from 'react';
import { useScreenAndAuth } from './Context/screenContext';
import Home from './Pages/Terminal/Utils/Home/index';

function MainContent() {
    const { currentScreen } = useScreenAndAuth();

    switch (currentScreen) {
        case 'Home':
            return <Home />;
        default:
            return <Home />;
    }
}

export default MainContent;
