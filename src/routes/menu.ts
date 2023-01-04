import { Context, Next } from "koa";
import MenuController from "../controller/MenuController";
const router = require("koa-router")();

router.prefix("/api/menu");

router.get("/", async (ctx: Context, next: Next) => {
  ctx.body = await MenuController.getMenuList();
});

export default router;
