import { Context, Next } from "koa";
import UserController from "../controller/UserController";
const router = require("koa-router")();

router.prefix("/users");

interface loginInfo {
  username: string;
  password: string;
}

router.post("/login", async (ctx: Context, next: Next) => {
  const { username, password } = ctx.request.body as loginInfo;
  ctx.body = await UserController.login(username, password);
});

router.get("/create", async (ctx: Context, next: Next) => {
  ctx.body = await UserController.createUser("dh", "123", "admin");
});

module.exports = router;
