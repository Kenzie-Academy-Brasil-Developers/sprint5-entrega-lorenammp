import { Request, Response } from "express";
import UserDeleteService from "../services/deleteUser.service";

const UserDeleteController = async (req: Request, res: Response) => {
  try {
    const id = req.params;

    const deleted = await UserDeleteService(id.id);

    return res.status(201).send(deleted);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default UserDeleteController;
