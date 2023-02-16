import { SyntheticEvent, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container, Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import IconMenu from "../component/sideBar.component";
import CreateIcon from '@mui/icons-material/Create';

export default function AutoEvaluationFormPage() {
  const [event, setEvent] = useState('');
  const [emotion, setEmotion] = useState('');
  const [thought, setThought] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const {event, emotion, thought} = {event: 'test', emotion: 'test', thought: 'test'};
    navigate('/autoEvaluation')
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
              <CreateIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
              Formulaire d'auto évaluation
            </Typography>
            <Box component="form" onSubmit={ handleSubmit } noValidate>
              <TextField
                type="event"
                label="Evenement"
                value={ event }
                onChange={ (e) => setEvent(e.target.value) }
                margin="normal"
                required
                fullWidth
                multiline
                rows={3}
              />
              <TextField
                type="emotion"
                label="Emotion"
                value={ emotion }
                onChange={ (e) => setEmotion(e.target.value) }
                margin="normal"
                required
                fullWidth
                multiline
                rows={3}
              />
              <TextField
                type="thought"
                label="Pensées automatiques"
                value={ thought }
                onChange={ (e) => setThought(e.target.value) }
                margin="normal"
                required
                fullWidth
                multiline
                rows={3}
              />
              <Button
                type="submit"
                disabled={ !event || !emotion || !thought }
                fullWidth
                variant="contained"
              >
                Valider
              </Button>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}
