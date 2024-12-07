require('dotenv').config();

const API_KEY = process.env.API_KEY;
const GEMINI_KEY = process.env.GEMINI_KEY;
const DEFAULT_IMG =  "https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D";
const LOCAL_STORAGE_KEY = process.env.LOCAL_STORAGE_KEY;
const PORT = process.env.PORT;
const API_URL = process.env.API_URL;

module.exports = { API_URL, API_KEY, GEMINI_KEY, DEFAULT_IMG, LOCAL_STORAGE_KEY, PORT };