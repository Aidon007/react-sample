import React from "react";
import PropTypes from "prop-types";

export default function TableRow({ user, setSelectedUser, selectedUser }) {
  return (
    <tr
      style={{
        backgroundColor:
          user.idUser === selectedUser.idUser ? "yellow" : "white",
      }}
      onClick={() => setSelectedUser(user)}
    >
      <td>{user.idUser}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
    </tr>
  );
}

TableRow.propTypes = {
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.number.isRequired,
};
