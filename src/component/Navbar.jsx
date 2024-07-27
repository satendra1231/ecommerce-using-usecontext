import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartContext from '../context/CartContext'
import userContext from '../context/UserContext'



const Navbar = (props) => {
  let navigate=useNavigate()
  let ctx=useContext(CartContext)
  let ctx1=useContext(userContext)
  //console.log(ctx.setsearchItem)
 // console.log(ctx1.user)
 

  const  searchHandlechanger=(e)=>{
    let value=e.target.value 
   // console.log(value)
    ctx.setsearchItem(value.toLowerCase())
  }
  const handleLogout=()=>{
    localStorage.removeItem('userDetails')
    ctx1.setuser({login:false,email:""})
    navigate('/login')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid  ">
    <Link className="navbar-brand" to="/">Shoap</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent ">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {ctx1.user.login===true &&<li className="nav-item ms-3">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>}
      { ctx1.user.login===true && <li className="nav-item ms-3 ">
          <Link className="nav-link" to="/cart">cart <i class="bi bi-cart"></i> 
            <sup id="count" >{ctx.cartItem.length}</sup>
          </Link>
        </li>}
   
       
      </ul>
     {ctx1.user.login===true && <form className="d-flex search w-25" role="search">
        <input onChange={searchHandlechanger} className="form-control" type="search" placeholder="Please search product here" aria-label="Search" />
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>}

      <ul className="navbar-nav me-5 mb-2 mb-lg-0">
        { ctx1.user.login===false && <li className="nav-item btn btn-info ms-3">
          <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
        </li>}
        {   ctx1.user.login===true &&  <li className="nav-item btn btn-danger ms-3 ">
          <button onClick={handleLogout} className="nav-link active" >Logout  </button>        
        </li>}
   
       
      </ul>

     
     
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
