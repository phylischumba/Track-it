import React from "react";
import { Routes, Route } from "react-router-dom";
import Meetings from "./pages/Meetings/Meetings";
import AddMeeting from "./pages/Meetings/AddMeeting";
import Login from "./pages/Login";
import ViewCharges from "./pages/Charges/ViewCharges";

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

    route: "/view-charges",
    component: <ViewCharges />,
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
