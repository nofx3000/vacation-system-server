import UserService from "../service/UserService";
class UserController {
  static UserController: UserController = new UserController();
  async createUser(username: string, password: string, role: string) {
    const userinfo = await UserService.createUser(username, password, role);
    return userinfo;
  }
}

export default UserController.UserController;
