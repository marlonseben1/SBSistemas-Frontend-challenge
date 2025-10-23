import { api } from "../api";
import type { Todo } from "./todos.types";

const get = async (userId: number): Promise<Todo[]> => {
  const { data } = await api.get<Todo[]>(`users/${userId}/todos`);
  return data;
};

export const todosApi = {
  get,
};
