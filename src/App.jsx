import { createContext, useState } from "react";
import AddUser from "./components/AddUser";

export const UserContext = createContext(null);

function App() {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const addUsers = (user) => {
    setSelectedUsers((previousValue) => [...previousValue, user]);
  };
  return (
    <UserContext.Provider value={{ selectedUsers, addUsers }}>
      <div className="w-full h-screen flex items-center justify-center">
        <AddUser />
      </div>
    </UserContext.Provider>
  );
}

export default App;
