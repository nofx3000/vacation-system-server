import { Context, Next } from "koa";

const router = require("koa-router")();

router.get("/", async (ctx: Context, next: Next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
  });
});

router.get("/string", async (ctx: Context, next: Next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx: Context, next: Next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

module.exports = router;
