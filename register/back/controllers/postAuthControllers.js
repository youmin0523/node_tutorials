// 1. username, email, password를 입력 받는다(request.body)
// 2. 프로필 이미지를 받는다.(multer를 통해)
// 3. 이메일 데이터 존재 여부 요청을 데이터베이스로 보낸다.(sql -> SELECT * FROM users WHERE email = ?)
// 4. 이메일이 존재하면 이미 존재하는 이메일이라는 메시지를 반환한다.
// 5. 없는 이메일이면 비밀번호를 암호화 한다. (bycrypt)
// 6. 프로필 이미지 저장 경로를 설정한다.
// 7. 이미지 경로 문자열을 데이터베이스에 저장한다.(sql -> INSERT INTO users (username, email, password, profile_image) VALUES (?, ?, ?, ?))

const database = require('../database/database');
const bycrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const uid = uuidv4();
const fs = require('fs');

exports.postAuth = async (request, response) => {
  const { username, email, password } = request.body;
  const profileImage = request.file;
  // console.log(username, email, password, profileImage);

  try {
    // 이메일 여부
    const rows = await database.pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email],
    );

    // console.log(rows);
    // console.log(rows.rows[0].email);

    // rows = [rows{}]
    // 이메일이 존재하면 메시지 반환
    if (rows.rows.length > 0) {
      return response
        .status(200)
        .json({ message: '이미 존재하는 이메일입니다.', success: false });
    }

    // 비밀번호 암호화
    // const hashPassword = async (password) => {
    //   const saltRounds = 10;
    //   const salt = await bycrypt.genSalt(saltRounds);
    //   const hashedPassword = await bycrypt.hash(password, salt);
    //   return {
    //     status: 201,
    //     data: { salt, hashedPassword },
    //   };
    // };

    const hashPassword = await bycrypt.hash(password, 10);

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

    // console.log(profileImagePath);

    // 데이터베이스에 저장
    await database.pool.query(
      'INSERT INTO users (username, email, password, profile_image) VALUES ($1, $2, $3, $4)',
      [username, email, hashPassword, profileImagePath],
    );

    return response
      .status(201)
      .json({ message: '회원가입이 완료되었습니다.', success: true });
  } catch (error) {
    return response
      .status(500)
      .json({ message: '데이터 입력 오류: ' + error.message });
  }
};
