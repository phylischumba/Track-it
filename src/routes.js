import React from "react";
import { Routes, Route } from "react-router-dom";
import Meetings from "./Pages/Meetings/Meetings";
import AddMeeting from "./Pages/Meetings/AddMeeting";
import Login from "./pages/Login";

const routes = [
  {
    route: "/",
    component: <Login />
  },

  {
    route: "/meeting-list",
    component: <Meetings />
  },
  {
    route: "/add-meeting",
    component: <AddMeeting />
  }
];

function MainRoutes() {
  return (
    <Routes>
      {routes.map(({ route, component }, index) =>
        <Route key={index} path={route} element={component} />
      )}
    </Routes>
  );
}

export default MainRoutes;
