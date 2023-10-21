import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data =useLoaderData()


    // const [data,setData]=useState([])

    // useEffect(()=>{
    //     fetch('http://api.github.com/users/sonu2614')
    //     .then(responce => responce.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })

    // },[])


  return (
    <div className='text-center m-4 bg-gray-600
    text-white p-4 text-3xl'>Github followers : {data.following}
    <img src={data.avatar_url} alt="Git picture" width={300} /></div>
  )
}

export default Github;

export const githubInfoLoader =async ()=>{
    const responce =await fetch('http://api.github.com/users/sonu2614')
    return responce.json()
}