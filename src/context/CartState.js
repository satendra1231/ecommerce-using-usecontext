import React, {useState } from 'react'
import CartContext from './CartContext';
import { toast } from 'react-toastify';

const CartState = (props) => {
    
  
    const [cartItem, setcartItem] = useState([]);

    const [searchItem, setsearchItem] = useState("");
    
    const addtoCart = (ans) =>{
      //ans.quantity=1
      let updatedobj={
        ...ans,
        quantity:1
      }
      let existingItem=cartItem.find((ele)=>ele.id===updatedobj.id)
      
      if(!existingItem){
      setcartItem([...cartItem,updatedobj])
      toast.success("Item added successfully" , {position:'top-center', autoClose:200})
      
      }
      else{
        toast.warning("Item is already added",{position:"top-center", autoClose:200})
      }
      
    }
   
    const updateIncrement = (ans,index) =>{
      // console.log("runing")
      let updatedobj={
        ...ans,
        quantity:ans.quantity+1,
        price:ans.price+(ans.price/ans.quantity)
      }
      let updatedArr=[...cartItem]
      updatedArr[index]=updatedobj
      setcartItem(updatedArr)
       
    }
    const updateDecrement = (ans,index) =>{
       //console.log("decrement")
       let updatedobj={
        ...ans,
        quantity:ans.quantity>1 ? ans.quantity-1 : ans.quantity,
        price:ans.quantity>1 ? ans.price-(ans.price/ans.quantity) : ans.price
       }
       let updatedArr=[...cartItem]
       updatedArr[index]=updatedobj
       setcartItem(updatedArr)
    }

    const removeCart = (tree,index) =>{
       // console.log(tree,index)
       let copyArr=[...cartItem]
       copyArr.splice(index,1)
       setcartItem(copyArr)
    }

    
    
  return (
   <CartContext.Provider value={{searchItem,setsearchItem,addtoCart,removeCart,updateIncrement,updateDecrement,cartItem}}>
        {props.children}
   </CartContext.Provider>
  )
}

export default CartState
