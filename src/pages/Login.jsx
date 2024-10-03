import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userContext from '../context/UserContext'
import { toast } from 'react-toastify';

const Login = () => {
  let Nevigate=useNavigate()
  let ctx=useContext(userContext)
  let arr=JSON.parse(localStorage.getItem('register')) || []
  //console.log(arr)

  const [login, setlogin] = useState({
    email:"",
    Password:""

  });

  let handlesignchanger=(e)=>{
    let value=e.target.value
   // console.log(value)
    setlogin({...login,[e.target.name]:e.target.value})
  }
  let submitBtn=(e)=>{
    e.preventDefault()
    console.log(login)

    let checkExists=arr.find((ele)=>ele.email===login.email)
    //console.log(checkExists)
   if(checkExists){
    if(checkExists.Password===login.Password){
    //  console.log("login successful")
      toast.success("login Successful",{position:"top-center"})
      
      localStorage.setItem('userDetails', JSON.stringify({login:true, email:checkExists.email}))
      ctx.setuser({login:true,email:checkExists.email})
      Nevigate('/')     
    }
    else{
      //console.log("password not match")
      toast.error("wrong Passwor",{position:'top-center'})
    }

   }
   else{ 
   // console.log("user not register")
    toast.error("user Not found please sign up",{position:"top-center"})
   }
  }
  return (
    <div className='authPage'>
              <form className='w-50 form1 m-auto p-4 rounded-5'>
                <h3>Login Form</h3>
     
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={handlesignchanger} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={handlesignchanger} name='Password' type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  

  <button onClick={submitBtn} type="submit" className="btn btn-primary">Submit</button>
  <p>Don't have an account? <Link to={'/register'}>Signup</Link></p>
</form>
      
    </div>
  )
}

export default Login
