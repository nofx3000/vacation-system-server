import { Context } from "koa";
import UserController from "../controller/UserController";
import { UserInfoInter } from "../interface/UserInterface";
import { jwtCheck } from "../meddleware/jwt-check";

const router = require("koa-router")();

router.prefix("/users");

router.post("/login", async (ctx: Context) => {
  const { username, password } = ctx.request.body as UserInfoInter;
  ctx.body = await UserController.login({ username, password });
});

router.post("/verify", async (ctx: Context) => {
  const token = ctx.header.authorization;
  if (token) {
    ctx.body = await UserController.verify(token);
  }
});

router.post("/create", jwtCheck, async (ctx: Context) => {
  const userinfo: UserInfoInter = ctx.request.body as any;
  ctx.body = await UserController.createUser(userinfo);
});

export default router;
