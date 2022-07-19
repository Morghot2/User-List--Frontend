import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useGetRecordsQuery } from "../redux/slices/services/recordsApiSlice";

import { Outlet } from "react-router-dom";
import Header from "./Header";
import ListBody from "./ListBody";
import MyModal from "./Modal";
import CircularProgress from "@mui/material/CircularProgress";

const MainPage = (props) => {
  const navigate = useNavigate();
  const isShown = useSelector((state) => state.buttonState.show);
  const { isFetching, isError } = useGetRecordsQuery();

  if (isFetching) return <CircularProgress color="secondary" />;
  if (isError) return navigate("/login");

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
