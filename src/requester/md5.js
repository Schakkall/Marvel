import md5 from 'js-md5';    

const PRIVATE_KEY = '5c2338b9d9aedeb093f095d01517ccf576a7fe80';
const PUBLIC_KEY = 'f9e95fa16ec3865d019d40ce464b7d82';

export function hashIt(ts = new Date().getTime(), privateKey = PRIVATE_KEY, publicKey = PUBLIC_KEY) {
    md5(ts+privateKey+publicKey);
    var hash = md5.create();    
    hash.update(ts+privateKey+publicKey);
    return hash.hex();
}

export function authStr() {
    const ts = new Date().getTime();
    return ("ts=" + ts + "&" + "apikey=" + PUBLIC_KEY + "&" + "hash=" + hashIt(ts));
}