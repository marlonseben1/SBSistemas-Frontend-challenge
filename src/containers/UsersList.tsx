import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import { FiMenu } from "react-icons/fi";
import "../styles/usersList.css";
import "../styles/reset.css";

const UsersList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => api.users.list(),
    staleTime: 10000,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <span>Error!</span>;

  return (
    <div>
      <div>
        <div className="userGrid header">
          <div>Nome</div>
          <div>Email</div>
          <div>Cidade</div>
          <div>Ações</div>
        </div>
      </div>

      <div>
        {data?.map((user) => (
          <div key={user.id} className="userGrid">
            <h3 className="userName">{user.name}</h3>
            <p className="userEmail">{user.email}</p>
            <p className="userCity">{user.address.city}</p>
            <div className="modalButton">
              <button className="openButton">
                <FiMenu />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
