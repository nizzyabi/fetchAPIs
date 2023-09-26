// import express
const express = require('express');
// put express in an app const
const app = express()

// create a route that stores a message in '/api'
app.get('/api', (req,res) => {
    res.json({ message: 'Hello from the APIIIIIII'});
})

// create a port that will be used to listen to the server using nodemon
const port = 5001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
