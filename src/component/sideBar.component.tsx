import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LoginIcon from '@mui/icons-material/Login';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ArticleIcon from '@mui/icons-material/Article';
import CreateIcon from '@mui/icons-material/Create';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import GradingIcon from '@mui/icons-material/Grading';

export default function IconMenu() {
  return (
    <Paper sx={ {width: '100%', height: '100%', margin: 0, padding: 0} }>
      <MenuList sx={ {height: '100%', margin: 0, padding: 0} }>
        <Link style={ {textDecoration: 'unset', color: 'unset'} } to={ '/' }>
          <MenuItem>
            <ListItemIcon>
              <HomeIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Accueil</ListItemText>
          </MenuItem>
        </Link>
        <Link style={ {textDecoration: 'unset', color: 'unset'} } to={ '/auto-evaluation-create' }>
          <MenuItem>
            <ListItemIcon>
              <GradingIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Tableau d'auto-observation</ListItemText>
          </MenuItem>
        </Link>
        <MenuItem>
          <ListItemIcon>
            <CreateIcon fontSize="small"/>
          </ListItemIcon>
          <ListItemText>Notes</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ArticleIcon fontSize="small"/>
          </ListItemIcon>
          <ListItemText>Fiches</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PeopleAltIcon fontSize="small"/>
          </ListItemIcon>
          <ListItemText>Patients</ListItemText>
        </MenuItem>
        <Divider/>
        <Link style={ {textDecoration: 'unset', color: 'unset'} } to={ '/login' }>
          <MenuItem>
            <ListItemIcon>
              <LoginIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Connection</ListItemText>
          </MenuItem>
        </Link>
      </MenuList>
    </Paper>
  );
}
