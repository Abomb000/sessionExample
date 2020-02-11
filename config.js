module.exports= {
    PORT: (process.env.PORT || 8081),
    cacheTime: 5*60*1000,
    IP_protect: 0,
//used for tests only in IP_protect=1
    client_ip: null,
    sessions_show: 1,
    session_autocrate: 0,
    enable_redis: 1,
    dbConnections: {
        redis: {
            host: "redis",
            //host: "192.168.99.100",
            port: 32769,
//            hashkey:"sessions"
        }
    }
};