const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";
const apiKey = "e3282b598f09c1b60a45324ed49186de";

const port = 8080;
const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))

app.listen(port, function () {
    console.log('Example app listening on port 8080!');
})

app.get('/', function(req,res){
    res.sendFile('dist/index.html', { root: '.' });
})

app.get('/test', async (req, res) => {
   const urlFromUser = req.body.url;
   const apiCall = await fetch(`${baseUrl}&key=${apiKey}&txt=${urlFromUser}&lang=en`, { method: 'POST' });
   try {
    const data = await apiCall.json();
    res.send(data);
} catch (error) {
    console.log("error",error)
}
})
