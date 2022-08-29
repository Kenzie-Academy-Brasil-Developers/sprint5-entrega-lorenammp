import exp from "constants";
import { Request, Response } from "express";
import UsersListService from "../services/listUser.service";

const UserListController = (req: Request, res: Response) => {
  try {
    const userList = UsersListService();

    return res.status(201).send(userList);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default UserListController;
