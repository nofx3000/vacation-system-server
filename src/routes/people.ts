import { Context } from "koa";
import PeopleController from "../controller/PeopleController";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
import { PersonInfoInter } from "../interface/PeopleInterface";

const router = require("koa-router")();

router.prefix("/api/people");

router.get("/", async (ctx: Context) => {
  ctx.body = await PeopleController.getAllPeopleInfoByDivison();
});

router.post("/add", async (ctx: Context) => {
  const personInfo: PersonInfoInter = ctx.request.body as any;
  ctx.body = await PeopleController.addOnePerson(personInfo);
});

export default router;
