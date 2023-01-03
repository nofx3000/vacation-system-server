import { Context, Next } from "koa";

const router = require("koa-router")();

router.get("/", async (ctx: Context, next: Next) => {
  ctx.body = {
    title: "koa2",
  };
});

export default router;
