import md5 from 'md5';

function hashIt(ts, privateKey, publicKey) {
    return md5(ts+privateKey+publicKey);
}