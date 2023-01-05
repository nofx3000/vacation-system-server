import { Context } from "koa";
import UserController from "../controller/UserController";
import { UserInfoInter } from "../interface/UserInterface";
import { jwtCheck } from "../meddleware/jwt-check";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";

const router = require("koa-router")();

router.prefix("/api/users");

router.post("/login", async (ctx: Context) => {
  const { username, password } = ctx.request.body as UserInfoInter;
  console.log(ctx.request.body);
  const res = await UserController.login({ username, password });
  if (res instanceof ErrorModel) {
    ctx.status = 401;
  }
  ctx.body = res;
});

router.get("/verify1", async (ctx: Context) => {
  const token = ctx.header.authorization;
  if (!token) {
    console.log("untoken");
    ctx.status = 401;
    ctx.body = new ErrorModel(401, "no token");
    return;
  }
  const res = await UserController.verify(token);
  if (res instanceof ErrorModel) {
    ctx.status = 401;
  }
  ctx.body = res;
});

router.post("/create", jwtCheck, async (ctx: Context) => {
  const userinfo: UserInfoInter = ctx.request.body as any;
  ctx.body = await UserController.createUser(userinfo);
});

export default router;
