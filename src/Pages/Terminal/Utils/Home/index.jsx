import React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { CircularProgress, Grid } from '@mui/material';
import TabPanel from '../../../../Components/tabPanel';

// Aqui é o componente
import Exemplo from './Components/exemplo'

// Aqui vc excreve o endPoint que quer chamar da class do sua tela
import { GetItem } from './Class/apiEndpoint'


export default function Index() {
  const theme = useTheme();

  // Aqui é os valores
  const [value, setValue] = React.useState(0);
  const [dados, setDados] = React.useState([]);

  const [carregando, setCarregando] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const PegarItem = async () => {
    setCarregando(true);
    try {
      // Chama a função do endPoint que vc quer
      const data = await GetItem();
      setDados(data);
    } catch (error) {
      setDados("Falha na API");
    } finally {
      setCarregando(false);
    }
  };

  React.useEffect(() => {
    PegarItem();
  }, []);

  if (carregando) return <CircularProgress />;

  return (
    <>
      <Grid container spacing={0} className='render'>
        <Grid item xs={12}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
              className='navigation_tab'
            >

              <Tab label="Tela 1" />

            </Tabs>
          </AppBar>

          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >

            <TabPanel value={value} index={0} dir={theme.direction}>
              <Exemplo dadosAPI={dados} />
            </TabPanel>

          </SwipeableViews>

        </Grid>
      </Grid>
    </>
  );
}
