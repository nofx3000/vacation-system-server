import { Sequelize, Options } from "sequelize";
import { MYSQL_CONF } from "../conf/db";

const { host, user, password, database } = MYSQL_CONF;
const conf: Options = {
  host,
  dialect: "mysql",
};

export const seq = new Sequelize(database, user, password, conf);
