import { Next, Context } from "koa";
import Koa from "koa";
const app = new Koa();
// const views = require("koa-views");
import json from "koa-json";
// const onerror = require("koa-onerror");
import bodyparser from "koa-bodyparser";
import logger from "koa-logger";
import koa_static from "koa-static";
import cors from "koa-cors";
// import jwtKoa from "koa-jwt";
// import { SECRET_KEY } from "./src/conf/jwt";

import index from "./src/routes/index";
import users from "./src/routes/users";
import menu from "./src/routes/menu";
import people from "./src/routes/people";
import record from "./src/routes/record";
import phase from "./src/routes/phase";

// app.use(
//   jwtKoa({
//     secret: SECRET_KEY,
//   }).unless({
//     path: [
//       /^\/users\/login/,
//       // /^\/users\/create/,
//       /^\/users\/verify/,
//       /^\/menu/,
//     ],
//   })
// );

// error handler
// onerror(app);

// middlewares
app.use(
  cors({
    origin: function (ctx) {
      return "*";
    },
    maxAge: 5,
    credentials: true,
  })
);

app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(koa_static(__dirname + "/public"));

// logger
app.use(async (ctx: Context, next: Next) => {
  const start = new Date();
  await next();
  const ms = new Date().valueOf() - start.valueOf();
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes());
app.use(index.allowedMethods());
app.use(users.routes());
app.use(users.allowedMethods());
app.use(menu.routes());
app.use(menu.allowedMethods());
app.use(people.routes());
app.use(people.allowedMethods());
app.use(record.routes());
app.use(record.allowedMethods());
app.use(phase.routes());
app.use(phase.allowedMethods());

// error-handling
app.on("error", (err: Error, ctx: Context) => {
  console.error("server error", err, ctx);
});

export default app;
