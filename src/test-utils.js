import { configureStore } from "@reduxjs/toolkit";
import { render as rtlRender } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import usersApiReducer, { usersApi } from "./redux/slices/apiSlice";

function render(ui, { route = "/", initialState = {} } = {}) {
  window.history.pushState({}, "Test page", route);
  const store = configureStore({
    reducer: {
      usersApi: usersApiReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersApi.middleware),
  });

  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper });
}

export * from "@testing-library/react";
export { render };
