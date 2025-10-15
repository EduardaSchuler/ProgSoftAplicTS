import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

export async function listarUsuarios() {
  const response = await axios.get(`${BASE_URL}/users?page=2`);
  return response.data;
}

export async function criarUsuario(nome: string, cargo: string) {
  const response = await axios.post(`${BASE_URL}/users`, {
    name: nome,
    job: cargo,
  });
  return response.data;
}

export async function atualizarUsuario(id: number, nome: string, cargo: string) {
  const response = await axios.put(`${BASE_URL}/users/${id}`, {
    name: nome,
    job: cargo,
  });
  return response.data;
}

export async function atualizarParcialUsuario(id: number, cargo: string) {
  const response = await axios.patch(`${BASE_URL}/users/${id}`, {
    job: cargo,
  });
  return response.data;
}

export async function deletarUsuario(id: number) {
  const response = await axios.delete(`${BASE_URL}/users/${id}`);
  return response.status; // 204
}
