import React, { useState } from "react";
import { Link } from 'react-router-dom';
const CreateUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    // const [rePassword, setRePassword] = useState('');



    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
      const handlefNameChange = (event) => {
        setFName(event.target.value);
      }
      const handlelNameChange = (event) => {
        setLName(event.target.value);
      }
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
      // const handleRePasswordChange = (event) => {
      //   setRePassword(event.target.value);
      // };

      const handleSubmit = (event) => {
        event.preventDefault();
        // Perform create user logic here using username, email, and password
        const userData = {
          email: email,
          password: password,
          fName: fName,
          lName: lName,
         

        };

        fetch('http://localhost:5002/users', {
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
        setFName('');
        // Reset the input fields
      };
    return (
      <div className="story">
        <div className="createuserformdiv">
         
        <form className="createuserform">
        
      <label>FirstName:</label>
      <input type="text"  onChange = {handlefNameChange}  value = {fName}/>
      <label>LastName:</label>
      <input type="text"  onChange = {handlelNameChange}  value = {lName}/>
      <label>Email:</label>
      <input type="email"  onChange = {handleEmailChange}  value = {email}/>
      <label>Password:</label>
      <input type="password" onChange = {handlePasswordChange}  value = {password}/>
      {/* <label>Re enter Password:</label>
      <input type="password" onChange = {handleRePasswordChange}  value = {password}/> */}
      <button className = "submit" onClick = {handleSubmit}>submit</button>
      <p>Have an account? Login <Link to = "/">here</Link></p>
     
      </form>
      </div>
      </div>


  );
};
export default CreateUser;