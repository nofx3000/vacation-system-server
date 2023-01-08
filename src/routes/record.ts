import { Context } from "koa";
import RecordController from "../controller/RecordController";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
import { RecordInter, PhaseInter } from "../interface/RecordInterface";

const router = require("koa-router")();

router.prefix("/api/record");

router.get("/:id", async (ctx: Context) => {
  const id = ctx.params.id;
  ctx.body = await RecordController.getRecordByPersonId(id);
});

export default router;
