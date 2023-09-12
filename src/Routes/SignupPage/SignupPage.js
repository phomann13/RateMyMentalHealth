
import React, { Component } from 'react';
import './Signup.css';
import { useState } from 'react';
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPersonCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Signup() {
    const [univName, setUnivName] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const newUser = {
            // username: username,
            univName: univName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
     
         //alert(JSON.stringify(newUser))
     
        fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
     
        alert(JSON.stringify(newUser))
        setFirstName('');
        setLastName('');
        setUnivName('');
        setEmail('');
        setPassword('');
        
    };
    
    
    
  return (
    <div className="page-container">
        <div className="center-container">
            <div classNameName="title">
                <h1>Choose an Account Type</h1>
            </div>
            
            <div className="accounts">
                <button className="account-boxes" onclick= ' univ_sign()'>
                <FontAwesomeIcon icon={faBuildingColumns} />
                    <p>University</p>
                </button>
                
                <button className="account-boxes" onclick= "indiv_sign()">
                <FontAwesomeIcon icon={faPerson} />
                    <p>Individual</p>
                </button>
            </div>
    
            <form id="myForm" onSubmit={handleSubmit} className="login" name="myform" noValidate action="Home.html">
                <div id="univ" className="univ_name">
                <FontAwesomeIcon icon={faBuildingColumns} />
                    <label className="in-field">
                        <input className="credent" type="text" required name="Universityname" value = {univName} placeholder="University Name"
                         onChange={(event) =>
                            setUnivName(event.target.value)}/>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    
                    </label>
                </div>
                <div id = "indiv_nfirst" className="indiv_name">
                <FontAwesomeIcon icon={faPersonCircleQuestion} />
                    <label className="in-field">
                        <input className="credent" type="text" name="FirstName" required placeholder="First Name" value={firstName}
                        onChange={(event) =>
                            setFirstName(event.target.value)}/>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    
                    </label>
                </div>
                <div id = "indiv_nlast"className="indiv_name">
                <FontAwesomeIcon icon={faPersonCircleQuestion} />
                    <label className="in-field">
                        <input className="credent" type="text" required name= "Last name" placeholder="Last Name" value = {lastName}
                        onChange={(event) =>
                            setLastName(event.target.value)}/>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    
                    </label>
                </div>
                
                <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <label className="in-field">
                        <input className="credent" type="email"  name="email" required placeholder="Email" value={email}
                        onChange={(event) =>
                            setEmail(event.target.value)}/>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    
                    </label>
                </div>
                    
                <div className="password">
                    <FontAwesomeIcon icon={faLock} />
                    <label className="in-field">
                        <input className="credent" type="password" name="password" required placeholder="Password" value={password}
                        onChange={(event) =>
                            setPassword(event.target.value)}/>
                        <span className="focus-border">
                            <i></i>
                        </span>
                        
                    </label>
                    
                </div>
                <input type="submit" />
            </form>
        </div>
    </div>

  );
  
}


export default Signup;
