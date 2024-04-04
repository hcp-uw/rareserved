const express = require("express")
const cors = require("cors")
const { unknownEndpoint } = require('./middleware');

// create your express application
const app = express();

// enable cors
app.use(cors());

// test endpoint
app.get('/hello', (req, res) => { 
    res.send('Attention HCP Project Team! If you see this, your front end and back end are connected') 
})

// error handling
app.use(unknownEndpoint);

// set port to listen on
const PORT = 3001;

// start your server
app.listen(PORT, () => {
    console.log(`Server running on port test ${PORT}`);
});