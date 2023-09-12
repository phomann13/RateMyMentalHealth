import React from "react"
import ReactDOM from "react-dom/client"
import App from "./Routes/App"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)


/*import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Routes, BrowserRouter} from 'react-router-dom';
import './index.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

//import App from './App'


import Login from  './Routes/Login'
import Signup from './Routes/SignupPage'
import NotFound from './Routes/NotFound'

/*
const routes = (
  <Routes>
    <Route exact path="/" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route component={NotFound} />
  </Routes>
);
/*const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
    <App />
      <Routes>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Signup} />
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  
);

ReactDOM.render(
  <Router>{routes}</Router>, document.getElementById('root')
);*/



//ReactDOM.render(<App />, document.getElementById('App'));



