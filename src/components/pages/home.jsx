import React from 'react'
import AdsCard from '../shared/ads-card';
import{useState,useEffect} from "react"
import axios from 'axios';
// import Navbar from '../shared/navbar';
import {serverUrl} from '../shared/serverUrl';


export default function Home() {
    const [ads,setAds] = useState([])

  useEffect(()=>{

    const fetchData =async()=>{

      const result =await axios(`${serverUrl}olx/ads`);
       setAds(result.data)
       console.log(result.data);
    };
    fetchData()

  },[])
  return (
    <div>
        <section className='max-w-6xl mx-auto'>
        <h2 className='font-bold text-center mt-5 mb-3 text-xl'>Latest Ads in our system</h2>
        <div className='grid grid-cols-4 gap-4'>
          {
          ads.map(ad=><AdsCard key={ad.title}  data= {ad}/>)
          }
           
          </div>
      </section>
    </div>
  )
}
