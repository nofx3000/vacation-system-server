import { Context } from "koa";
import UserController from "../controller/UserController";
import { UserInfoInter } from "../interface/UserInterface";
import { jwtCheck } from "../meddleware/jwt-check";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";

const router = require("koa-router")();

router.prefix("/api/users");

router.post("/login", async (ctx: Context) => {
  const { username, password } = ctx.request.body as UserInfoInter;
  ctx.body = await UserController.login({ username, password });
});

router.get("/verify", async (ctx: Context) => {
  const token = ctx.header.authorization;
  if (!token) {
    ctx.status = 401;
    ctx.body = new ErrorModel("unauthenticated");
    return;
  }
  const res = await UserController.verify(token);
  if (res instanceof SuccessModel) {
    ctx.body = res;
  } else {
    ctx.status = 401;
    ctx.body = new ErrorModel("unauthenticated");
  }
});

router.post("/create", jwtCheck, async (ctx: Context) => {
  const userinfo: UserInfoInter = ctx.request.body as any;
  ctx.body = await UserController.createUser(userinfo);
});

export default router;
