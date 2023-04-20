import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Donate from './pages/Donate';
import Location from './pages/Location';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/signIn' element={<Signin/>} />
        <Route path='/signUp' element={<Signup/>} />
        <Route path='/donate' element={<Donate/>} />
        <Route path='/location' element={<Location/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
