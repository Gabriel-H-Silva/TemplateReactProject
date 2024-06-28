import * as React from 'react';
import Box from '@mui/material/Box';
import "./style.css";
import { DrawerHeader, MenuLateral } from '../../Components/MenuLateral/menuLateral';
import BarraSuperior from '../../Components/barraSuperior';
import MainContent from '../../path.jsx';
import SnackbarRefresh from '../../Components/snackbar.jsx';
import { RefreshProvider } from '../../Context/RefreshContext.jsx';
import Fab from '@mui/material/Fab';
import RefreshIcon from '@mui/icons-material/Refresh';


export default function Index() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <Box sx={{ display: 'flex' }}>

      {/* Menu superior */}
      <BarraSuperior isDrawerOpen={isDrawerOpen} />

      {/* Menu Lateral */}
      <MenuLateral onDrawerChange={(isOpen) => setIsDrawerOpen(isOpen)} />

      {/* Conteudo */}
      <RefreshProvider>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

          <MainContent />
          
          <Fab color="success" aria-label="add" size="small" className='fixed_bottom'>
            <RefreshIcon />
          </Fab>

          <SnackbarRefresh />
          
        </Box>
      </RefreshProvider>
    </Box>
  );
}
