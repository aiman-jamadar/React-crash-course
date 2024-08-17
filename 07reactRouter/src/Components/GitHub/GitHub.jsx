import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function GitHub() {
   const data =useLoaderData()

  //
   // const[data,setData]=useState([])
   // useEffect(()=>{
     //  fetch('https://api.github.com/users/aiman-jamadar') 
       
       //.then(Response=>Response.json())
       //.then(data=>{
        //console.log(data)
        //setData(data)
       //})

    //},[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white
    p-4 text-3xl'>GitHub followers:{data.followers}
    <img src={data.avatar_url} alt='Git picture'/>
      
    </div>
  )
}
export const githubInfo=async()=>
    {
      const response=await fetch('https://api.github.com/users/aiman-jamadar') 
        return response.json()
    }