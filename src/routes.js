import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Meetings from './Pages/Meetings/Meetings'

const routes = [
  {
    route: '/meeting-list',
    component: Meetings,
  },
];

function MainRoutes() {
  return <Routes>
     {routes.map((route, index) => 
       <Route  key={index} path={'/meeting-list'} element={<Meetings />}></Route>)}
  </Routes>;
}

export default MainRoutes;