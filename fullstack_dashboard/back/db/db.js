// postgreSQL 정보:
require('dotenv').config();
const { Pool } = require('pg');

// 연결 풀 생성 (대량 요청 처리에 효율적)
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = { pool };
