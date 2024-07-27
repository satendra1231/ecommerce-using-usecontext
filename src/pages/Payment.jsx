import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'

const Payment = (props) => {
    let ctx=useContext(CartContext)
   
   let sum=0
   for(let value of ctx.cartItem){
    sum=sum+value.price
   }
  return (
    <div  className='d-flex justify-content-center align-items-center pt-2'>
    <form action className='pay d-flex flex-column gap-2 p-5 ' style={{fontSize:"25px", width:"700px"}}>
<div>
  <h1>Please Pay Payment</h1>
  <h6>Please fill your card detail</h6>
  <h5>Credit / Debit / ATM Card</h5>
</div>
<label htmlFor>Card Number</label>
<input type="number" name id placeholder="xxxx xxxx xxxx xxxx" />
<label htmlFor>Phone number</label>
<input type="number" name id placeholder="+91 0000 000 000" />
<label  htmlFor className='d-flex gap-4'>
  <div>
    <label htmlFor>Validity</label> <br />
    <input type="number" name id placeholder="MM / YY" />
  </div>
  <div>
    <label htmlFor>CVV</label> <br />
    <input type="number" name id placeholder="CVV" />
  </div>
</label>
<div className="text-center">
  <Link to="pay.html" className="btn btn-danger mt-2 bbb"><Link style={{textDecoration:"none", fontSize:"25px", color:"black"}} to="/success">Pay Payment $ {Math.ceil(sum)}</Link><span id="total" /></Link>
</div>
</form>

      
    </div>
  )
}

export default Payment
