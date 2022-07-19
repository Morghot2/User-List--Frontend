import React, { useEffect } from "react";

import { Navigate, useNavigate } from "react-router-dom";

import { useGetRecordsQuery } from "../redux/slices/services/recordsApiSlice";

import { Outlet } from "react-router-dom";
import Header from "./Header";
import ListBody from "./ListBody";
import MyModal from "./Modal";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

const MainPage = (props) => {
  // const navigate = useNavigate();
  // if (!localStorage.getItem("user")) {
  //   navigate("/login");
  // }


  const isShown = useSelector((state) => state.buttonState.show);
  const { isFetching } = useGetRecordsQuery();

  if (isFetching) return <CircularProgress color="secondary" />;

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
