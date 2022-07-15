import React from "react";

import ModifyButton from "./ModifyButton";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <>
      <h1>User List</h1>
      <div className="header">
        <ModifyButton action={"new"} />

        <LoginButton />
      </div>
    </>
  );
};

export default Header;
