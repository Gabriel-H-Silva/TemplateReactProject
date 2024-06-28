import { Alert, Snackbar } from "@mui/material";
import React from 'react';
import { useRefresh } from '../Context/RefreshContext';
const SnackbarRefresh = () => {
    const { openSnackbar, textMessage, snackStatus, closeSnackbar } = useRefresh();
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      closeSnackbar();
  };
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal } = state;
    
    return (
        <Snackbar open={openSnackbar} anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000} onClose={handleClose} key={vertical + horizontal}>
          <Alert
            onClose={handleClose}
            severity={snackStatus}
            variant="filled"
            sx={{ width: '100%', color: 'white' }}
          >
            {textMessage}
          </Alert>
        </Snackbar>
    );
};
export default SnackbarRefresh;