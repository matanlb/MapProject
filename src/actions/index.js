export const SET_LOCATION = 'SET_LOCATION';
export const SET_MARKERS = 'SET_MARKERS';
export const SET_ZOOM = 'SET_ZOOM';

export function setCurrentLocation(lat, lng) {
    return {
        type: SET_LOCATION,
        payload: { lat, lng },
    };
}

export function setMapMarkers(locations) {
    return {
        type: SET_MARKERS,
        payload: locations,
    };
}

export function setMapZoom(zoom) {
    return {
        type: SET_ZOOM,
        payload: zoom,
    };
}
