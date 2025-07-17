import axios from 'axios';

const API = axios.create({ baseURL: 'https://leaderboard-9yrz.onrender.com/api' });

export const getUsers = () => API.get('/users');
export const addUser = (name) => API.post('/users', { name });
export const claimPoints = (userId) => API.post(`/users/claim/${userId}`);
export const getHistory = () => API.get('/history');
