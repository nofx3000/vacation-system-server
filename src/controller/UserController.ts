import UserService from "../service/UserService";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
import { LoginInter, UserInfoInter } from "../interface/UserInterface";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../conf/jwt";

class UserController {
  static UserController: UserController = new UserController();
  async login(logininfo: LoginInter) {
    try {
      let userinfo = await UserService.findUser(logininfo);
      if (!userinfo) {
        return new ErrorModel("not found");
      }
      const { dataValues } = userinfo;
      let token: any;
      token = jwt.sign(dataValues, SECRET_KEY, {
        expiresIn: "24h",
      });
      return new SuccessModel(token);
    } catch (error) {
      return new ErrorModel((error as any).toString());
    }
  }

  async createUser(userinfo: UserInfoInter) {
    try {
      const res = await UserService.createUser(userinfo);
      return new SuccessModel(res);
    } catch (error) {
      return new ErrorModel((error as any).toString());
    }
  }

  async verify(token: string) {
    console.log(token);
    try {
      const decode = jwt.verify(token.split(" ")[1], SECRET_KEY);
      return new SuccessModel(decode);
    } catch (error) {
      return new ErrorModel((error as any).toString());
    }
  }
}

export default UserController.UserController;
