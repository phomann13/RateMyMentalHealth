import React from 'react';
//import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { faPerson , faBuildingColumns, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { MongoClient } from 'mongodb';
import Home from '../HomePage/HomePage'
import Login from '../Login'
import Signup from '../SignupPage'
import PostPage from '../PostPage/PostPage';
        
function App() {
    const [loggedIn, setLoggedIn] = useState(true);
    return (
        
            <div className='App'>
                
                <div className='content'>
                    <Routes>
                        <Route eaxct path='/' element={loggedIn ? <Login /> : <Home />}></Route>
                        <Route path='/signup' element={<Signup />}></Route>
                        <Route path='/home' element={<Home />}></Route>
                        <Route path='/post' element={<PostPage />}></Route>
                    </Routes>
                </div>
            </div>
        
    );
}
export default App;

