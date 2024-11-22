import React, { useState } from "react";
import FetchButton from "./FetchButton";
import FilterBox from "./FilterBox";
import UserList from "./UserList";
import { fetchUsersFromApi, deleteUserFromApi } from "./ApiMethods";
import LoadingSpinner from "./Loading/LoadingSpinner";

const Container = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true); 
    try {
      const data = await fetchUsersFromApi();
      setUsers(data);
      setFilteredUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false); 
    }
  };

  const handleDelete = async (userId) => {
    try {
      await deleteUserFromApi(userId);
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleFilterChange = (search) => {
    setFilter(search);
    setFilteredUsers(
      users.filter(
        (user) =>
          user.first_name.toLowerCase().includes(search.toLowerCase()) ||
          user.last_name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <div className="UserContainer">
      <FetchButton onClick={fetchUsers} />
      {isLoading ? (
        <LoadingSpinner /> 
      ) : (
        <>
          <FilterBox value={filter} onChange={handleFilterChange} />
          <UserList users={filteredUsers} onDelete={handleDelete} />
        </>
      )}
    </div>
  );
};

export default Container;
