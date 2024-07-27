import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Navigate, Route,  Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Single from './pages/Single';
import Pagenot from './pages/Pagenot';
import Navbar from './component/Navbar';
//import { useState } from 'react';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Payment from './pages/Payment';
import Success from './pages/Success';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useContext } from 'react';
import userContext from './context/UserContext';


function App() {
 
   let rtx= useContext(userContext)
   console.log(rtx)
   console.log(rtx.user)
    let login=rtx.user.login
  return (
    <div className="App">
     <BrowserRouter>
      <div style={{marginBottom:"56px"}}><Navbar/></div>

     <Routes>
          {login===true && <Route path='/' element={<Home />}/>}
          {login===false && <Route path='/' element={<Navigate to={'/login'}/> }/>}
        { login===true &&  <Route path='/cart' element={<Cart />}/>}
        { login===false &&  <Route path='/cart' element={<Navigate to={'/login'}/> }/>}         
         {login===true && <Route path='/login' element={<Navigate to={'/'}/> }/>}
         {login===false && <Route path='/login' element={<Login />}/>} 
         <Route path='/register' element={<Signup />}/>           
         <Route path='/single' element={<Single/>}/>
         {login===true && <Route path='/payment' element={<Payment/>}/>}
         {login===false && <Route path='/payment' element={<Navigate to={'/login'}/> }/>}
          {login===true && <Route  path='/success' element={<Success/>}/>}
          {login===false && <Route  path='/success' element={<Navigate to={'/login'}/> }/>}
          <Route path='/*' element={<Pagenot/>}/>
     </Routes>
     <ToastContainer />
     </BrowserRouter>
    </div>
  );
}

export default App;
