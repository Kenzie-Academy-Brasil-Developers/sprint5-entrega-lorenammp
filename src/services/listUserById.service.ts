import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";

const ListUserByIdService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    throw new Error("User not found");
  }

  return foundUser;
};

export default ListUserByIdService;
