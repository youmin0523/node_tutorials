# Task: Register Navigate & Error Handling Fix

## 1. 개요 (Overview)

- `Register.jsx` 내 `navigate` 함수의 사용성을 개선하고, `requestMethods.js`의 에러 핸들링 버그를 수정하여 안정성을 확보함.

## 2. 작업 목록 (To-Do List)

- [x] **[Register.jsx] Navigate 로직 개선**:
  - `useNavigate` 변수명 관례 준수 (`navigator` -> `navigate`).
  - HTTP 201(Created) 외 200(OK) 응답에 대해서도 로그인 페이지 이동 지원.
  - **[New] 회원가입 성공 시 `alert` 메시지 출력 추가.**
- [x] **[requestMethods.js] 에러 핸들링 버그 수정**:
  - `response.json()` 중복 호출로 인한 "Body already consumed" 에러 해결 (재수정).
