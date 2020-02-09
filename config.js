module.exports= {
    PORT: (process.env.PORT || 5001),
    cacheTime: 100000,
    IP_protect: 0,
//used for tests only in IP_protect=1
    client_ip: null,
    sessions_show: 1,
    session_autocrate: 0,
    enable_redis:0,
    dbConnections: {
        redis: {
            host: "127.0.0.1",
            port: 6379,
            hashkey:"sessions"
        }
    }
};