import React, { useContext, useEffect, useState } from 'react'
//import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';


const Home = (props) => {

  const [currentpage, setcurrentpage] = useState(1);

  let ctx=useContext(CartContext)
  //console.log(ctx)
  //console.log(ctx.searchItem)


  const [allitem , setallitem] = useState([]);
//console.log(allitem)
  let getdata=async()=>{
    let ans=await fetch('https://dummyjson.com/products?skip=0&limit=0');
    let data=await ans.json();
    //console.log(data);
    setallitem(data.products)
   // console.log(data.products)
}

let itemperpage=10
let lastIndex=currentpage*itemperpage
let firstIndex=lastIndex-itemperpage 

 let searchedItems;
 searchedItems=allitem.filter((ele)=>ele.category.toLowerCase().includes(ctx.searchItem))
//console.log(searchedItems)
if(!searchedItems){
  searchedItems = allitem
}


let slicedarr=searchedItems.slice(firstIndex,lastIndex)
//console.log(slicedarr)

let noofbtnrequired=Math.ceil(allitem.length/itemperpage)
//console.log(noofbtnrequired)

let btnArr=[]

for(let i=1; i<=noofbtnrequired;  i++){
  btnArr.push(i)
}

//let btnArr=[...Array(noofbtnrequired+1).key()]



useEffect(()=>{
  getdata()
},[])
  
  
  let ele=useContext(CartContext)
  //console.log(ele)

  const handleNext=()=>{
       if(currentpage < noofbtnrequired){
        setcurrentpage(currentpage+1)
       }
  }

  const handlePrev=()=>{
    if(currentpage>1){
      setcurrentpage(currentpage-1)
    }
    
  }

  return (
    
   <div className='pt-2'>
     <div className='row d-flex gap-2 d-flex justify-content-center m-0 p-0'>
     
     {
     slicedarr.map((ele)=>{
         return    <div key={ele.id} className="card p-2" style={{width: '18rem'}}>
      <img src={ele.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
       <h5 className="card-title text-truncate">{ele.title}</h5>
      <h5 className="card-title">price : $ {ele.price}</h5>
      </div>
     <div className='d-flex gap-2 m-auto p-1'>
 <Link state={ele} to="/single" className="btn btn-warning">View Product</Link> 
<button onClick={()=>ctx.addtoCart(ele)}  className="btn btn-success">Add to cart</button>
 </div>
</div>

     })
     }
    
     </div>

  <div className='text-truncate'>
  <nav aria-label="Page navigation example ">
  <ul className="pagination mt-2 flex-wrap ">
    <li onClick={handlePrev} className="page-item"><Link className="page-link" to="#">Previous</Link></li>

   {
    btnArr.map((ele)=>{
     return  <li key={ele.id} onClick={()=>setcurrentpage(ele)} className={currentpage===ele?"page-item active" : "page-item"}><Link className="page-link" to="#">{ele}</Link></li>
    })
   }
    <li onClick={handleNext} className="page-item"><Link className="page-link" to="#">Next</Link></li>
  </ul>
</nav>
  </div>


   </div>
  )
}

export default Home
