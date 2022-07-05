import React from "react";

import { Outlet
 } from "react-router-dom";
import Header from "./Header";
import ListBody from "./ListBody";
import MyModal from "./Modal";

import { useGetButtonQuery } from "../redux/slices/apiSlice";

const MainPage = (props) => {
  const { data } = useGetButtonQuery();
  return (
    <>
      <Header />
      <ListBody />
      {data?.show && <MyModal />}
      {/* <Outlet /> */}
    </>
  );
};

export default MainPage;
