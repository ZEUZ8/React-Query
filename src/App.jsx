import axios from "axios";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import "./App.css";
import BackUpUser from "./components/BackUpUser";
import ListUsers from "./components/ListUsers";

function App() {
  if (isError) console.log("ERROR");
  if (isLoading) <>Loading....</>;
  if (isSuccess) console.log(data, " users in console");

  return (
    <div>
      <button onClick={() => setStatus(true)}>Fetch User</button>
      <button onClick={() => mutate()}>Add User</button>
      <h1>List of Users</h1>
      <ul>
        {data?.map((user) => {
          return <li key={user?.id}>{user?.name}</li>;
        })}
      </ul>

      <BackUpUser />
      <ListUsers />
    </div>
  );
}

export default App;
