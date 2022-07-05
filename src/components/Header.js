import React from "react";
import { Link } from "react-router-dom";

import ModifyButton from "./ModifyButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  return (
    <>
      <h1>User List</h1>
      <div className="header">
        <ModifyButton action={"new"} />
        <Link to="/about">About</Link>
        <Link to="/admin">Adnim Panel</Link>
        <Link to="/login">Log in</Link>
      </div>
    </>
  );
};

export default Header;
