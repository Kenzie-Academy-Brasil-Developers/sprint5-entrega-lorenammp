import { users } from "../database";

const ListUserByIdService = (id: string) => {
  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    throw new Error("User not found");
  }

  return foundUser;
};

export default ListUserByIdService;
