import { Request, Response } from "express";
import UserUpdateService from "../services/updateUser.service";

const UserUpdateController = (req: Request, res: Response) => {
  try {
    const id = req.params;
    const data = req.body;

    const updatedUser = UserUpdateService(id.id, data);

    return res.status(201).send(updatedUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default UserUpdateController;
