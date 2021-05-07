var request = require('request');
const router = require("express").Router();
require('dotenv').config();

// base url
const baseUrl = "https://api.bing.microsoft.com";
const basePath = "/v7.0/images";
// const subscriptionKey = process.env.SUBSCRIPTION_KEY;
const subscriptionKey = "66b3718610e34ca293a6194143e8b7d7";

router.get('/search', function (req, res) {
    console.log(subscriptionKey);
    let search = req.query.q;
    console.log(search);
    let url = `${baseUrl}` + `${basePath}` +"/search"+ `?q=${encodeURIComponent(search)}`;
    console.log(url)
    request({
        headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
        },
        uri: url
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let body_ = JSON.parse(body);
            console.log(body_);
            res.send(body_);
        }
        else {
            console.log('err');
            console.log(response);
            res.send(error);
        }
    })
})

router.get('/trending', function (req, res) {
    let search = req.query.q;
    console.log(search);
    let url = `${baseUrl}` + `${basePath}` +"/trending"+ `?q=${encodeURIComponent(search)}`;
    console.log(url)
    request({
        headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
        },
        uri: url
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let body_ = JSON.parse(body);
            console.log(body_);
            res.send(body_);
        }
        else {
            console.log('err');
            console.log(response);
            res.send(error);
        }
    })
})

module.exports = router;