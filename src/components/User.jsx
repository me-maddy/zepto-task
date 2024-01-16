import PropTypes from "prop-types";
import { useContext } from "react";
import { UserContext } from "../App";

const User = ({ selected, info }) => {
  const { addUsers } = useContext(UserContext);
  return (
    <div
      className={`flex px-4  items-center   ${
        selected
          ? "text-base p-1 bg-violet-300 rounded-lg"
          : "hover:bg-gray-300 hover:rounded-lg transition-all duration-200 ease-in-out cursor-pointer"
      }`}
      onClick={() => {
        if (selected) return;
        addUsers(info);
      }}
    >
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/free-user-1493-459372.png"
        alt="User"
        className={` ${selected ? "h-6 mr-0" : "h-8 mr-2"}`}
      />
      <span>{info}</span>
    </div>
  );
};

User.propTypes = {
  info: PropTypes.string,
  selected: PropTypes.bool,
};

export default User;
