import "./App.css";
import BackUpUser from "./components/BackUpUser";
import ListUsers from "./components/ListUsers";
import { useUserList } from "./hooks/useUserList";

function App() {
  const { data } = useUserList();
  return (
    <div>
      <h1>Main Users</h1>
      <ul>
        {data?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <BackUpUser />
      <ListUsers />
    </div>
  );
}

export default App;
