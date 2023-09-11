import logo from './logo.svg';
import './App.css';

function App() {
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
                    <p>University</p>
                </button>
                <button className="account-boxes">
                    <i  className="fa-solid fa-person " ></i>
                    <p>Individual</p>
                </button>
            </div>
            <div className="welcome">
                <p1>Hello </p1> 
                <p2 id="Account Type" >Account type</p2>
                <p1>Please login in below to get started!</p1>

            </div>

            
            <form className="login" action="Home.html">
                <div className="email">
                    <i className="fa-solid fa-envelope"></i>
                    <label className="in-field">
                        <input className="credent" type="email" required placeholder="Email"/>
                        <span className="focus-border">
                            <i></i>
                        </span>
                        
                      </label>
                </div>
                    
                <div className="password">
                    <i className="fa-solid fa-lock"></i>
                    <label className="in-field">
                        <input className="credent" type="password" required placeholder="Password"/>
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
