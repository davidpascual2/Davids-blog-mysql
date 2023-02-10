import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios"; 

const Register = () => {

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })
  //?????
  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
}

  // const handleSubmit = async e => { //api request
  //   e.preventDefault() //prevents page from refreshing
  //   try{

  //     const response = await axios.post("http://localhost3001/api/users", inputs)
  //     console.log(response)

  //   }catch (err) {
  //     console.log(err)
  //   }
  // }

  const handleSignup = async (event) => {
    event.preventDefault();
    console.log('INSIDE SIGNUP')
    try{
      const response = await axios.post('http://localhost:3001/api/users', inputs);
        console.log(response)

    } catch (err){
      console.log(err)
    }

    // if(username && password) {
        
        // if (response.ok) {
        //   console.log(response, 'RESPONSE!!!!!')
        // } else {
        //   alert(response.statusText)
        // }
    // } else {
    //   alert('Please enter valid email/password')
    // }
};



    return (
      <div className="auth">
      <h1>Register</h1>
      <form >
        <input
         required 
         type='text' 
         placeholder="username" 
         name="username" 
         onChange={handleChange} 
        />
        <input 
          required 
          type='email' 
          placeholder="email" 
          name="email" 
          onChange={handleChange} 
        />
        <input 
          required 
          type="password" 
          placeholder="password" 
          name="password" 
          onChange={handleChange}
        />
        <button onClick={handleSignup}>Sign Up</button>
        <p>There was an error!</p>
        <span>Already have an account? <Link to='/login'>Login</Link></span>

      </form>

    </div>
      );
}
 
export default Register;