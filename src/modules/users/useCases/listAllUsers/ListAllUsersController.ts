import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    const userId = String(user_id);
    const users = this.listAllUsersUseCase.execute({ user_id: userId });

    return response.status(200).json(users);
  }
}

export { ListAllUsersController };
