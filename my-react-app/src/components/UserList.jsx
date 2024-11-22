import React from "react";

const UserList = ({ users, onDelete }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-item">
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            className="user-avatar"
          />
          {user.first_name} {user.last_name}
          <button onClick={() => onDelete(user.id)} className="delete-button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
