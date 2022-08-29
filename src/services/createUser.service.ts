import { users } from "../database";
import { IUserRegister, IUser } from "../interfaces/users";
import { v4 as uuidv4 } from "uuid";

const UserCreateService = ({ name, email, age, password }: IUserRegister) => {
  const checkEmail = users.find((user) => user.email === email);

  if (checkEmail) {
    throw new Error("Email already exists");
  }

  const todayDate = new Date();

  const newUser: IUser = {
    id: uuidv4(),
    name,
    email,
    password,
    age,
    created_at: todayDate,
    updated_at: todayDate,
  };

  users.push(newUser);

  return newUser;
};

export default UserCreateService;
