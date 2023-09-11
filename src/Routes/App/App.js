
import React from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';

import './App.css';
import { useState } from 'react';
import { faPerson , faBuildingColumns, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { MongoClient } from 'mongodb';

        
function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //returns true if login works, false otherwise
    /*async function verifyLogin(){
        const URI = "mongodb+srv://t-hyland:Tomh@cluster0.0uz4cny.mongodb.net/?retryWrites=true&w=majority";
        const client = new MongoClient(URI);

        try{
            await client.connect();

            const result = await client.db("RateMyProffessor").collection("people").findOne({email: {email}});
            if (result.password == {password}) {
                return true; 
            } 
        } catch (e) {
            console.error(e);
            return false; 
        } finally {
            await client.close();
        }
        return false; 
    }*/
  
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
        
      
        alert("Submited")
        alert({email})
        alert({password})
        setEmail('');
        setPassword('');

        //verifyLogin();
    };
    
    
    
  return (
    
    <div className="page-container" >
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
                
                <p>No Account? <Link to='/signup' >Sign up</Link></p>
                <a href="Home.html">Continue as Guest</a>
                
                
            </div>
            <img className="skyline" src="skyline.png" alt="skyline"></img>
            



        </div>
    </div>
  );
  
}

export default App;

