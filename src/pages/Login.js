import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'skippy' && password === 'kotekaporno123') {
      navigate('/add-program');
    } else {
      alert('Invalid login');
    }
  };

  return (
    <div style={{ padding: '2em', maxWidth: '400px', margin: 'auto' }}>
      <Typography variant="h5" style={{ marginBottom: '1em' }}>Admin Login</Typography>
      <TextField
        label="Username"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;
