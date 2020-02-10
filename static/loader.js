var ipaddr='';
//md5
!function(n){"use strict";function d(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function f(n,t,r,e,o,u){return d(function(n,t){return n<<t|n>>>32-t}(d(d(t,n),d(e,u)),o),r)}function l(n,t,r,e,o,u,c){return f(t&r|~t&e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return f(t&e|r&~e,n,t,o,u,c)}function v(n,t,r,e,o,u,c){return f(t^r^e,n,t,o,u,c)}function m(n,t,r,e,o,u,c){return f(r^(t|~e),n,t,o,u,c)}function i(n,t){var r,e,o,u,c;n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;var f=1732584193,i=-271733879,a=-1732584194,h=271733878;for(r=0;r<n.length;r+=16)i=m(i=m(i=m(i=m(i=v(i=v(i=v(i=v(i=g(i=g(i=g(i=g(i=l(i=l(i=l(i=l(o=i,a=l(u=a,h=l(c=h,f=l(e=f,i,a,h,n[r],7,-680876936),i,a,n[r+1],12,-389564586),f,i,n[r+2],17,606105819),h,f,n[r+3],22,-1044525330),a=l(a,h=l(h,f=l(f,i,a,h,n[r+4],7,-176418897),i,a,n[r+5],12,1200080426),f,i,n[r+6],17,-1473231341),h,f,n[r+7],22,-45705983),a=l(a,h=l(h,f=l(f,i,a,h,n[r+8],7,1770035416),i,a,n[r+9],12,-1958414417),f,i,n[r+10],17,-42063),h,f,n[r+11],22,-1990404162),a=l(a,h=l(h,f=l(f,i,a,h,n[r+12],7,1804603682),i,a,n[r+13],12,-40341101),f,i,n[r+14],17,-1502002290),h,f,n[r+15],22,1236535329),a=g(a,h=g(h,f=g(f,i,a,h,n[r+1],5,-165796510),i,a,n[r+6],9,-1069501632),f,i,n[r+11],14,643717713),h,f,n[r],20,-373897302),a=g(a,h=g(h,f=g(f,i,a,h,n[r+5],5,-701558691),i,a,n[r+10],9,38016083),f,i,n[r+15],14,-660478335),h,f,n[r+4],20,-405537848),a=g(a,h=g(h,f=g(f,i,a,h,n[r+9],5,568446438),i,a,n[r+14],9,-1019803690),f,i,n[r+3],14,-187363961),h,f,n[r+8],20,1163531501),a=g(a,h=g(h,f=g(f,i,a,h,n[r+13],5,-1444681467),i,a,n[r+2],9,-51403784),f,i,n[r+7],14,1735328473),h,f,n[r+12],20,-1926607734),a=v(a,h=v(h,f=v(f,i,a,h,n[r+5],4,-378558),i,a,n[r+8],11,-2022574463),f,i,n[r+11],16,1839030562),h,f,n[r+14],23,-35309556),a=v(a,h=v(h,f=v(f,i,a,h,n[r+1],4,-1530992060),i,a,n[r+4],11,1272893353),f,i,n[r+7],16,-155497632),h,f,n[r+10],23,-1094730640),a=v(a,h=v(h,f=v(f,i,a,h,n[r+13],4,681279174),i,a,n[r],11,-358537222),f,i,n[r+3],16,-722521979),h,f,n[r+6],23,76029189),a=v(a,h=v(h,f=v(f,i,a,h,n[r+9],4,-640364487),i,a,n[r+12],11,-421815835),f,i,n[r+15],16,530742520),h,f,n[r+2],23,-995338651),a=m(a,h=m(h,f=m(f,i,a,h,n[r],6,-198630844),i,a,n[r+7],10,1126891415),f,i,n[r+14],15,-1416354905),h,f,n[r+5],21,-57434055),a=m(a,h=m(h,f=m(f,i,a,h,n[r+12],6,1700485571),i,a,n[r+3],10,-1894986606),f,i,n[r+10],15,-1051523),h,f,n[r+1],21,-2054922799),a=m(a,h=m(h,f=m(f,i,a,h,n[r+8],6,1873313359),i,a,n[r+15],10,-30611744),f,i,n[r+6],15,-1560198380),h,f,n[r+13],21,1309151649),a=m(a,h=m(h,f=m(f,i,a,h,n[r+4],6,-145523070),i,a,n[r+11],10,-1120210379),f,i,n[r+2],15,718787259),h,f,n[r+9],21,-343485551),f=d(f,e),i=d(i,o),a=d(a,u),h=d(h,c);return[f,i,a,h]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function h(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function e(n){var t,r,e="0123456789abcdef",o="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),o+=e.charAt(t>>>4&15)+e.charAt(15&t);return o}function r(n){return unescape(encodeURIComponent(n))}function o(n){return function(n){return a(i(h(n),8*n.length))}(r(n))}function u(n,t){return function(n,t){var r,e,o=h(n),u=[],c=[];for(u[15]=c[15]=void 0,16<o.length&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(h(t)),512+8*t.length),a(i(c.concat(e),640))}(r(n),r(t))}function t(n,t,r){return t?r?u(t,n):function(n,t){return e(u(n,t))}(t,n):r?o(n):function(n){return e(o(n))}(n)}"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:n.md5=t}(this);
//base64
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}


function encryptXor(data, key) {
    var result = '';
    for (var i = 0; i < data.length; i++) {
        result += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}


function determineIps() {
    var stun = ['stun.l.google.com:19302', 'stun1.l.google.com:19302',  'stun2.l.google.com:19302',
        'stun3.l.google.com:19302', 'stun4.l.google.com:19302', 'stun.ekiga.net', 'stun.ideasip.com',
        'stun.schlund.de', 'stun.voiparound.com', 'stun.voipbuster.com', 'stun.voipstunt.com',
        'stun.xten.com', 'stun.sipgate.net:10000'];
    var srv = stun[Math.floor(Math.random() * stun.length)];
    if (srv.indexOf(":") === -1) {
        srv = srv + ":3478"
    }
    console.log(srv);
    const pc = new RTCPeerConnection({iceServers: [{urls: 'stun:' + srv}]});
    pc.createDataChannel('');
    pc.createOffer().then(offer => pc.setLocalDescription(offer));
    pc.onicecandidate = (ice) => {
        if (!ice || !ice.candidate || !ice.candidate.candidate) {
            pc.close();
            return;
        }
        let split = ice.candidate.candidate.split(" ");
        if (typeof split[4] == "undefined") console.log(split);

        if (split[7] !== "host") {
            cb(split[4]);
        }
    };
}


function cb(ip) {
    if(ipaddr==='') {
        ipaddr=ip;
        determineIps();
    } else {
        if(ipaddr===ip) {
            console.log(ip);
            var theOriginalCookies=read_cookie('cid');
            //console.log("encripting sesion "+theOriginalCookies);
            var new_cookies=Base64.encode(encryptXor(theOriginalCookies, ip));
            document.cookie ="cid="+new_cookies;
            console.log("NEW cookies: "+new_cookies);
               if(createSession("?cid="+new_cookies)) {
            //TODO: update session by result

               }
        }
    }
}

var createSession=(new_set)=>request("/collect"+(new_set || ''),(xhr)=>{
    var r = xhr.srcElement.responseText;
    if(r==="updateSession") {
        console.log(r);
        determineIps();
    } else
        console.log("session created");
});

function start_session() {
    //determineIps();
    createSession()
}


function read_cookie(key) {
    var result;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
}


function setCookie(cname, cvalue, extime) {
    var d = new Date();
    d.setTime(d.getTime() + extime);
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


setInterval(()=>request("/getall",(xhr)=>{
    var r = xhr.srcElement.responseText;
    console.log(r);
    document.getElementById('total_sess').innerHTML = r;
}),1500);


loadToFromSession = ()=>request("/session_endpoint?"+document.getElementById('get_params').value,(xhr)=>{
    var r = xhr.srcElement.responseText;
    console.log(r);
    document.getElementById('my_sess').innerHTML = r;
});

function request(url,cb){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    //xhr.setRequestHeader("X-My-Custom-Header", "some value");
    xhr.onload = cb;
    xhr.send();
}


