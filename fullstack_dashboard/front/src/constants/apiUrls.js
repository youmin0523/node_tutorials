const domain = 'http://localhost:8000';

const REST_COUNTRIES_API_URL =
  'https://restcountries.com/v3.1/all?fields=name,flags,languages';

const GET_VISITORS_API_URL = `${domain}/visitors`;
const GET_REVENUE_API_URL = `${domain}/revenue`;
const GET_CUSTOMERS_API_URL = `${domain}/customers`;

export {
  GET_VISITORS_API_URL,
  GET_REVENUE_API_URL,
  REST_COUNTRIES_API_URL,
  GET_CUSTOMERS_API_URL,
};
