import seq from "../db/seq";
class UserService {
  static UserService: UserService = new UserService();
  private User = seq.models.User;
  async createUser(username: string, password: string, role: string) {
    return await this.User.create({
      username,
      password,
      role,
    });
  }
}

export default UserService.UserService;
