import React from 'react'
import { Navigate} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from '../UserContext';

function Logout() {

    // localStorage.clear();
    const { setUser, unSetUser} = useContext(UserContext);
    useEffect(()=> {
      unSetUser()
      setUser(null)
    }, [])
  return (
     <Navigate to = '/' />
  )
}

export default Logout
