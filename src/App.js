
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import AdminDashboard from "./components/AdminDashboard";
import database from './records.json';
import UserDashboard from './components/UserDashboard'

// import { Login } from './components/Login';

function App() {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAdmin, setisAdmin] = useState("user");

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    let  { uname, pass } = document.forms[0];
    
    // Find user login info
    const userData = database.find((user) => user.Name === uname.value);
    const Admin = database.find((user) => user.Role ==="admin");
    if(Admin)
    {
      setisAdmin("admin");
    }
    // Compare user info
    if (userData) {
      
      if (userData.pass  !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );


  const [currentForm, setCurrentForm] = useState('login');

  return (
    <div className="app">
    <div className="login-form">
    
      <div className="title">Sign In</div>
      
      {/* {isSubmitted  && isAdmin === "admin" ? <div><AdminDashboard/></div> : renderForm} */}
      {isSubmitted  && isAdmin === "user" ? <div><UserDashboard/></div> : renderForm}
      
    </div>
  </div>
     );
}

export default App;
