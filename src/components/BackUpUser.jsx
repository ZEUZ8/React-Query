import React from 'react'
import { useQueryClient } from 'react-query'

const BackUpUser = () => {
    const query = useQueryClient();
    const users = query.getQueryData(["users"])
    console.log(users,' users in the component')
  return (
    <div>
       <h1>List of Users</h1>
      <ul>
        {users?.map((user)=>{
          return <li key={user?.id}>{user?.name}</li>
        })}
      </ul>
    </div>
  )
}

export default BackUpUser
