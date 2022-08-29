import { users } from "../database";
import { IUser } from "../interfaces/users";

const UserUpdateService = (id: string, data: IUser) => {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  const updatedDate = new Date();
  users[userIndex] = { ...users[userIndex], ...data };
  users[userIndex].updated_at = updatedDate;

  return users[userIndex];
};

export default UserUpdateService;
