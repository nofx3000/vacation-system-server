import { Context, Next } from "koa";

const router = require("koa-router")();

router.prefix("/users");

router.get("/", function (ctx: Context, next: Next) {
  ctx.body = "this is a users response!";
});

router.get("/bar", function (ctx: Context, next: Next) {
  ctx.body = "this is a users/bar response";
});

module.exports = router;
