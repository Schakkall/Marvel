export function getAllHereos() {
    return {
        type: 'GET_ALL',
    }
}

export function getHeroInfo(id) {
    return {
        type: 'GET_HERO_INFO',
        hero: id
    }
}

export function getHeroPicture(id) {
    return {
        type: 'GET_HERO_PIC',
        hero: id
    }
} 