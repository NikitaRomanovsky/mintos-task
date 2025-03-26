import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export function createUser(userData) {
  return axios.post(`${process.env.API_BASE_URL}/users`, userData, {
    auth: {
      username: process.env.API_USERNAME,
      password: process.env.API_PASSWORD,
    },
  });
}

export function getUsers() {
  return axios.get(`${process.env.API_BASE_URL}/users`, {
    auth: {
      username: process.env.API_USERNAME,
      password: process.env.API_PASSWORD,
    },
  });
}

export function getUserById(userId) {
  return axios.get(`${process.env.API_BASE_URL}/users/${userId}`, {
    auth: {
      username: process.env.API_USERNAME,
      password: process.env.API_PASSWORD,
    },
  });
}

export function updateUser(userId, updatedUserData) {
  return axios.put(
    `${process.env.API_BASE_URL}/users/${userId}`,
    updatedUserData,
    {
      auth: {
        username: process.env.API_USERNAME,
        password: process.env.API_PASSWORD,
      },
    }
  );
}

export function deleteUser(userId) {
  return axios.delete(`${process.env.API_BASE_URL}/users/${userId}`, {
    auth: {
      username: process.env.API_USERNAME,
      password: process.env.API_PASSWORD,
    },
  });
}

export function unauthenticatedCreateUser(userData) {
  return axios.post(`${process.env.API_BASE_URL}/users`, userData);
}
