import { SequelizeOptions } from "sequelize-typescript";
import path from "path";

export const MYSQL_CONF: SequelizeOptions = {
  host: "localhost",
  username: "root",
  password: "root",
  port: 3306,
  database: "vacation_db",
  dialect: "mysql",
  models: [path.join(__dirname, "..", "/db/models/*.model.ts")],
};
