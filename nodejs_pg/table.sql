CREATE TABLE test (
  id int, -- 숫자형 아이디
  name varchar(50), -- 50바이트 문자열 이름
  email varchar(50) -- 50바이트 문자열 이메일
);


-- 테이블 데이터 입력
INSERT INTO test VALUES (1, 'marshall', 'mar@naver.com');
INSERT INTO test VALUES (2, 'jane', 'jane@naver.com');


-- user 테이블 생성(postgresql)
CREATE TABLE "users" (
  -- 컬럼명: id, SERIAL: 자동증가(작성 안해도 됨), primary key: 고유한 값(중복 불가, 삭제되어도 재생성 금지)
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL, -- NOT NULL: 필수 입력값 (비우면 안됨)
  email VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, password, email) VALUES
('user1', 'password1', 'user1@example.com'),
('user2', 'password2', 'user2@example.com'),
('user3', 'password3', 'user3@example.com');

UPDATE users
SET username = 'marshall'
WHERE id=2;

DELETE FROM users 
WHERE id=2; -- DELETE는 꼭 WHERE절을 사용해야함

SELECT * FROM users;
