import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { IUser } from "../interfaces/users";

const UserUpdateService = async (id: string, data: IUser) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new Error("User not found");
  }

  userRepository.merge(user, data);

  const updatedDate = new Date();

  user.updated_at = updatedDate;

  await userRepository.save(user);

  const updatedUser = { ...user };

  delete updatedUser.password;

  return updatedUser;
};

export default UserUpdateService;
