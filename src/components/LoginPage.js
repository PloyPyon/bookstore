import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { TextField, Button } from '@mui/material';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to book list page
    } catch (error) {
      console.error(error);
      // Handle signup error
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to book list page
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  return (
    <div>
      <h2>Login/Signup</h2>
      <TextField label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
      <Button variant="contained" onClick={handleSignup}>Signup</Button>
    </div>
  );
}

export default LoginPage;