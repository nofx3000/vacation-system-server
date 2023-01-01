import { Model, DataTypes } from "sequelize";
import { seq } from "../seq";

interface UserInstance extends Model {
  id: number;
  username: string;
  password: string;
  role: string;
}

// users
const User = seq.define<UserInstance>("user", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "用户名，唯一",
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "密码",
  },
  role: {
    type: DataTypes.STRING,
    comment: "角色类型: admin/user",
  },
});

export default User;
