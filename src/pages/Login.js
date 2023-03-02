import React, {useState,useEffect, useContext} from 'react';
import toast, {Toaster} from 'react-hot-toast';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import UserContext from '../UserContext';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate();
    const {user,setUser} = useContext(UserContext);

    const login = (event) => {
        event.preventDefault();

         // Process a fecth request to corresponding backend API
            //syntax: fetch('url', {options})
        fetch('http://localhost:3003/user/login', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        })
        .then(result => result.json())
        .then(data => {
            if(data === false) {
                toast.error('Login Failed! please try again later!')
            } else {
                localStorage.setItem('token', data.auth)
                retrieveUserDetails(localStorage.getItem('token'))
                toast.success('Login Successfully!')


                navigate(`/home/${data._id}`)
            }
        })

    }

    const retrieveUserDetails = (token) => {
        // the token sent as part of the request's hearder information
        
        fetch("http://localhost:3003/user/", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(result => result.json())
        .then(data => {
            console.log(data)

           setUser({
            id: data._id,
        
           })
        })
    }


  return (
    
    <div className='container mx-auto mt-10'>
    <Toaster />
    <div className='w-[60%] mx-auto p-2'>
        <form className='space-y-5 flex flex-col justify-center items-center border border-black p-3' onSubmit={event => login(event)}>
            <input type='email' placeholder='Email' className='border border-black' value={email} onChange={event => setEmail(event.target.value)} />
            <input type='password' placeholder='Password' className='border border-black' value={password} onChange={event => setPassword(event.target.value)}/>
          <button className='border border-black px-3'>Login</button>
        </form>
        </div>
    </div>
  )
}

export default Login


