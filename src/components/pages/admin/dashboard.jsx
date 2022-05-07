import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {serverUrl} from '../../shared/serverUrl';


export default function Dashboard() {
     const[count,setCount] = useState([0])
    const [ads,setAds] = useState([])

  useEffect(()=>{

    const fetchData =async()=>{

      const result =await axios(`${serverUrl}olx/ads`);
       setAds(result.data)
       setCount(result.data.length)
       console.log(result.data.length);
    };
    fetchData()

  },[])
  return (
    <div className="bg-gray-200">
        <section className='container mx-auto'>
            <h2 className='text-bold text-2xl text-center mt-15'>Admin Dashboard</h2>
            <div className="grid grid-cols-4 grid-gap-4">
                <div className='bg-white text-center py-5 my-5'>
                    <h4>Total Ad</h4>
                    <p>{count}</p>
                </div>
            </div>
            <table className='max-w-4xl mx-auto w-full text-center'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        ads.map(
                           (ad,index) =>(

                                <tr>
                                    <td>{index+1}</td>
                                    <td>{ad.title}</td>
                                    <td>{ad.price}</td>
                                    <td className='space-x-2'>
                                        <button className="bg-green-400 rounded text-white p-2">View</button>
                                        <button className="bg-blue-400 rounded text-white p-2">Edit</button>
                                        <button className="bg-red-400 rounded text-white p-2">Delete</button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </section>

    </div>
  )
}
