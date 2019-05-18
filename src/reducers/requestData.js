export default function requestData(state = [], action) {
    switch (action.type) {
        case 'GET_ALL':
            return [...state]

        case 'GET_HERO_INFO':
            return [...state, {id: action.hero}]

        case 'GET_HERO_PIC':
            return [...state, {id: action.hero}]

        default:
            return state;
    }
}
