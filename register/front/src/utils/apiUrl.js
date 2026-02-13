let rootPath = '';

if (process.env.DEV_MODE === 'dev') {
  rootPath = 'http://localhost:8000';
} else {
  rootPath = 'https://your-projection-url.com';
}

const POST_AUTH_URL = `${rootPath}/auth/register`;
const POST_LOGIN_URL = `${rootPath}/auth/login`;

export { POST_AUTH_URL, POST_LOGIN_URL };
