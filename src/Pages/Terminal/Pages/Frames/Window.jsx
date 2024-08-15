import { Button, Grid } from '@mui/material';
import React from 'react';
import Draggable from 'react-draggable';

function Window({ children, pLargura, pAltura }) {
  return (
    <Draggable handle=".frameTop">
      <div style={{ width: pLargura, height: pAltura, padding: '10px' }}>
        <div className='frameTop'>
          <Grid container>
          <Grid item xs={6}>
            nome
          </Grid>
          <Grid item xs={6} display={'flex'}>
            <Button variant="outlined">-</Button>
            <Button variant="outlined">X</Button>
          </Grid>
        </Grid>
        </div>
        <div className='frame'>
          {children}
        </div>
      </div>
    </Draggable>
  );
}

export default Window;