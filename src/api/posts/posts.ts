import { api } from "../api";
import type { Post } from "./posts.types";

const get = async (userId: number): Promise<Post[]> => {
  const { data } = await api.get<Post[]>(`users/${userId}/posts`);
  return data;
};

export const postsApi = {
  get,
};
