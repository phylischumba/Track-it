import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Meetings from './Pages/Meetings/Meetings';
import AddMeeting from './Pages/Meetings/AddMeeting';

const routes = [
  {
    route: '/meeting-list',
    component: <Meetings />,
  },
  {
    route: '/add-meeting',
    component: <AddMeeting />
  }
];

function MainRoutes() {
  return <Routes>
     {routes.map(({route, component}, index) => 
       <Route  key={index} path={route} element={component}></Route>)}
  </Routes>;
}

export default MainRoutes;