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
          <div id='main-box'>
            <Form action='#' className='bg-cyan-600'>
              <h1 id='FORMH'>Log In Form</h1>
              <div id='white-box'>
                <div className='ml-7'>
                  <label htmlFor="Email" className='text-cyan-600'>Email :</label>
                  <Field className="inputs" 
                  type="email" name="email" 
                  placeholder="enter your first name..." 
                  require = "require"
                  />
                </div>
                <div className='ml-7'>
                  <label htmlFor="password" className='text-cyan-600'>Password :</label>
                  <Field className="inputs"
                    type="password"
                    name="password"
                    placeholder="enter your password"
                    require="require"
                  />
                </div>
                <div>  
                  <button id='Fbtn'
                  type="submit">Log In</button>
               </div>
               </div><br /><br />
            </Form>
          </div>
      </Formik>
    </div>
  )
}
