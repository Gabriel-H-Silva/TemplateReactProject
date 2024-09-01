import { Grid } from '@mui/material';
import React from 'react';
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter, faUsersGear, faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons';

function Window({ children, pLargura }) {
  return (
    <Draggable handle=".frameTop">
      <div style={{ width: pLargura, padding: '10px' }}>
        <div className='frameTop'>
          <Grid container className='teste'>
            <Grid item xs={6}>
            <FontAwesomeIcon icon={faUsersGear} /> Cadastro de Usuario
            </Grid>
            <Grid item xs={6} className='botoesAlinhamento'>
                <button className='btnStyle alingWindows btnColor'><FontAwesomeIcon icon={faWindowMinimize} /></button>
                <button className='btnStyle alingWindows btnColor'><FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} /></button>
                <button className='btnStyle alingWindows btnColor'><FontAwesomeIcon icon={faXmark} /></button>
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