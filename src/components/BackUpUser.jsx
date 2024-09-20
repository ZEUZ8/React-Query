import React from 'react'
import { useUserList } from '../hooks/useUserList';

const BackUpUser = () => {
    const {data} = useUserList();
  return (
    <div>
       <h1>Backup Users</h1>
      <ul>
        {data?.map((user)=>{
          return <li key={user?.id}>{user?.name}</li>
        })}
      </ul>
    </div>
  )
}

export default BackUpUser
