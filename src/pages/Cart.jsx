import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'
//import { Link } from 'react-router-dom'

const Cart = (props) => {
   
   let ctx=useContext(CartContext)
   //console.log(ctx.cartItem)
   
   let sum=0
  //  ctx.cartItem.forEach((ele)=>{
  //   sum=sum+ele.price
  //  })
   for(let value of ctx.cartItem){
    sum=sum+value.price
   }
  

 
  return (
    <div className='pt-2 '>
    
     
      <table className="table align-middle text-center">
  <thead>
    <tr>
      <th scope='col'>SN</th>
      <th scope='col' >Product</th>
      <th scope='col'>Title</th>
      <th scope='col'>Quantity</th>
      <th scope='col'>Price</th>
      <th scope='col'></th>
    </tr>
  </thead>
  <tbody>
  
{
  ctx.cartItem.map((ele,index)=>{
    return    <tr key={ele.id}>
        <th scope='row'>{index+1}</th>
        <td   ><img style={{height:"150px", width:"150px"}} src={ele.thumbnail} alt="" /></td>
        <td >{ele.title}</td>
        <td >
          <button onClick={()=>ctx.updateDecrement(ele,index)}  className='btn btn-info'>-</button>
          <span>{ ele.quantity }</span>
          <button onClick={()=>ctx.updateIncrement(ele,index)} className='btn btn-info'>+</button>
        </td>
        <td > $ {Math.ceil(ele.price)}</td>
        <td ><button onClick={()=>ctx.removeCart(ele,index)} className='btn  btn-danger'>Delete</button></td>
      </tr>
  
  })
}
</tbody>
</table>


<span className='d-flex justify-content-center text-white '><h1>Total = $ {Math.ceil(sum)} </h1></span>
<button style={{fontSize:"25px"}} className='btn btn-danger d-flex m-auto mt-3 mb-3 p-2 '><Link style={{textDecoration:"none", color:"black"}} to="/payment">Please Order Confirm</Link></button>


    </div>
  )
}

export default Cart
