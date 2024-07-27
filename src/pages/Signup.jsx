import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  let Nevigate=useNavigate()
  let arr=JSON.parse(localStorage.getItem('register')) || []
  console.log(arr)

  const [userRestration, setuserRestration] = useState({
    Name: "",
    email: "",
    Password:"",
   
  });

    
  const handlesignchanger = (e) =>{
    let value=e.target.value
    //console.log(value)
    setuserRestration({...userRestration,[e.target.name]:e.target.value})

  }
  function handleSubmit(e){
    e.preventDefault();
   //console.log(userRestration)
  
  let checkExists=arr.find((ele)=>ele.email===userRestration.email)
   if(!checkExists){
    arr.push(userRestration)
    localStorage.setItem('register',JSON.stringify(arr))
    Nevigate('/login')
   }
   else{
    alert("already register")
   }
     
   
  }
  return (
    <div className='authPage' >
      <form className='w-50 form1 m-auto p-4 rounded-5'>
     <h3 className='text-center'>Signup Form</h3>
     <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input onChange={handlesignchanger} name='name' type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" />
    </div>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={handlesignchanger} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={handlesignchanger} name='Password' type="password" className="form-control" id="exampleInputPassword1" />
  </div>
 
  <button type="submit"  onClick={handleSubmit} className="btn btn-primary">Submit</button>
  <p>already have an account? <Link to={'/login'}>Login</Link></p>
</form>

    </div>
  )
}

export default Signup
