import * as authHash from './md5';

export const ALL_HEROES_URI = (limit = 10, offset) => `https://gateway.marvel.com:443/v1/public/characters?${authHash.authStr()}&limit=${limit}&offset=${offset}`;
export const HERO_INFO_URI = (id) => `https://gateway.marvel.com:443/v1/public/characters/${id}?${authHash.authStr()}`;
export const HERO_PIC_URI = (id) => `https://gateway.marvel.com:443/v1/public/characters/${id}?${authHash.authStr()}`;
export const EXAMPLE_URI = 'https://randomuser.me/api';