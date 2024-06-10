import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'Abduaziz' && password === '8486') {
      window.location.href = '/home';
      toast.success("Hush kelibsiz")
    } else {
      toast.error("Passwordni Hato kiritingiz yana bir bor urunib koring");

    }
  };

  return (
    <div className=' text-white h-[100vh] flex items-center justify-center  bg-cover' style={{backgroundImage:"url(https://img.freepik.com/free-psd/beautiful-leaves-isolated_23-2150114877.jpg)"}}>
    <div className='text-white h-[100vh] flex items-center justify-center bg-cover'>
     <div className='bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30  relative'>
     <h1 className='text-4xl font-bold text-center  mb-6'>Login</h1>
      <TextField 
      id="outlined-basic" 
      label="Username"
       variant="outlined"
       className='w-[250px]'
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <br />
      <div className='mt-[20px]'>
      <TextField 
      id="filled-basic" 
      label="Password" 
      variant="outlined"
        className='w-[250px]'
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      </div>
      <br />
      <Button  variant="contained" className='w-[250px]'  onClick={handleLogin}>Login</Button>
      </div>
      <ToastContainer />

    </div>
    </div>
  );
}

export default Login;