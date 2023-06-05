import React from 'react';
import {AppBar, Box, Button, IconButton, Toolbar, Typography, } from '@mui/material';
import {useSelector} from "react-redux";
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const NavbarMain: React.FC = () => {
  const profileUser = useSelector((state: any) => state.profile.profileUser);
  return (
    <List component="nav">
      <ListItem button component="a" href="/dashboard">
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component="a" href="/dashboard/search">
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Busqueda" />
      </ListItem>
    </List>
  );
};

export default NavbarMain;
