import { Context, Next } from "koa";
import DivisionService from "../service/DivisionService";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";

const router = require("koa-router")();

router.prefix("/api");

router.get("/", async (ctx: Context, next: Next) => {
  ctx.body = {
    title: "koa2",
  };
});

router.get("/all", async (ctx: Context, next: Next) => {
  try {
    const res = await DivisionService.findAllByDivision();
    ctx.body = new SuccessModel(res);
  } catch (error) {
    ctx.body = new ErrorModel("failed to get all info");
  }
});

export default router;
