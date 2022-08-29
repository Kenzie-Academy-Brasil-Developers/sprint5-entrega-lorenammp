import { Request, Response } from "express";
import UserCreateService from "../services/createUser.service";

const UserCreateController = (req: Request, res: Response) => {
  try {
    const { name, email, age, password } = req.body;

    const newUser = UserCreateService({ name, email, age, password });

    return res.status(201).send(newUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default UserCreateController;
