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
            gender: '',
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
          <div className='max-w-6xl mx-auto mt-4 mb-12 p-4 '>
            <Form action='#' className='bg-cyan-600'>

              <h1 className='font-bold text-[#f8fafc] pt-10 ml-11 text-3xl block'>Registeration Form</h1>
                <button className='rounded-3xl p-2 w-32 ml-28  mt-7 text-cyan-600 bg-[#f8fafc]'> <a href="/login">Log In</a>
                </button>

                <div className="max-w-4xl ml-72 mr-7 p-4 rounded-l-full bg-[#f8fafc] shadow-lg shadow-black-500/50">
                  <div className='grid grid-cols-2 gap-4'>

                <div className='ml-20'>
                  <label htmlFor="firstName" className='text-cyan-600'>First Name :</label>
                  <Field className="block rounded w-72 p-2" 
                  type="name" name="firstname" 
                  placeholder="enter your first name..." 
                  require= 'require'
                  />
                </div>
                <div className='ml-20'>
                  <label htmlFor="lastName" className='text-cyan-600'>Last Name :</label>
                  <Field className="block rounded w-72 p-2"
                   type="name" name="lastname" 
                   placeholder="enter your last name..." 
                   require= 'require'
                   />
                </div>

                <div className='ml-20'>
                  <label htmlFor="email" className='text-cyan-600'>Email :</label>
                  <Field className="block rounded w-72 p-2" 
                  type="email" name="email" 
                  placeholder="enter your email adress" 
                  require= 'require'
                  />
                </div>
                <div className='ml-20'>
                  <label htmlFor="gender" className='text-cyan-600'>Gender :</label>
                  <br />
                  <div role="group" aria-labelledby="my-radio-group">
                  <label className='text-gray-400'>
                    <Field type="radio" name="picked" value="male" />
                    Male
                  </label>
                  <label className='text-gray-400 ml-10'>
                    <Field type="radio" name="picked" value="female" />
                    Female
                  </label>
                  </div>
                </div>

                <div className='ml-20'>
                  <label htmlFor="password" className='text-cyan-600'>Password :</label>
                  <Field className="block rounded w-72 p-2"
                    type="password"
                    name="password"
                    placeholder="enter your password"
                    require= 'require'
                  />
                </div>
                <div className='ml-20'>
                  <label htmlFor="confpassword" className='text-cyan-600'>Confirm Password :</label>
                  <Field className="block rounded w-72 p-2"
                    type="password"
                    name="confrimpassword"
                    placeholder="enter your confirm password"
                    require= 'require'
                  />
                </div>
                <div className="ml-80">  
              <button className='bg-cyan-600 w-40 text-white rounded-3xl my-4 p-2'
               type="submit">Register</button>
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
