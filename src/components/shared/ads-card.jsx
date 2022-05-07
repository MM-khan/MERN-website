import React from 'react'

export default function AdsCard(props) {
  if(props.data.image && props.data.image !== null){

    return (
      <>
        <div>
          <div className='h-40 bg-gray-400 rounded-xl object-cover items-center overflow-hidden' >
            <img src={props.data.image} alt="" 
            className='w-full h-full'/>
          </div>
          <br />
          <div className='text-cyan-600 font-bold'>{props.data.title}</div>
          <div>{props.data.price}</div>
          <div>{props.data.location}</div>
          <div>{props.data.discreption}</div>
          
        </div>
      </>
    )
  }else{
    return(
      <div>
        <div className='h-40 bg-gray-400 rounded'>
          image not found
        </div>
        <img src={props.data.image} alt="" />
        <div className='text-cyan-600 font-bold'>{props.data.title}</div>
        <div>{props.data.price}</div>
        <div>{props.data.location}</div>
        <div>{props.data.discreption}</div>
    </div>
    )
  }
}
