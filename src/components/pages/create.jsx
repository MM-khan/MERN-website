import React from 'react'
import { Formik, Form, Field } from "formik";
import { post } from "axios"
import {serverUrl} from '../shared/serverUrl';

export default function Create() {
  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          price: '',
          location: '',
          discreption: '',
          image: ''
        }}
        onSubmit={(values) => {
          // console.log(values);
          var formData = new FormData();
          formData.append("image", values.image);
          formData.append("values", JSON.stringify(values))
          post(`${serverUrl}olx/ads`, formData, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data',
              'X-TOKEN': "String"
            }
          })
            .then(function (response) {
              console.log(response);
              alert('saved successfully');
            })
            .catch(function (error) {
              console.log(error);
            })

        }}
      >
        {({ setFieldValue }) => (

          <div className='max-w-6xl mx-auto mt-4'>
            <Form className='bg-gray-200 '>
              <h1 className='font-bold text-cyan-600 mb-4 text-center py-4'>Create ad in our system</h1>
              <div className='grid grid-cols-2 gap-4'>

                <div>
                  <label htmlFor="firstName">Title</label>
                  <Field className="block rounded w-full p-2" id="title" name="title" placeholder="enter ad title" />
                </div>

                <div>
                  <label htmlFor="price">Price</label>
                  <Field className="block rounded w-full p-2" id="price" name="price" placeholder="enter price for the object" />
                </div>

                <div>
                  <label htmlFor="location">Location</label>
                  <Field className="block rounded w-full p-2"
                    id="location"
                    name="location"
                    placeholder="enter location of the object"
                  />
                </div>

                <div>
                  <label htmlFor="discreption">Discreption</label>
                  <Field className="block rounded w-full p-2"
                    id="discreption"
                    name="discreption"
                    placeholder="enter about object"
                  />
                </div>
                <div>
                  <label htmlFor="image">Images</label>
                  <input className="block rounded w-full p-2"
                    id="image"
                    name="image"
                    type='file'
                    placeholder="Choose file" onChange={
                      (event) => {
                        setFieldValue("image", event.currentTarget.files[0])
                      }}
                  />
                </div>
              </div>
              <button className='bg-cyan-600 text-white rounded p-2 my-4 ml-4'
               type="submit">Submit</button>
            </Form>
          </div>
        )}
      </Formik>

    </div>
  )
}
