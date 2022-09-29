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
    }, [localStorage.getItem('token')]);


if(jtoken){
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h2>MERN Stack</h2>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link to = "/" className='text-white mr-3 '>Home</Link>
              </li>
              <li className="nav-item ">
                <Link to = "/create" className='text-white mr-3 '>Create Ad</Link>
              </li>
              <li classNameName='nav-item ' onClick={logout}>Log out</li>
              <li className="nav-item ">
                <Link to = "/admin" className='text-white mr-3 '>Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}else{
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h2>MERN Stack</h2>
          </a>
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item ">
                <Link to = "/" className='text-white mr-3 '>Home</Link>
              </li>
              <li className="nav-item ">
                <Link to = "/register" className='text-white mr-3 '>Registration</Link>
              </li>
              <li className="nav-item ">
                <Link to = "/login" className='text-white mr-3 '>Log In</Link>
              </li>
            </ul>
          
        </div>
      </nav>
    </>
  )
}
}
