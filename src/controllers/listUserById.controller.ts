import { Request, Response } from "express";
import ListUserByIdService from "../services/listUserById.service";

const ListUserByIdController = (req: Request, res: Response) => {
  try {
    const id = req.params;

    const user = ListUserByIdService(id.id);

    return res.status(201).send(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default ListUserByIdController;
