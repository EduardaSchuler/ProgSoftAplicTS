import axios from "axios";

const API_BASE_URL = "https://reqres.in/api";

export async function getUsers() {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
}

export async function getUserById(id: number) {
  const response = await axios.get(`${API_BASE_URL}/users/${id}`);
  return response.data;
}

export async function updateUserPut(id: number, userData: { name: string; job: string }) {
  const response = await axios.put(`${API_BASE_URL}/users/${id}`, userData);
  return response.data;
}

export async function updateUserPatch(id: number, userData: { name: string; job: string }) {
  const response = await axios.patch(`${API_BASE_URL}/users/${id}`, userData);
  return response.data;
}

export async function deleteUser(id: number) {
  const response = await axios.delete(`${API_BASE_URL}/users/${id}`);
  return response.status;  // 204 No Content esperado
}
