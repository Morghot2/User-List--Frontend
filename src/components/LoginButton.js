import React from "react";
import { useNavigate } from "react-router-dom";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import Button from "@mui/material/Button";

const LoginButton = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate("/login");
    window.location.reload();
   
  };

  if (localStorage.getItem("user")) {
    return (
      <>
        <Button variant="contained" color="warning" onClick={handleClick}>
          {"Logout"}
          <LogoutIcon />
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Button variant="contained" color="success" onClick={handleClick}>
          {"Login"}
          <LoginIcon />
        </Button>
      </>
    );
  }
};

export default LoginButton;
