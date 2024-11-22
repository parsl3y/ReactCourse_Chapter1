import axios from "axios";

const baseUrl = "https://reqres.in/api/users";

export const fetchUsersFromApi = async () => {
  const response = await axios.get(baseUrl + "?page=2");
  return response.data.data;
};

export const deleteUserFromApi = async (userId) => {
  await axios.delete(`${baseUrl}/${userId}`);
};
