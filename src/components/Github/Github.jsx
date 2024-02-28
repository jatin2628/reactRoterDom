import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData] = useState({});
    // useEffect(()=>{
    //     const githubData = async () => {
    //     const response = await fetch("https://api.github.com/users/jatin2628");
    //     const res = await response.json();
    //     console.log(res)
    //     setData(res)  
    //     }
    //     githubData();
    // },[])
    const data = useLoaderData()
  return (
    <>
    <div>Github Followers:{data.followers}</div>
    <img src={data.avatar_url} alt='github image'/>
    </>
  )
}

export default Github

export const githubData = async () => {
        const response = await fetch("https://api.github.com/users/jatin2628");
        const res = await response.json();
        return res;
        
    }
        