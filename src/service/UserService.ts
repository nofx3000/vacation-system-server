import seq from "../db/seq";
import { LoginInter, UserInfoInter } from "../interface/UserInterface";

class UserService {
  static UserService: UserService = new UserService();
  private User = seq.models.User;
  async findUser(logininfo: LoginInter) {
    const { username, password } = logininfo;
    return await this.User.findOne({
      where: {
        username,
        password,
      },
    });
  }
  async createUser(userinfo: UserInfoInter) {
    return await this.User.create(userinfo as any);
  }
}

export default UserService.UserService;
