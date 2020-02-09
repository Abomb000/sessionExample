 */
const config = require('../config');
const redis = require('../DAL/mRedis');

var LRU = require("lru-cache")
    , options = {
        max: 50000
//        , length: function (n, key) { return n * 2 + key.length }
        , length: function(n, key){return n.length}
//        , dispose: function (key, n) { n.close() }
        , maxAge: config.cacheTime
    },
    cache = new LRU(options);


function setPeriod(timeWait) {
    period = timeWait;
}
function set(session, values) {
    cache.set(session, values);
    if(config.enable_redis) redis.hSet(config.dbConnections.redis.hashkey, session, values);
    //console.log('session');
}
function get(session) {
    if (haskey(session)) return cache.get(session);
    if (config.enable_redis) {
        let from_redis = redis.hGet(config.dbConnections.redis.hashkey, session);
        if (from_redis !== undefined) {
            set(session, from_redis)
        }
    }
}
function getall(){
    return JSON.stringify(cache.dump())
}

function haskey(key){
    return cache.has(key)
}

module.exports = { setPeriod, set , get, getall, haskey };