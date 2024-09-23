import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Shreekant-Chavan')
    // //   fetch('https://api.github.com/users/hiteshchoudhary')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='bg-gray-600 text-center text-white p-4 text-3xl m-4'>
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Git Profile" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response =  await fetch('https://api.github.com/users/Shreekant-Chavan')
    return response.json()
}