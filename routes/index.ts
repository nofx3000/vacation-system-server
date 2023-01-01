import { Context, Next } from "koa";

const router = require("koa-router")();

router.get("/json", async (ctx: Context, next: Next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

module.exports = router;
