import * as dotenv from 'dotenv';
dotenv.config();
export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
export const API_KEY = process.env.ENV_API_KEY;
export const TIMEOUT_SEC = 10;
export const RES_PER_PAGE = 10;
export const INITAL_PAGE = 1;
export const MODAL_CLOSE_SEC = 2.5;
// 27c2348e-c392-46e8-adf7-bfd1a1e5ad87
