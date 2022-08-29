import { User } from "../entities/user.entity";
import { IUserRegister } from "../interfaces/users";
import { AppDataSource } from "../data-source";

const UserCreateService = async ({
  name,
  email,
  age,
  password,
}: IUserRegister) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const checkEmail = users.find((user) => user.email === email);

  if (checkEmail) {
    throw new Error("Email already exists");
  }

  const todayDate = new Date();

  const user = new User();

  user.name = name;
  user.email = email;
  user.password = password;
  user.age = age;
  user.created_at = todayDate;
  user.updated_at = todayDate;

  userRepository.create(user);

  await userRepository.save(user);

  const newUser = { ...user };

  delete newUser.password;

  return newUser;
};

export default UserCreateService;
