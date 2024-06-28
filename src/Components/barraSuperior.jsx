import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { useScreenAndAuth  } from '../Context/screenContext';
import React from "react";

export default function BarraSuperior({ isDrawerOpen }) {
    const { username } = useScreenAndAuth();
    const [hours, setHours] = React.useState(new Date().getHours());
    const [minutes, setMinutes] = React.useState(
        new Date().getMinutes().toString().padStart(2, "0")
    );

    let Mensagem = "";
    if (hours >= 5 && hours < 12) {
        Mensagem = "Bom Dia";
    } else if (hours < 18) {
        Mensagem = "Boa Tarde";
    } else {
        Mensagem = "Boa Noite";
    }

    React.useEffect(() => {
        const updateTime = () => {
        const date = new Date();
        setHours(date.getHours());
        setMinutes(date.getMinutes().toString().padStart(2, "0"));
        };

        updateTime();

        const intervalId = setInterval(updateTime, 900);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <AppBar position="fixed" >
            <Toolbar className='website_action_color transition-menu-lateral' style={{ marginLeft: isDrawerOpen ? 225 : 50 }}>
                <Grid container spacing={2}>

                    <Grid item xs={6}>
                        <Typography variant="h6" component="div" className='center_logo'>
                            <img width={35} /> <div className='padding-left-1'>Logo v0.3.0</div>
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        
                            
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="h6" textAlign={'right'}>
                                    {username}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Button color="secondary" fullWidth>Sair</Button>
                            </Grid>
                            
                            <Grid item xs={4}>
                                <Typography variant="h6" textAlign={'right'}>
                                    {Mensagem} {hours}:{minutes}
                                </Typography>
                            </Grid>
                            
                            
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
