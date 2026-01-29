const domain = 'http://localhost:8000';

const REST_COUNTRIES_API_URL =
  'https://restcountries.com/v3.1/all?fields=name,flags,languages';

const GET_VISITORS_API_URL = `${domain}/visitors`;
const GET_REVENUE_API_URL = `${domain}/revenue`;
const GET_CUSTOMERS_API_URL = `${domain}/customers`;
const GET_TARGETREALITY_API_URL = `${domain}/target_reality`;
const GET_TOP_PRODUCTS_API_URL = `${domain}/top_products`;
const GET_SALES_MAP_API_URL = `${domain}/sales_map`;

export {
  GET_VISITORS_API_URL,
  GET_REVENUE_API_URL,
  REST_COUNTRIES_API_URL,
  GET_CUSTOMERS_API_URL,
  GET_TARGETREALITY_API_URL,
  GET_TOP_PRODUCTS_API_URL,
  GET_SALES_MAP_API_URL,
};
