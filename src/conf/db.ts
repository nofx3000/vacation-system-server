import { SequelizeOptions } from "sequelize-typescript";
import mysql2 from "mysql2";

export const MYSQL_CONF: SequelizeOptions = {
  host: "localhost",
  username: "root",
  password: "root",
  port: 3306,
  database: "vacation_db",
  dialect: "mysql",
  dialectModule: mysql2,
  // models: [path.join(__dirname, "..", "/db/models/*.model.ts")],
};
