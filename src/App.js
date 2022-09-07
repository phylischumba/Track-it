import React, { Suspense } from 'react';
import Routes from './routes'
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Navbar from './Pages/Navbar';

const MainLayout = () => {
  return (
        <Suspense
          fallback={'Loading...'}
        >
          <BrowserRouter>
          <Navbar />
          <Routes />
          </BrowserRouter>
          
        </Suspense>
  );
};

export default MainLayout;
