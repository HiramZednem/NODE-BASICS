const axios = require('axios');

const httpClientPlugin = {

    get: async (url) => {
        // const resp = await fetch(url);
        // return await resp.json();
        return await axios.get( url ).then( data => data.data );
    },
    post: async (url, body) => {},
    put: async (url, body) => {},
    delete: async (url, body) => {},

};


module.exports = {
    httpClientPlugin,
}