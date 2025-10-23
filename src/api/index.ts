import { commentsApi } from "./comments/comments";
import { postsApi } from "./posts/posts";
import { todosApi } from "./todos/todos";
import { usersApi } from "./users/users";

export const api = {
  comments: commentsApi,
  posts: postsApi,
  todos: todosApi,
  users: usersApi,
};
