import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const userData = async () => {
  try {
    const response = await baseUrl.get("/users");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const oneUserData = async ({ queryKey }) => {
  try {
    const [, id] = queryKey;
    const response = await baseUrl.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    43;
    console.log(error);
  }
};

export const postData = async () => {
  try {
    const response = await baseUrl.get("/posts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const commentsData = async () => {
  try {
    const response = await baseUrl.get("/comments");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const albumsData = async () => {
  try {
    const response = await baseUrl.get("/albums");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const photosData = async () => {
  try {
    const response = await baseUrl.get("/photos");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const todoData = async () => {
  try {
    const response = await baseUrl.get("/todos");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
