import PropTypes from "prop-types";
import User from "./User";

const Users = ({ info }) => {
  return (
    <div className="absolute z-10 left-0 w-96 border border-gray-300 border-solid bg-white py-3 rounded-md flex flex-col gap-y-1">
      {info.map((user) => (
        <User key={user} info={user} />
      ))}
    </div>
  );
};

Users.propTypes = {
  info: PropTypes.array,
};

export default Users;
