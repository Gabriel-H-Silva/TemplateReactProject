import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./style.css";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Login } from './Class/apiEndpoint'
import CircularProgress from '@mui/material/CircularProgress';
import { Snackbar } from '@mui/material';
import { useScreenAndAuth } from '../../Context/screenContext';
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://www.io.com.br/">
        GHDesenv
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn() {

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const { setAuthData } = useScreenAndAuth();
  const navigate = useNavigate();



  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  const SaveContext = async (SaveContext) => {
    setAuthData({
      accessToken: SaveContext.accessToken,
      authenticated: true,
      pages: SaveContext.pages,
      refreshToken: SaveContext.refreshToken,
      username: SaveContext.username,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loading) {
      setSuccess(false);
      setLoading(true);

      const data = new FormData(e.currentTarget);

      // const login = {
      //   name: data.get('name'),
      //   password: data.get('password')
      // };

      // const result = await Login(login);

      // if (result == 1) {
      //   setSuccess(false);
      //   setLoading(false);
      //   setOpen(true);
      // }

      // else {
      const result = {
        accessToken: "dsadasndan",
        authenticated: true,
        pages: ["Home"],
        refreshToken: "ADMIN",
        username: "ADMIN",
      }
        
        await SaveContext(result);

        setSuccess(true);
        setLoading(false);


        navigate("/Terminal");

      // }

    }
  }

  return (
    <Container component="main"
      maxWidth="xs" sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

        }}
        className="BoxBG"
      >
        <img width={50} />
        <Typography component="h1" variant="h5">
          GHDesenv
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} autoComplete="off">
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Usuário"
            name="name"
            autoFocus

          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={buttonSx}
            disabled={loading}
          >
            Entrar
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: 'absolute',
                marginTop: 1,
                marginLeft: -22,
                zIndex: 1,
              }}
            />
          )}
          <Copyright sx={{ mt: 4, mb: 1 }} />
        </Box>
      </Box>

    </Container>
  );
}
