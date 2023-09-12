import React, { useEffect, useState } from 'react';
import './Login.css';
import Skyline from './skyline.png'
import { faPerson , faBuildingColumns, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link, useNavigate} from 'react-router-dom';

        
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState('')
    let attempt = false;
    
    //runs when submit is pressed
    const HandleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:8000/loginData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        fetch('http://localhost:3000/verification', {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) =>  setLoggedIn(data.message).then(alert("Allow login: " + data.message)));
        //Need to see Json response to edit this function
        setLoggedIn("True")
        attempt = true
        return true;
    }

    useEffect(() => {
        if (loggedIn === "True"){
            navigate("/home")
        } else {
            if(loggedIn === "False" && attempt === true){
                alert("Invalid email or password")
            
            }
        }
    }, [loggedIn]);

    


    
    
    
    
  return (
    
    <div className="page-container" >
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

            
            <form onSubmit={HandleSubmit}
                  id="loginForm" name="form" className="login" noValidate action="Home.html">
                <div className="email">
                <FontAwesomeIcon icon={faEnvelope} />
                    <label className="in-field">
                        <input className="credent" type="email" name="email" value={email} 
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
                    Forgot Password?
                
                    <input type='submit' value="Login" />
                </div>

                
            </form>
            <div className="no-account">
                
                <div>No Account? <Link to='/signup' >Sign up</Link></div>
                <Link to='/Home'>Continue as Guest</Link>
                
                
            </div>
            <img className="skyline" src={Skyline} alt="skyline"/>
            



        </div>
    </div>
  );
  
}

export default Login;