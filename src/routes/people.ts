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
  const res = await PeopleController.addOnePerson(personInfo);
  ctx.body = res;
});

router.del("/del/:id", async (ctx: Context) => {
  const id = ctx.params.id;
  ctx.body = await PeopleController.delOnePerson(id);
});

router.put("/edit", async (ctx: Context) => {
  const personInfo: PersonInfoInter = ctx.request.body as any;
  const res = await PeopleController.editOnePerson(personInfo);
  ctx.body = res;
});

router.get("/:id", async (ctx: Context) => {
  const id = ctx.params.id;
  const res = await PeopleController.getPersonInfo(id);
  ctx.body = res;
});

// router.patch("/:id/:length", async (ctx: Context) => {
//   const { id, length } = ctx.params.id;
//   const res = await PeopleController.updatePersonSpent(id, length);
//   ctx.body = res;
// });

export default router;
