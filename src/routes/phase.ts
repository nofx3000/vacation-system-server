import { Context, Next } from "koa";
import PhaseController from "../controller/PhaseController";

const router = require("koa-router")();

router.prefix("/api/phase");

router.get("/", async (ctx: Context, next: Next) => {
  ctx.body = await PhaseController.getTodayPhases();
});

export default router;
