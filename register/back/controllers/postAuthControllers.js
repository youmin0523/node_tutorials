// 1. username, email, password를 입력 받는다(request.body)
// 2. 프로필 이미지를 받는다.(multer)
// 3. 이메일 데이터 존재 여부 요청을 데이터베이스로 보낸다.(sql -> SELECT * FROM users WHERE email = ?)
// 4. 이메일이 존재하면 이미 존재하는 이메일이라는 메시지를 반환한다.
// 5. 없는 이메일이면 비밀번호를 암호화 한다.
// 6. 프로필 이미지 저장 경로를 설정한다.
// 7. 이미지 경로 문자열을 데이터베이스에 저장한다.(sql -> INSERT INTO users (username, email, password, profile_image) VALUES (?, ?, ?, ?))

const database = require('../database/database');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const fs = require('fs');
const jwt = require('jsonwebtoken');

const uid = uuidv4();

exports.postAuth = async (request, response) => {
  const { username, email, password } = request.body;
  const profileImage = request.file;
  // console.log(username, email, password, profileImage);

  try {
    // 이메일 여부
    const rows = await database.pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email],
    ); // rows = [rows{}]

    // 이메일이 존재하면 메시지 반환
    if (rows.rows.length > 0) {
      return response
        .status(200)
        .json({ meesage: '이미 존재하는 이메일 입니다.', success: false });
    }

    var saltRounds = 10;
    var salt = bcrypt.genSaltSync(saltRounds);
    var hashPassword = bcrypt.hashSync(password, salt);

    console.log(hashPassword);

    // 프로필 이미지 저장 경로 설정
    let profileImagePath = null;
    if (profileImage) {
      const imageExtension = path.extname(profileImage.originalname);
      const imageFileName = `${uid}${imageExtension}`;
      profileImagePath = `${process.env.ROOT_URL}/uploads/${imageFileName}`;
      fs.writeFileSync(
        path.join(__dirname, '..', 'public', 'uploads', imageFileName),
        profileImage.buffer,
      );
    }

    await database.pool.query(
      'INSERT INTO users (username, email, password, profile_image) VALUES ($1, $2, $3, $4)',
      [username, email, hashPassword, profileImagePath],
    );

    return response
      .status(201)
      .json({ message: '회원가입 되었습니다.', success: true });
  } catch (error) {
    return response
      .status(500)
      .json({ message: '데이터 입력 오류: ' + error.message });
  }
};

exports.postLogin = async (request, response) => {
  const { email, password } = request.body;

  // 1. 이메일 존재 확인
  // 2. 비밀번호 일치 확인
  // 3. 회원정보 암호화하여 반환 (jwt)

  console.log(process.env.JWT_SECRET);

  try {
    const rows = await database.pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email],
    );

    if (rows.rows.length === 0) {
      return response
        .status(200)
        .json({ message: '존재하지 않는 이메일입니다.', success: false });
    }

    const isMatch = await bcrypt.compare(password, rows.rows[0].password);

    if (!isMatch) {
      return response
        .status(200)
        .json({ message: '비밀번호가 일치하지 않습니다.', success: false });
    }

    const token = jwt.sign(
      // 파라미터 순서 유지
      {
        id: rows.rows[0].id,
        username: rows.rows[0].username,
        email: rows.rows[0].email,
        profile_image: rows.rows[0].profile_image,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '3h',
      },
    );

    return response.status(201).json({
      token,
      success: true,
      // message: '로그인 성공',
      // user: rows.rows[0],
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: '로그인 오류' + error.message });
  }
};
