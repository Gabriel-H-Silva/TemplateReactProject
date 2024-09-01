import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Grid, TextField } from '@mui/material';
import { faBars, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function BarraInferior() {

  return (
    <Box className="downBar">
      <Grid container spacing={4}>
          <Grid item>
            <Button variant="contained" color="success" style={{height:'100%'}}>
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </Grid>
          <Grid item xs={3} >
            <TextField id="outlined-basic" label="Pesquisar" variant="outlined" color="secondary" style={{backgroundColor:'#5dc761'}} fullWidth />
          </Grid>
          <Grid item xs={8}>
            <Button variant="contained" color="success" style={{height:'100%'}}>
              <FontAwesomeIcon icon={faUsersGear} />
            </Button>
          </Grid>
        </Grid>
    </Box>
  );
}
