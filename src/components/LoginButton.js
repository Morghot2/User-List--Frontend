import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import Button from "@mui/material/Button";

const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClick = () => {
    navigate("/login");
    localStorage.getItem("user") ? localStorage.removeItem("user") : null
    setIsLoggedIn(!isLoggedIn);
  };
  const navigate = useNavigate();
  let buttonText = localStorage.getItem("user") ? "Logout" : "Login";

  if (localStorage.getItem("user")) {
    return (
      <>
        <Button
          variant="contained"
          color="warning"
          //   onClick={() => localStorage.removeItem("user")}
          onClick={handleClick}
        >
          {buttonText}
          <LogoutIcon />
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Button
          variant="contained"
          color="success"
          onClick={handleClick}
        >
          {buttonText}
          <LoginIcon />
        </Button>
      </>
    );
  }
};

export default LoginButton;
