import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";




import CircularProgress from '@mui/material/CircularProgress';

const MainPage = React.lazy(() => import("./MainPage"));
const ListBody = React.lazy(() => import("./ListBody"));
const Login = React.lazy(() => import("./Login"));
const Registration = React.lazy(() => import("./Registration"));

const App = () => {
  //   const socket = io("http://localhost:5000");
  //   socket.on("connect", () => {
  //     console.log("socket connected on rtk query");
  //   }
  // );


  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<CircularProgress />}><MainPage /></Suspense>}>
        <Route path=":page" element={<ListBody />} />
      </Route>
      <Route exact path="/login" element={<Suspense fallback={<CircularProgress />}><Login /></Suspense>}></Route>
      <Route exact path="/registration" element={<Suspense fallback={<CircularProgress />}><Registration /></Suspense>}></Route>

    </Routes>
  );
};

export default App;
