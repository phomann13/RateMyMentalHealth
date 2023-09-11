
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

        
function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const newUser = {
            // username: username,
             email: email,
             password: password
           };
     
         //alert(JSON.stringify(newUser))
     
         fetch('https://reqres.in/api/login', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(newUser)
         });
     
         //alert("fetch complete")
        setEmail('');
        setPassword('');
        
      };
    
    
    
  return (
    
    <div className="page-container">
        <div>
            <h1>Test</h1>
        </div>
        <div className="center-container">
            <div className="title">
                <h1>Choose an Your Type</h1>
            </div>
            
            <div className="accounts">
                <button className="account-boxes">
                <FontAwesomeIcon icon={faBuildingColumns} />
                    <p>University</p>
                </button>
                <button className="account-boxes">
                <FontAwesomeIcon icon={faPerson} />
                    <p>Individual</p>
                </button>
            </div>
            <div className="welcome">
                <p>Hello </p> 
                <p id="Account_Type" >Account type</p>
                <p>Please login in below to get started!</p>

            </div>

            
            <form onSubmit={handleSubmit} id="loginForm" name="form" className="login" noValidate action="Home.html">
                <div className="email">
                <FontAwesomeIcon icon={faEnvelope} />
                    <label className="in-field">
                        <input className="credent" type="text" name="email" value={email} 
                        onChange={(event) =>
                        setEmail(event.target.value)} 
                        required placeholder="Email"/>
                        <span className="focus-border">
                            <i></i>
                        </span>
                        
                      </label>
                </div>
                    
                <div className="password">
                <FontAwesomeIcon icon={faLock} />
                    <label className="in-field">
                        <input className="credent" type="password" name="password" 
                        onChange={(event) =>
                            setPassword(event.target.value)}
                        value = {password}
                            required placeholder="Password"/>
                        <span className="focus-border">
                            <i></i>
                        </span>
                       
                      </label>
                    
                </div>
                <div className="actions">
                    <a>Forgot Password?</a>
                <a href="Home.html">
                    <button type>
                    Login
                </button></a>
                </div>

                
            </form>
            <div className="no-account">
                
                <p>No Account? <a href="Signup.html">Sign up!</a></p>
                <a href="Home.html">Continue as Guest</a>
                
                
            </div>
            <img className="skyline" src="skyline.png" alt="skyline"></img>
            



        </div>
    </div>
  );
  
}


export default App;
