const db = require('../db/db');

// users path를 엔드포인트로 설정했을 때 get 요청(비동기)
exports.getVisitors = async (request, response) => {
  try {
    const result = await db.pool.query('SELECT * FROM visitors');
    return response.status(200).json(result.rows); // 데이터를 json 형식으로 변환
  } catch (error) {
    return response
      .status(500)
      .json({ message: `Get visitors Error: ${error}` }); // 데이터를 json 형식으로 변환
  }
};
