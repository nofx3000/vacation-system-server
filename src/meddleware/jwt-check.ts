import { Next, Context } from "koa";
import { ErrorModel } from "../resmodel/ResModel";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../conf/jwt";

export const jwtCheck = async (ctx: Context, next: Next) => {
  const token = ctx.header.authorization;
  if (!token) {
    ctx.status = 401;
    ctx.body = new ErrorModel(401, "your not authorized, please login");
    return;
  }
  try {
    const decode = jwt.verify(token.split(" ")[1], SECRET_KEY);
    if (decode) {
      next();
    }
  } catch (error) {
    ctx.status = 401;
    ctx.body = new ErrorModel(401, "your not authorized, please login");
    return;
  }
};
