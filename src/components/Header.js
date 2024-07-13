import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <AppBar position="static" className="transparent-header">
    <Toolbar className="header-toolbar">
      <Typography variant="h6" className="header-text">
        жоска скиппа хакинг
      </Typography>
      <Button color="inherit" component={Link} to="/" className="cool">
        Главная
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
