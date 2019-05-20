import hashIt from './md5';

export const ALL_HEROES_URI = `https://gateway.marvel.com:443/v1/public/characters?apikey=${hashIt()}`;
export const HERO_INFO_URI = (id) => `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${hashIt()}`;
export const HERO_PIC_URI = (id) => `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${hashIt()}`;
export const EXAMPLE_URI = 'https://randomuser.me/api';