import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";

const UserDeleteService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new Error("User not found");
  }

  await userRepository.delete(user!.id);

  return "User deleted with success!";
};

export default UserDeleteService;
