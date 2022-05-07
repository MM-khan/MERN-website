import React from 'react'
import { Formik, Form, Field } from "formik";
import { post } from "axios"
import { useNavigate } from 'react-router-dom';
import {serverUrl} from './serverUrl';

export default function Login() {
  const navigate = useNavigate()
  return (
    <div>
      <Formik
            initialValues={{
            firstName: '',
            password: ''
            }}
            onSubmit={async (values) => {
              await post(`${serverUrl}olx/login`,values)

                  .then(function(response){
                      console.log(response);
                      alert(response.data.message)
                      if(response.data.token){
                        localStorage.setItem('token',response.data.token);
                        navigate('/admin');
                    }
                  })
                  .catch(function(error){
                      console.log(error);
                  })
              }}
        >
          <div className='max-w-6xl mx-auto mt-4 mb-12 p-4'>
            <Form action='#' className='bg-cyan-600'>
              <h1 className='font-bold text-[#f8fafc] pt-10 ml-11 text-3xl block'>Log In Form</h1>
                <button className='rounded-3xl p-2 w-32 ml-28  mt-7 text-cyan-600 bg-[#f8fafc]'> 
                <a href="/register">Registration</a>
                </button>
                <div className="max-w-sm ml-96 mr-7 p-4 rounded bg-[#f8fafc] shadow-lg shadow-black-500/50">
              <div className='grid grid-cols-1'>
                
                <div className='ml-7'>
                  <label htmlFor="Email" className='text-cyan-600'>Email :</label>
                  <Field className="block rounded w-80 p-2" 
                  type="email" name="email" 
                  placeholder="enter your first name..." 
                  require = "require"
                  />
                </div>
                
                <div className='ml-7'>
                  <label htmlFor="password" className='text-cyan-600'>Password :</label>
                  <Field className="block rounded w-80 p-2"
                    type="password"
                    name="password"
                    placeholder="enter your password"
                    require="require"
                  />
                </div>
                
                <div className="ml-10">  
              <button className='bg-cyan-600 w-28 text-white rounded-3xl my-4 p-2 mt-10'
               type="submit">Log In</button>
                </div>

               </div>
               
               </div>
            <br /><br />
            </Form>
          </div>
      </Formik>
    </div>
  )
}
