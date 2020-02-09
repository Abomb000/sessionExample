const PORT = process.env.PORT || 5000;
const cacheTime = 100000;
const IP_protect = 0;
//used for tests only in IP_protect=1
let client_ip = null;
const sessions_show = 0;
const session_autocrate = 0;

module.exports={ PORT, cacheTime, IP_protect, sessions_show, session_autocrate, client_ip };