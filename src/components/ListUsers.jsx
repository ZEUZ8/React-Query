import React from 'react'
import { useUserList, useUserLIstMutate } from '../hooks/useUserList';

const ListUsers = () => {
  const { data, isLoading, isError, isSuccess } = useUserList();

  const { mutate } = useUserLIstMutate();

  if (isError) console.log("ERROR");
  if (isLoading) <>Loading....</>;
  if (isSuccess) console.log(data, " users in console");

  return (
    <div>
      <button onClick={() => mutate()}>Add User</button>
      <h1>List of Users</h1>
      <ul>
        {data?.map((user) => {
          return <li key={user?.id}>{user?.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default ListUsers
