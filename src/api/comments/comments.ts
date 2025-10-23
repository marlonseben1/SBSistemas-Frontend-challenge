import { api } from "../api";
import type { Comment } from "./comments.types";

export const get = async (postId: number): Promise<Comment[]> => {
  const { data } = await api.get<Comment[]>(`/posts/${postId}/comments`);
  return data;
};

export const commentsApi = {
  get,
};
