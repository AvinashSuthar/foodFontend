import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';
import {  useNavigate} from 'react-router-dom';
function Signup() {
  const navigateLogin = useNavigate();
  // const localurl = "http://localhost:5000/api"; 
  const localurl = "https://foodbackend-v7xg.onrender.com/api"; 
  const [isSaved , setisSaved] = useState(true);
  const [inputvalue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  })


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
    const { name,  email, password , location } = inputvalue;

    if (name === "") {
        toast.error("Name is required");
    } else if (email === "") {
      toast.error("Invalid Email");

    }else if (!email.includes("@")) {
      toast.error("Invalid Email");

    } else if (password === "") {
      toast.error("Password is required");

    }else if (location === "") {
      toast.error("Location is required");

    }  else {
      setisSaved(false);

      const res = await fetch( `${localurl}/createuser` , {
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({
          name,email, password, location
        })
      });
      const data = await res.json();
      // console.log(data);
     
      if(data.status === 201){
        toast.success("Welcome to ForFoody!");
        setInputValue({
          name: "",
          email: "",
          password: "",
          location: "",
        })
        navigateLogin('/');
        setisSaved(true)
      }
      else{
        toast.error("Email Already exists!");
        setInputValue({
          name: "",
          email: "",
          password: "",
          location: "",
        })
        setisSaved(true);
      }
    }
  }
  return (
    <>
      {/* <div style={{ "display" : "inline",
      backgroundImage: `url("https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=1024x1024&w=is&k=20&c=X8Fq8SVoZRTEs-Rwt5iAaX3dbZehWmFssd857ez66D8=")` ,backgroundRepeat:"no-repeat", objectFit:"cover  ", width : "100%" , height : "100vh"
    }}></div> */}
    <div style={{ 
      backgroundImage: `url("https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=2000&&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVhbHxlbnwwfHwwfHx8MA%3D%3D")` ,backgroundRepeat:"no-repeat", height:"90vh", padding:"30px"  }} className="   show active" >
      
      <div className='d-flex signform p-3 justify-content-center ' style={{marginTop:"70px"}}>
      <Form className=' mt-2'>
        <Form.Group className="  mb-3  inputdata" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control  className='bg-dark border-0 text-white' type="text" placeholder="Enter Name" value={inputvalue.name} onChange={getvalue} name='name' />
        </Form.Group>
        <Form.Group className="mb-3  inputdata" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control className='bg-dark border-0 text-white' type="email" placeholder="Enter email" value={inputvalue.email} onChange={getvalue} name='email' />
        </Form.Group>
        <Form.Group className="mb-3  inputdata" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control className='bg-dark border-0 text-white' type="password" placeholder="Enter Password" value={inputvalue.password} onChange={getvalue} name='password' />
        </Form.Group>
        <Form.Group className="mb-3 inputdata" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Location</Form.Label>
          <Form.Control className='bg-dark border-0 text-white' type="text" placeholder="Enter Location"  value={inputvalue.location} onChange={getvalue} name='location' />
        </Form.Group>
        <div className="btn d-flex justify-content-center">
          <Button variant="dark" className='' type="submit" onClick={sentUserData}>
            Sign Up
          </Button> 
          {/* <br /> */}
          {/* <span className='text-white'> 
              Already have an Account </span> 
        <Link className="text-decoration-none btn btn-dark" to="/createuser">Login</Link> */}
        </div>
        
        
      </Form>
      </div>
      <div>
      {!isSaved && <div className="msg text-center name   " >Please Wait... <br /> Server is responding </div> } <br />
      </div>
      <ToastContainer />
    </div>
  </>
  )
}

export default Signup