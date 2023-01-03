import UserService from "../service/UserService";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
class UserController {
  static UserController: UserController = new UserController();
  async login(usename: string, password: string) {
    const userinfo = await UserService.findUser(usename, password);
    if (userinfo) {
      return new SuccessModel(userinfo);
    } else {
      return new ErrorModel("not found");
    }
  }
  async createUser(username: string, password: string, role: string) {
    const userinfo = await UserService.createUser(username, password, role);
    return userinfo;
  }
}

export default UserController.UserController;
