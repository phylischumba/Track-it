import React, { Suspense } from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const MainLayout = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
};

export default MainLayout;
