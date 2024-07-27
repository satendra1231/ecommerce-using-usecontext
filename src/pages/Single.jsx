import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import CartContext from '../context/CartContext'

const Single = (props) => {
  
  
  let ctx=useContext(CartContext)
   //console.log(ctx.addtoCart)

  let view=useLocation()
  // console.log(view.state)
  // console.log(view.state.thumbnail)
  // console.log(view.state.reviews)
  
  let location=useLocation()


 function adding(){
  ctx.addtoCart(location.state)

 }

  
  return (
    <div className='  text-white p-4 single' >
      
     
      <div>
        
      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-md-center">
          <img src={view.state.thumbnail} alt="" />
        </div>
        
        <div className="col-md-6  ">
          <h2>Title : {view.state.title}</h2>
          <h4>Brand : {view.state.brand}</h4>
          <h5>Price : {view.state.price}</h5>
          <h5>Rating : {view.state.rating}</h5>
          <h6>Stock : {view.state.stock}</h6>
          <h4>Warranty : {view.state.warrantyInformation}</h4>
          <p>{view.state.description}</p>

          <button onClick={adding} className='btn btn-success'>Add to cart</button>
           
        </div>
      </div>
      </div>
      
   
      <div className='row mt-2 ps-5 d-flex gap-3'>
     
         {
           view.state.reviews.map((obj)=>{
               //console.log(obj)
               return  <div className="col-md-3 card w-40">
               <div className="card-body">
                 <h4 className="card-title">Name : {obj.reviewerName}</h4>
                 <h6 className="card-title">Rating : {obj.rating}</h6>
                 <h6 className="card-title">E-mail : {obj.reviewerEmail}</h6>
                 <p className="card-text">Comment : {obj.comment}</p>
                 
               </div>
             </div>
           })
         }
     
     
      </div>

     </div>
     
   
  )
}

export default Single
