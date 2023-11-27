// Login.js

import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };
  const Background={
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: "url(https://bhatnagars.co.in/wp-content/uploads/2018/07/reasons-1.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundRepeat: "no_repeat",
  };
  
   
  return (
    <div style={Background}>
    <Container component="main" 
    maxWidth="xs" >
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">LOGIN</Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
        
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
         LOGIN
        </Button>
        {/* <Button  color="primary" fullWidth onClick={handleLogin}>
          
        <u>Don't have an account</u>
        </Button> */}
        <Button   color="primary"  href="/Register"><u>DON'T HAVE AN ACCOUNT</u></Button>
          <pre></pre>
      </Paper>
     
    </Container>
    </div>
  );
};

export default Login;
