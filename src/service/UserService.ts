import seq from "../db/seq";
class UserService {
  static UserService: UserService = new UserService();
  private User = seq.models.User;
  async findUser(username: string, password: string) {
    return await this.User.findOne({
      where: {
        username,
        password,
      },
    });
  }
  async createUser(username: string, password: string, role: string) {
    return await this.User.create({
      username,
      password,
      role,
    });
  }
}

export default UserService.UserService;
