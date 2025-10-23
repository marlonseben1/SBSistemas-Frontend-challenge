import { useState } from "react";
import type { User } from "../api/users/users.types";

const List = () => {
  const [user, setUser] = useState<User[]>([]);

  return <div></div>;
};

export default List;
