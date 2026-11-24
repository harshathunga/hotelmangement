import {Sequelize} from "sequelize";

import dotenv from "dotenv";

dotenv.config();

const sequlize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  host: process.env.host,
  dialect: "mysql",
});

export default sequlize;