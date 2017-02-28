/**
 * Created by Liat Gofstein on 1/1/2017.
 */
import { SET_LOCATION, SET_MARKERS, SET_ZOOM } from '../actions';

const DEFAULT_STATE = {
    currentLocation: { lat: 31.046051, lng: 34.851612 },
    markers: [],
    zoom: 9,
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
        case SET_ZOOM:
            return Object.assign({}, state, { zoom: action.payload });
        default:
            return state;
    }
};


export default appReducer;