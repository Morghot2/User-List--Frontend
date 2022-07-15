import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import CircularProgress from '@mui/material/CircularProgress';

const MainPage = React.lazy(() => import("./MainPage"));
const ListBody = React.lazy(() => import("./ListBody"));
const Login = React.lazy(() => import("./Login"));
const Registration = React.lazy(() => import("./Registration"));

const App = () => {
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
