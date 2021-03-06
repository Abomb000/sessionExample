const crypto = require('crypto');

function createUUID(req){
    let data = req.headers['user-agent'] + Date.now() + (Math.random()* 1000);
    let base64data = crypto.createHash('md5').
        update(data).
        digest("hex").
        toString('base64');

    console.log("new uuid "+ base64data);
    return base64data;
}

module.exports={ createUUID };