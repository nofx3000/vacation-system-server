import { Sequelize } from "sequelize-typescript";
import { MYSQL_CONF } from "../conf/db";

const seq = new Sequelize(MYSQL_CONF);

export default seq;
