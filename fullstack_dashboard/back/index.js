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

app.use(require('./routes/visitorsRoute'));
app.use(require('./routes/revenueRoute'));
app.use(require('./routes/customerRoute'));
app.use(require('./routes/targetRealityRoute'));
app.use(require('./routes/topProductsRoute'));
app.use(require('./routes/salesMapRoute'));
app.use(require('./routes/volumeServiceRoute'));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} `);
});
