const express = require('express');
const cors = require('cors');
require('dotenv').config();

// - node setting 순서
// 1. 초기 실행: npm init -y
// 2. 기본 모듈 설치: npm install cors express nodemon dotenv pg ...
// 3. package.json: scripts 내부에 "start": "nodemon index.js" 라인 추가

const app = express();

app.use(cors());

app.get('/', (request, response) => {
  response.send('Hello Node !!!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} `);
});
