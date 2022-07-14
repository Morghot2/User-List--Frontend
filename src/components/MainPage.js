import React from "react";

import { Outlet
 } from "react-router-dom";
import Header from "./Header";
import ListBody from "./ListBody";
import MyModal from "./Modal";


import { useGetRecordsQuery } from "../redux/slices/services/recordsApiSlice";
import { useGetButtonQuery } from "../redux/slices/services/apiSlice";

const MainPage = (props) => {
  const { data, isLoading, isError } = useGetRecordsQuery();
  if (isLoading)  { return <div>Loading...</div>; }
  console.log(data)

  // const { data } = useGetButtonQuery();
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
