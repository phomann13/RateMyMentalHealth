
import React, {  useState, useEffect, } from 'react';
import {useNavigate} from 'react-router-dom'
import './Signup.css';
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPersonCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '../../Components/Button'


function Signup() {
    const [univName, setUnivName] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signedUp, setSignedUp] = useState('')
    const [display, setDisplay] = useState(false)
    const [accountTypeSelect, setAccoutTypeSelect] = useState()
    let attempt = false;
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (univName == null) {
            fetch('http://localhost:8000/signUpData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: "person",
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                })
            })
                .then((response) => response.json())
                .then((data) => alert(data.message));
        } else {
            fetch('http://localhost:8000/signUpData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: "univ",
                    univName: univName,
                    email: email,
                    password: password
                })
            })
                .then((response) => response.json())
                .then((data) => alert(data.message));

        }
        
        setPassword('');
        
    };

    useEffect(() => {
        if (signedUp === "True"){
            navigate("/home")
        } else {
            if(signedUp === "False" && attempt === true){
                alert("Error with signing up please try again")
            
            }
        }
    }, [signedUp]);
  
    const univSign = () =>{
    
        setDisplay(true)
        setAccoutTypeSelect(true)
    }
    const indivSign = () =>{
        
        setDisplay(true)
        setAccoutTypeSelect(false)
    }

    const FieldDisplay = ({fields}) => fields ?
            (<div>
                <form id="myForm" onSubmit={handleSubmit} className="login" name="myform" noValidate action="Home.html">
                <div id="univ" className="field">
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
            
                
                <div className="field">
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
                    
                <div className="field">
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
                <input type="submit"/>
            </form>
            </div>
   ) : ( 
            <div> 
                <form id="myForm" onSubmit={handleSubmit} className="login" name="myform" noValidate action="Home.html">
                    <div id = "indiv_nfirst" className="field">
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
                    <div id = "indiv_nlast" className="field">
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
                    
                    <div className="field">
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
                        
                    <div className="field">
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
                    <input type="submit"/>
                </form>
                
                </div>
    );
    
    
  return (
    <div className="page-container">
        <div className="center-container">
            <div classNameName="title">
                <h1>Choose an Account Type</h1>
            </div>
            
            
            <div className="accounts">
            <Button className="account-boxes" onClick={univSign}>
                <FontAwesomeIcon icon={faBuildingColumns} />
                    <p>University</p>
            </Button>
                
            <Button className="account-boxes" onClick={indivSign}>
                <FontAwesomeIcon icon={faBuildingColumns} />
                    <p>Individual</p>
            </Button>
            </div>
            <div id='accountInfo'>
            {display ? (
                <FieldDisplay fields={accountTypeSelect}/>
            ) : (<h1>Please Select an Account Type</h1>)}
            </div>
        </div>
    </div>

  );
  
}


export default Signup;
