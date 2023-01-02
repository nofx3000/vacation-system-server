import { Context, Next } from "koa";
import UserController from "../controller/UserController";
const router = require("koa-router")();

router.prefix("/users");

router.get("/create", async (ctx: Context, next: Next) => {
  ctx.body = await UserController.createUser("dh", "123", "admin");
});

router.get("/bar", function (ctx: Context, next: Next) {
  ctx.body = "this is a users/bar response";
});

module.exports = router;
