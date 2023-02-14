import axios from "axios";
import React, { useContext, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
// import { AuthContext } from "../context/authContext";

const Login = () => {

  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  });

  const navigate = useNavigate()

  //what does this do?
  // const {currentUser} = useContext(AuthContext);
  // console.log(currentUser)


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

  const handleLogin = async (event) => { //handle submit
    event.preventDefault();
    console.log('INSIDE SIGNUP')
    try{
      await axios.post('http://localhost:3001/api/login', inputs);
      navigate('/')
        // console.log(response)

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
          <h1>Login</h1>
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
              type="password" 
              placeholder="password" 
              name="password" 
            />
            <button onClick={handleLogin}>Login</button>
            <p>There was an error!</p>
            <span>Dont have an account? <Link to='/register'>Register</Link></span>

          </form>

        </div>
      );
}
 
export default Login;