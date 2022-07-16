import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./Header";
import ListBody from "./ListBody";
import MyModal from "./Modal";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

const MainPage = (props) => {
  const isShown = useSelector((state) => state.buttonState.show);

  return (
    <>
      <Header />
      <ListBody />
      {isShown && <MyModal />}
      {/* <Outlet /> */}
    </>
  );
};

export default MainPage;
