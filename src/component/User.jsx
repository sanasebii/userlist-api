import React, { useState } from 'react'
import axios from 'axios';
function user() {
    const [data,setData]=useState([])
    const fetchUser=async()=>{
      const response=await axios.get('https://jsonplaceholder.typicode.com/users')
      setData(response.data);
    //   console.log(data);
    }
  return (
    <div>user
        <div>
        <button onClick={fetchUser}>get user</button>
        {data.map(user=>(
            <div key={user.id}>
                
                {user.name}
                <p style={{color:"red"}}>{user.email}</p>
                </div>
            
        ))}
        </div>
    </div>
  )
}

export default user