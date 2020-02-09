'use strict'

const promisifyAll = require('bluebird').promisifyAll;
const config = require('../config');
const redis = require ('redis');

let redisClient = null;

promisifyAll(redis.RedisClient.prototype);
promisifyAll(redis.Multi.prototype);

async function connect() {
    if (redisClient && redisClient.connected) {
        console.log("Redis client already connected");
        return true;
    }

    try {
        redisClient = redis.createClient({
            host: config.dbConnections.redis.host,
            port: config.dbConnections.redis.port
        });

        redisClient.on("error", function (err) {
            console.log("Redis error: " + err.message);
            return false;
        });

        return redisClient.connected;

    } catch (err) {
        console.log('failed to connect to redis'+ err.message);
        return false;
    }
}

function prepare(key) {
    return key.toString().toLowerCase().trim();
}

async function hGetAll(hash) {
    return redisClient.HGETALLAsync(hash);

}

async function hGet(hash, key) {
    return redisClient.HGETAsync(hash, prepare(key));
}

async function hSet(hash, key, value) {
    return redisClient.HSETAsync(hash, prepare(key), value);

}

async function set(key, value) {
    return redisClient.SETAsync(key, value);
}

async function exists(key) {
    return new Promise(function(resolve, reject) {
        redisClient.exists( prepare(key), function(err, reply) {
            if (err)  reject(err);
            resolve(reply===1);
        });
    });

}

async function sismember(set, key) {
    return new Promise(function(resolve, reject) {
        redisClient.sismember(set, prepare(key), function(err, reply) {
            if (err)  reject(err);
            resolve(reply);
        });
    });

}

function client() {
    return redisClient;
}

function quit() {
    redisClient.quit();
}

module.exports = {connect, hGetAll, hGet, hSet, client,quit, set, sismember, exists};