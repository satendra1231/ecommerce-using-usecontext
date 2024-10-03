import React, { useState } from 'react'
import userContext from './UserContext'
const UseStates = (props) => {
let details=JSON.parse(localStorage.getItem('userDetails'))
    const [user, setuser] = useState({
        login:details? details.login : false,
        email:details? details.email : "",
    });
    console.log(user)

  return (
    <userContext.Provider value={{user,setuser}}>
      {props.children}
    </userContext.Provider>
  )
}

export default UseStates
