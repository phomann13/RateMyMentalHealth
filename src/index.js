import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Link, Routes, BrowserRouter} from 'react-router-dom';
import './index.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

//import App from './App'


import App from  './Routes/App'
import Signup from './Routes/SignupPage'
import NotFound from './Routes/NotFound'


const routes = [
  <Routes>
    <Route exact path="/" component={App} />
    <Route exact path="/signup" component={Signup} />
    <Route component={NotFound} />
   </Routes>
]
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  
</StrictMode>,
);


