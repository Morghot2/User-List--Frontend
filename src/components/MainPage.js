import React from "react";

import { useGetRecordsQuery } from "../redux/slices/services/recordsApiSlice";

import { Outlet } from "react-router-dom";
import Header from "./Header";
import ListBody from "./ListBody";
import MyModal from "./Modal";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

const MainPage = (props) => {
  const isShown = useSelector((state) => state.buttonState.show);
  const { isFetching } = useGetRecordsQuery();

  if (isFetching) return <CircularProgress color="secondary" />

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
