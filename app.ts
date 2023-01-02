import { Next, Context } from "koa";
import Koa from "koa";
const app = new Koa();
// const views = require("koa-views");
import json from "koa-json";
const onerror = require("koa-onerror");
import bodyparser from "koa-bodyparser";
import logger from "koa-logger";
import koa_static from "koa-static";

import index from "./src/routes/index";
const users = require("./src/routes/users");

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(koa_static(__dirname + "/public"));

// app.use(
//   views(__dirname + "/views", {
//     extension: "pug",
//   })
// );

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

// error-handling
app.on("error", (err: Error, ctx: Context) => {
  console.error("server error", err, ctx);
});

module.exports = app;
