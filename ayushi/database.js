import mysql from "mysql2";
import dotenv from "dotenv";
import { createPool } from "mysql2/promise";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQLHOST,
    database: process.env.MYSQLDATABASE,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
  })
  .promise();

export async function bug() {
  const [rows] = await pool.query("SELECT * FROM project");
  return [rows];
}

const abc = await bug();
console.log(abc);

//module.exports = pool;
