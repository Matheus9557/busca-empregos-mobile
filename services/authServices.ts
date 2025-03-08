import axios from 'axios';

export const host = ''; //IP da sua máquina

const Api = axios.create({
    baseURL: `http://${host}:3000`,
  });

const API_URL = `http://${host}:3000/`; // Substitua pelo URL do seu backend

export const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
  region: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data; // Retorna a resposta da API, normalmente um token
  } catch (error) {
    throw new Error('Erro ao registrar usuário');
  }
};
