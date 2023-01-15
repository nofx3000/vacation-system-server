import { Sequelize } from "sequelize-typescript";
import { MYSQL_CONF } from "../conf/db";
import Models from "./models/index";

const seq = new Sequelize(MYSQL_CONF);
// 手动添加模型
// 如果使用自动根据路径添加模型，tsc编译后将出现错误
const models: any[] = [];
for (const model in Models) {
  models.push((Models as any)[model]);
}
seq.addModels(models);

export default seq;
