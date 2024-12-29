import React from 'react';

import './App.css';
import CustomRoutes from './Routes.tsx';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
 <CustomRoutes></CustomRoutes>
    </BrowserRouter>
  );
}

export default App;
