const API_KEY = require('./constants');
const API_URL = require('./constants');
const getNews = async () => {
    const params = {
        languages: 'en',
        countries: 'us,il,ae',
        access_key: API_KEY.toString(),
        keywords: "israel,palestine",
        limit: 10
    };
    const urlParams = new URLSearchParams(params).toString();
    const res = await fetch(`${API_URL.toString()}?${urlParams}`);
    const res_1 = await res.json();
    return res_1;
}

module.exports = { getNews };

