import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"

export default function Navbar() {

  const navigate = useNavigate();
    const [jtoken, setJtoken] = useState('');
    const logout = ()=>{
        localStorage.removeItem('token');
        setJtoken(null)
        console.log("Log out Successfully")
        navigate('/')
    }
    useEffect(() => {
        if(localStorage.getItem('token')){
        let jwtoken = localStorage.getItem('token')
        setJtoken(jwtoken)
        }
    }, [localStorage.getItem('token')])


if(jtoken){
  return (
    <div className='bg-cyan-600 py-4 text-white '>
        <header className='max-w-6xl mx-auto flex justify-between'>
            <h2>MERN Stack</h2>
        <ul className='flex space-x-4'>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/create">Create Ad</Link></li>
            <li onClick={logout}>Log out</li>
            <li><Link to = "/admin">Dashboard</Link></li>
        </ul>
        </header>
    </div>
  )
}else{
  return (
    <div className='bg-cyan-600 py-4 text-white '>
        <header className='max-w-6xl mx-auto flex justify-between'>
            <h2>Hello MERN stack</h2>
        <ul className='flex space-x-4'>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/register">Registration</Link></li>
            <li><Link to = "/login">Log In</Link></li>
            
        </ul>
        </header>
    </div>
  )
}
}
