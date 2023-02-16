import { SyntheticEvent, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container, Grid,
  TextField,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { getJwt } from '../service/jwt.service';
import IconMenu from "../component/sideBar.component";

export default function LoginPage() {
  const jwt = getJwt();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState<string | null>(jwt);
  const navigate = useNavigate();

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const {accessToken, enabled2fa} = {accessToken: 'test', enabled2fa: false};
    setToken(accessToken);
    sessionStorage.setItem('jwt', accessToken);

    if (enabled2fa) {
      navigate('/validate-otp');
    } else {
      navigate('/');
    }
  }

  return (
    <Grid container spacing={ 2 } sx={ {height: '100%', width: '100%'} }>
      <Grid item xs={ 12 } sm={ 2 }>
        <IconMenu/>
      </Grid>
      <Grid item xs={ 12 } sm={ 10 }
            sx={ {display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'} }>
        <Container className="login" component="main" maxWidth="xs">
          <Box sx={ {display: 'flex', flexDirection: 'column', alignItems: 'center'} }>
            <Avatar>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={ handleSubmit } noValidate>
              <TextField
                type="email"
                label="Email"
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
                margin="normal"
                required
                fullWidth
              />
              <TextField
                type="password"
                label="Password"
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
                margin="normal"
                required
                fullWidth
              />
              <Button
                type="submit"
                disabled={ !email || !password }
                fullWidth
                variant="contained"
              >
                Sign in
              </Button>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}
