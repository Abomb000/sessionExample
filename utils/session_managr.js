const config = require('../config');
const uuid = require('./uuid');
const cache = require('./cache');

const cookie_name='cid';

function encryptXor(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

module.exports=(req, res)=>{
    let clientip = config.client_ip || (req.headers['x-forwarded-for'] || '').split(',').pop() ||
        req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;

    let session = '';
    let real_session ='';
    let send_back = '';

    if(req.query.cid) {
        session = req.query.cid;
    } else {
        let rc = req.headers.cookie;
        if (rc) {
            rc.split(';').forEach(function (cookie) {
                let parts = cookie.split('=');
                if (parts[0].trim() === cookie_name) {
                    session = decodeURIComponent(parts[1]);
                }
            });
        }
    }
    if(session){
        session = decodeURIComponent(session);
        if(config.IP_protect) {
            let bindata = Buffer.from(session, 'base64').toString('ascii');
            real_session = encryptXor(bindata, clientip);
            console.log('decripted >> '+session+' >> '+real_session);
        } else real_session = session;


        if(cache.haskey(real_session))  {
            if (Object.keys(req.query).length > 0)
                cache.set(real_session, JSON.stringify(req.query));
            send_back = cache.get(real_session);
        } else {
            console.log("cant find session");
            res.cookie(cookie_name, "", { maxAge: 1, httpOnly: true });
            return;
        }
    } else {
        if(config.session_autocrate || req.route.path==='/collect') {
            real_session = uuid.createUUID(req);
            cache.set(real_session, "");
            if (config.IP_protect) send_back = 'updateSession';
        }
    }

    res.cookie(cookie_name, (req.query.cid?session:real_session), { maxAge: config.cacheTime, httpOnly: ((config.IP_protect !== 1)) });
    return send_back;

};

