import React, { useState } from "react";

import ModifyButton from "./ModifyButton";
import LoginButton from "./LoginButton";
import { useGetMeQuery } from "../redux/slices/services/currentUserApiSlice";

const Header = () => {
  const { data, isFetching } = useGetMeQuery();
  if (isFetching) return null;
  return (
    <>
      <h1>User List</h1>
      <h2>{`Logged in as ${data?.firstName} ${data?.lastName}`}</h2>
      <div className="header">
        <ModifyButton action={"new"} />

        <LoginButton />
      </div>
    </>
  );
};

export default Header;
