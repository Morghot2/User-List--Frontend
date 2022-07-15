import React from "react";

import { Outlet
 } from "react-router-dom";
import Header from "./Header";
import ListBody from "./ListBody";
import MyModal from "./Modal";


import { useGetRecordsQuery } from "../redux/slices/services/recordsApiSlice";
import {useSelector} from "react-redux";

const MainPage = (props) => {
  const isShown = useSelector((state) => state.buttonState.show);
  const { data, isLoading } = useGetRecordsQuery();
  if (isLoading)  { return <div>Loading...</div>; }

  // const { data } = useGetButtonQuery();
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
