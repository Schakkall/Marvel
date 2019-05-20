import md5 from 'md5';
const PRIVATE_KEY = '5c2338b9d9aedeb093f095d01517ccf576a7fe80';
const PUBLIC_KEY = 'f9e95fa16ec3865d019d40ce464b7d82';

function hashIt(ts, privateKey = PRIVATE_KEY, publicKey = PUBLIC_KEY) {
    return md5(ts+privateKey+publicKey);
}