import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
 palette: {
    mode: 'dark',
    primary: {
      main: '#0D99FF',
      contrastText: '#fff',
    },
     secondary: {
       main: '#ffffff',
       contrastText: '#fff',
    },
    success: {
      main: '#45A24A',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    info: {
      main: '#29b6f6',
      contrastText: '#fff',
    },
    divider: 'rgba(249,244,244,0.12)',
    background: {
      paper: '#212121',
    },
  },
});
