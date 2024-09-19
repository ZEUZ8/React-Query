import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import "./App.css";
import BackUpUser from "./components/BackUpUser";

function App() {
  const [status,setStatus] = useState(false)
  const { data, error, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios("http://localhost:3009/users");
      return response.data;
    },
    enabled: true,
  });

  if (isLoading)(<>Loading....</>)
  if (isSuccess) console.log(data, " users in console")

  return (
    <div>
      <button onClick={()=>setStatus(true)}>Fetch User</button>
      <h1>List of Users</h1>
      <ul>
        {data?.map((user)=>{
          return <li key={user?.id}>{user?.name}</li>
        })}
      </ul>

      <BackUpUser/>
    </div>
  );
}

export default App;
