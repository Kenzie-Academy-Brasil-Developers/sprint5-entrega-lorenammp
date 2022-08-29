import { users } from "../database";

const UserDeleteService = (id: string) => {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  users.splice(userIndex, 1);

  return "User deleted with success!";
};

export default UserDeleteService;
