import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import Button from "@mui/material/Button";

const LoginButton = () => {
    const navigate = useNavigate();

  return (
    <>
    <Button variant="contained" color="success" onClick={() => navigate("/login")}>
    Log in
    <LoginIcon />
    </Button>
    </>
  )
}

export default LoginButton