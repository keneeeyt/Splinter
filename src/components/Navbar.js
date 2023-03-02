import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserContext from '../UserContext'
import axios from 'axios';



function Navbar() {
      
    const {user} = useContext(UserContext);








       
      return (
    <div className='xl:container xl:mx-auto'>
        <nav className='flex justify-between items-center'>
            <div>
                Splinter
            </div>
            <div className=''>
               <ul className='flex space-x-6'>

                {
                    user  ? 
                    <Fragment>
                    <li><Link as = {Link} to = {`/profile`}>Profile</Link></li>
                    <li><Link to = '/logout'>Logout</Link></li>
                    </Fragment>
                    :
                    <Fragment>
                    <li><Link to = '/'>Register</Link></li>
                    <li><Link to = '/login'>Login</Link></li>
                    </Fragment>
                  
                }
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar