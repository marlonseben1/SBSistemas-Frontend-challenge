import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import type { User } from "../api/users/users.types";
import { api } from "../api";
import UserInfoDialog from "../components/UserInfoDialog/UserInfoDialog.tsx";

import { FaBuilding } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import "../styles/usersList.css";
import "../styles/dialog.css";
import "../styles/reset.css";

const UsersList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => api.users.list(),
    staleTime: 10000,
  });
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const closeDialog = () => setIsOpen(!isOpen);

  const handleOpenDialog = (user: User) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

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
            <div className="dialogButton">
              <button
                className="openButton"
                onClick={() => handleOpenDialog(user)}
              >
                <FiMenu />
              </button>
            </div>
          </div>
        ))}
        <UserInfoDialog isOpen={isOpen}>
          {selectedUser && (
            <div>
              <div className="dialogHeader">
                <button className="dialogCloseButton" onClick={closeDialog}>
                  <IoIosClose size={"3.5rem"} />
                </button>
              </div>
              <div className="personalData">
                <h2 className="dialogUserName">{selectedUser?.name}</h2>
                <div className="dialogUserEmail">
                  <MdEmail size={"2rem"} />
                  <p>{selectedUser?.email}</p>
                </div>

                <div className="dialogUserCompany">
                  <FaBuilding size={"2rem"} />
                  <p>{selectedUser?.company?.name}</p>
                </div>
                <div className="dialogUserPhoneNumber">
                  <FaPhone size={"2rem"} />
                  <p>{selectedUser?.phone}</p>
                </div>
              </div>
              <div className="dialogUserAddress">
                <FaMapPin size={"2rem"} />
                <p>
                  {selectedUser?.address?.city} -{" "}
                  {selectedUser?.address?.street} -{" "}
                  {selectedUser?.address?.zipcode}
                </p>
              </div>
            </div>
          )}
        </UserInfoDialog>
      </div>
    </div>
  );
};

export default UsersList;
