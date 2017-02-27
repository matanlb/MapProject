/**
 * Created by Liat Gofstein on 1/1/2017.
 */

const DEFAULT_STATE = {
    lat: 31.046051,
    lng: 34.851612
}


const appReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SET_LOCATION':
            return Object.assign({}, state, {lat: action.payload.lat, lng: action.payload.lng});
        default:
            return state
    }
};


export default appReducer;