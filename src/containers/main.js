/**
 * Created by Liat Gofstein on 1/1/2017.
 */
import {connect} from 'react-redux';
import isNil from 'lodash.isnil';
import castArray from 'lodash.castarray';

import App from '../components/App';
import  { setCurrentLocation, setMapMarkers, setMapZoom } from '../actions'

const mapDispatchToProps = (dispatch) => ({
    setLocation(lat, lng, zoom = 9) {
        dispatch(setCurrentLocation(lat,lng));
        dispatch(setMapZoom(zoom));
    },
    setMarkers(locations, zoom) {
        dispatch(setMapMarkers(castArray(locations)));
        !isNil(zoom) && dispatch(setMapZoom(zoom));
    },
});

const mapStateToProps = (state) => ({
    mapCenter: state.appReducer.currentLocation,
    markers: state.appReducer.markers,
    zoom: state.appReducer.zoom,
});

const Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default Main
