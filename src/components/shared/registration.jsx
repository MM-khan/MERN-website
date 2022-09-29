import React from 'react'
import { Formik, Form, Field } from "formik";
import { post } from "axios";
import {serverUrl} from './serverUrl';

export default function Registration() {
  return (
    <div>
      <Formik
        initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confrimpassword: ''
        }}
        onSubmit={async (values) => {
          await post(`${serverUrl}olx/registers`,values)
          .then(function(response){
            console.log(response);
            alert(response.data.message)
          })
          .catch(function(error){
            console.log(error);
          })
          }}
        >
          <div id="main-box">
            <Form action='#' className='bg-cyan-600'>
              <h1 id='FORMH'>Registeration Form</h1>
                <div id='input-box'>
                  <div>
                    <label htmlFor="firstName" className='text-cyan-600'>First Name :</label>
                    <Field className="inputs" 
                    type="name" name="firstname" 
                    placeholder="first name..." 
                    require= 'require'
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className='text-cyan-600'>Last Name :</label>
                    <Field className="inputs"
                    type="name" name="lastname" 
                    placeholder="last name..." 
                    require= 'require'
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className='text-cyan-600'>Email :</label>
                    <Field className="inputs" 
                    type="email" name="email" 
                    placeholder="email adress" 
                    require= 'require'
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className='text-cyan-600'>Password :</label>
                    <Field className="inputs"
                      type="password"
                      name="password"
                      placeholder="password"
                      require= 'require'
                    />
                  </div>
                  <div>
                    <label htmlFor="confpassword" className='text-cyan-600'>Confirm Password :</label>
                    <Field className="inputs"
                      type="password"
                      name="confrimpassword"
                      placeholder="confirm password"
                      require= 'require'
                    />
                  </div>
                  <div>  
                    <button id='Fbtn'
                    type="submit">Register</button>
                  </div>               
               </div><br /><br />
            </Form>
          </div>
      </Formik>
    </div>
  )
}
