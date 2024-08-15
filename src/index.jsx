import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Routers from "./routers";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { ScreenAndAuthProvider } from './Context/screenContext';
import { CssBaseline } from "@mui/material";


// Renderizando o aplicativo com o tema aplicado
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScreenAndAuthProvider>
          <Routers />
        </ScreenAndAuthProvider>
    </ThemeProvider>
  </React.Fragment>
);
