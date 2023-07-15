
import React, { useState } from "react";
import { Link } from 'react-router-dom';


function Login() {
 
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
      const handleSubmit = (event) => {
        const userData = {
            email: email,
            password: password,
            
           
  
          };
        event.preventDefault();
        // Perform create user logic here using username, email, and password
        fetch('http://localhost:5002/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
          .then(response => response.json())
          .then(data => {
            // Handle the response from the server if needed
            console.log(data);
          })
          .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
          });

       
        
        
        console.log('Email:', email);
        console.log('Password:', password);
        setEmail('');
        setPassword('');
        // Reset the input fields
      };
    return (
        <div className="Logindiv">
        <form className="Loginform">
        <label>Email:</label>
      <input type="email"  onChange = {handleEmailChange}  value = {email}/>
     
      <label>Password:</label>
      <input type="password" onChange = {handlePasswordChange}  value = {password}/>
      <button className = "submit" onClick = {handleSubmit}>submit</button>
     <p>New user? Register <Link to = "/createuser">here</Link></p>
      </form>
      </div>


  );
};

export default Login;