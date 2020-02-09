/*

LRU can get data from redis and cache it on local node
not implemented here...

 */
const config = require('../config');
var LRU = require("lru-cache")
    , options = { max: 50000
//    , length: function (n, key) { return n * 2 + key.length }
    , length: function(n, key){return n.length}
//    , dispose: function (key, n) { n.close() }
    , maxAge: config.cacheTime }
    , cache = new LRU(options);


function setPeriod(timeWait) {
    period = timeWait;
}
function set(session, values) {
    cache.set(session, values);
    //console.log('session');
}
function get(session) {
    return cache.get(session);
}
function getall(){
    return JSON.stringify(cache.dump())
}

function haskey(key){
    return cache.has(key)
}

module.exports = { setPeriod, set , get, getall, haskey };