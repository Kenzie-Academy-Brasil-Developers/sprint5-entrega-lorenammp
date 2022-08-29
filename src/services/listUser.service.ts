import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";

const UsersListService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const userList: User[] = [];

  for (let i = 0; i < users.length; i++) {
    const user: User = {
      id: users[i].id,
      name: users[i].name,
      email: users[i].email,
      age: users[i].age,
      created_at: users[i].created_at,
      updated_at: users[i].updated_at,
    };

    userList.push(user);
  }

  return userList;
};

export default UsersListService;
