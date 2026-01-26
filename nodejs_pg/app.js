const express = require('express');
const cors = require('cors');
const db = require('./db/db');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json()); // express 모듈의 json() 메서드 사용

app.get('/', (request, response) => {
  response.send('Hello Node !!!');
});

// users path를 엔드포인트로 설정했을 때 get 요청(비동기)
app.get('/users', async (request, response) => {
  try {
    const result = await db.pool.query('SELECT * FROM users');
    return response.status(200).json(result.rows); // 데이터를 json 형식으로 변환
  } catch (error) {
    return response.status(500).json({ message: `Get Users Error: ${error}` }); // 데이터를 json 형식으로 변환
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} `);
});
