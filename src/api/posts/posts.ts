import { api } from "../api";
import type { Post } from "./posts.types";
import axios from "axios";

const get = async (userId: number): Promise<Post[]> => {
  const { data } = await api.get<Post[]>(`users/${userId}/posts`);
  return data;
};

const create = async (title: string, body: string, userId: number) => {
  const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {title, body, userId})
  return res;
}

export const postsApi = {
  get,
  create
};
