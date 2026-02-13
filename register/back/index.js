const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/authRoutes');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json()); // express 모듈의 json() 메서드 사용

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  response.send('Hello Node !!!');
});

app.use('/auth', authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} `);
});
