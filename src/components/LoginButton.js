import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { useLogoutUserMutation } from "../redux/slices/services/authApiSlice";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import Button from "@mui/material/Button";

const LoginButton = () => {
  const [logoutUser] = useLogoutUserMutation();
  const isLoggedIn = useSelector((state) => state.userState._id);

  const navigate = useNavigate();

  const handleClick = async () => {
    navigate("/login");
    logoutUser();
    // window.location.reload();
  };

  return (
    <>
      <Button variant="contained" color="warning" onClick={handleClick}>
        {"Logout"}
        <LogoutIcon />
      </Button>
    </>
  );
};

export default LoginButton;
