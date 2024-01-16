import { useContext, useEffect, useState } from "react";
import { names } from "../utilities";
import User from "./User";
import { UserContext } from "../App";
import Users from "./Users";

const AddUser = () => {
  const [val, setVal] = useState("");
  const [users, setUsers] = useState([]);
  const { selectedUsers } = useContext(UserContext);

  useEffect(() => {
    helper();
  }, [selectedUsers]);

  const helper = () => {
    if (selectedUsers.length > 0) {
      const newNames = names
        .filter((item) => {
          let isTrue;
          isTrue = selectedUsers.includes(item);
          if (isTrue) return false;
          return true;
        })
        .filter((item) => item.includes(val))
        .slice(0, 8);
      console.log(newNames);
      setUsers(newNames);
    } else {
      const newNames = names.filter((item) => item.includes(val)).slice(0, 8);
      setUsers(newNames);
    }
  };

  const handleOnChange = (e) => {
    setVal(e.target.value);
    helper();
  };

  return (
    <div className="bg-violet-200 rounded-md relative w-3/4 border-b border-gray-400 border-solid h-2/3 px-4 py-2">
      <div className="text-lg flex items-center border-b-2 py-1 w-full  border-blue-600 border-solid">
        {selectedUsers.length > 0 && (
          <div className="flex items-center gap-x-1 mr-2">
            {selectedUsers.map((user) => (
              <User key={user} selected={true} info={user} />
            ))}
          </div>
        )}
        <div className="relative ">
          <input
            type="text"
            className="bg-transparent outline-none border-none"
            value={val}
            onChange={handleOnChange}
          />
          {users.length > 0 && <Users info={users} />}
        </div>
      </div>

      <div className="flex justify-between pr-6 py-2 text-xl w-full absolute bottom-0 items-center">
        <p>Madan Sharma</p>
        <p>madan.sharma281572@gmail.com</p>
      </div>
    </div>
  );
};

export default AddUser;
