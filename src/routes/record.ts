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

router.post("/add", async (ctx: Context) => {
  const data: RecordInter = ctx.request.body as any;
  const res = await RecordController.addRecord(data);
  console.log("?????", res);
  ctx.body = res;
});

export default router;
