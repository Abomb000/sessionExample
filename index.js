const express = require('express');
const config = require('./config');
const cache = require('./utils/cache');
const manager = require('./utils/session_managr');
const redis = require('./DAL/mRedis');

const app = express();

if(config.enable_redis) redis.connect();

cache.setPeriod(config.cacheTime);
app.set("PORT", config.PORT);

app.get('/session_endpoint',
    function (req, res) {
        res.send(manager(req, res));
});

app.get('/collect',
    function(req, res) {
        res.send(manager(req, res));
});

app.get('/getall',
     function (req, res) {
        if(config.sessions_show===1) res.send(""+cache.getall());
        else res.send("disabled in config");
    });


app.use('/static', express.static('static'));

app.listen(app.get('PORT'), function () {
    console.log('Express started on http://localhost:' + app.get('PORT') + '; press Ctrl-C to terminate.');
});