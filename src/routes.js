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
     {routes.map((item, index) => 
       <Route  key={index} path={item.route} element={<Meetings />}></Route>)}
  </Routes>;
}

export default MainRoutes;