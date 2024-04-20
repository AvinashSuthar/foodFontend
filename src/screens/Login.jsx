import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';
import {Link, useNavigate} from 'react-router-dom';
function Login() {
  // const localurl = "http://localhost:5000/api";
  const localurl = "https://foodbackend-v7xg.onrender.com/api"; 

  const [isSaved, setisSaved] = useState(true);
  const [inputvalue, setInputValue] = useState({
    email: "",
    password: "",
  })
  const navigateLogin = useNavigate();

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputValue(() => {
      return {
        ...inputvalue,
        [name]: value
      }
    })
  }
  const sentUserData = async (e) => {

    e.preventDefault();
    const { email, password } = inputvalue;

    if (email === "") {
      toast.error("Invalid Email");

    } else if (!email.includes("@")) {
      toast.error("Invalid Email");

    } else if (password === "") {
      toast.error("Password is required");

    } else {
      setisSaved(false);

      const res = await fetch(`${localurl}/loginuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      });
      const data = await res.json();
      // console.log(data);

      if (data.status === 201) {
        toast.success("Welcome to ForFoody!");

        setInputValue({

          email: "",
          password: "",

        })
        setisSaved(true)
        localStorage.setItem("authToken" , data.authToken);
        console.log(localStorage.getItem("authToken"));
        navigateLogin('/');
      }
      else{
        toast.error("Invalid Credentials!")
        setisSaved(true)
      }
    }
  }
  return (
    <>
      <div style={{
        backgroundImage: `url("https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=2000&&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVhbHxlbnwwfHwwfHx8MA%3D%3D")`, backgroundRepeat: "no-repeat", height: "90vh", padding: "30px"
      }} className="   show active" >

        <div className='d-flex signform p-3  justify-content-center'  style={{marginTop:"100px"}}>
          <Form className=' mt-2'>

            <Form.Group className="mb-3  inputdata" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control className='bg-dark border-0 text-white' type="email" placeholder="Enter email" value={inputvalue.email} onChange={getvalue} name='email' />
            </Form.Group>
            <Form.Group className="mb-3  inputdata" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control className='bg-dark border-0 text-white' type="password" placeholder="Enter Password" value={inputvalue.password} onChange={getvalue} name='password' />
            </Form.Group>

            <div className="btn  justify-content-center">
              <Button variant="dark" className='m-2' type="submit" onClick={sentUserData}>
                Login
              </Button> <br />
              <span className='text-white'> 
              Don't have an Account </span>
        <Link className="text-decoration-none btn btn-dark" to="/createuser">Create New Account</Link>
            </div>
             
          </Form>
        </div>
        <div>
          {!isSaved && <div className="msg text-center name   " >Please Wait... <br /> Server is responding </div>} <br />
        </div>
        <ToastContainer />

      </div>
    </>
  )
}

export default Login