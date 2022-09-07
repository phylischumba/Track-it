import React from "react";
import { Routes, Route } from "react-router-dom";
import Meetings from "./Pages/Meetings/Meetings";
import Login from "./pages/Login";
import ViewCharges from "./Pages/Charges/ViewCharges";

const routes = [
  {
    route: "/",
    component: <Login />,
  },

  {
    route: "/meeting-list",
    component: <Meetings />,
  },
  {
    route: "/view-charges",
    component: <ViewCharges />,
  },
];

function MainRoutes() {
  return (
    <Routes>
      {routes.map(({ route, component }, index) => (
        <Route exact key={index} path={route} element={component}></Route>
      ))}
    </Routes>
  );
}

export default MainRoutes;
