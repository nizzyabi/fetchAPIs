// import axios to get the api
const axios = require('axios');

// create an async function to get the api
const responseToAPI = async () => {
    try {
        // set the api url to response
        const response = await axios.get('http://localhost:5001/api');
        // store the response in data
        const data = response.data;
        // log the data.messgae 
        console.log(data.message); // log the data

    } catch (error) {

        console.log(error) // catch any errors

    }
}

responseToAPI()