/**
 * Created by Liat Gofstein on 1/1/2017.
 */
import { SET_LOCATION, SET_MARKERS } from '../actions';

const DEFAULT_STATE = {
    currentLocation: { lat: 31.046051, lng: 34.851612 },
    markers: [],
};


const appReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return Object.assign({}, state, {
                currentLocation: {
                    lat: action.payload.lat,
                    lng: action.payload.lng,
                }
            });
        case SET_MARKERS:
            return Object.assign({}, state, { markers: action.payload });
        default:
            return state
    }
};


export default appReducer;