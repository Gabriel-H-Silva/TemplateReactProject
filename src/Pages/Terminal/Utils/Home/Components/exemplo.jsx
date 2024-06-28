import { Grid, Typography } from "@mui/material";
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';

export default function TelaHome({ dadosAPI }) {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} textAlign={'center'} justifyContent={'center'}>
                <Typography variant="h6"><AutoFixNormalIcon />Tela Home</Typography>
            </Grid>
        </Grid>
    );
}
