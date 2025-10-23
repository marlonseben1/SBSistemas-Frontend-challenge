import { api } from "../api";
import type { User } from "./users.types";

const list = async (): Promise<User[]> => {
  const { data } = await api.get<User[]>("/users");
  return data;
};

const get = async (id: number): Promise<User> => {
  const { data } = await api.get<User>(`/users/${id}`);
  return data;
};

export const usersApi = {
  list,
  get,
};
