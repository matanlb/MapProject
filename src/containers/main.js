/**
 * Created by Liat Gofstein on 1/1/2017.
 */
import {connect} from 'react-redux';
import _ from 'lodash';

import App from '../components/App';
import  { setCurrentLocation, setMapMarkers, setMapZoom } from '../actions'

const mapDispatchToProps = (dispatch) => ({
    setLocation(lat, lng, zoom = 9) {
        dispatch(setCurrentLocation(lat,lng));
        dispatch(setMapZoom(zoom));
    },
    setMarkers(locations, zoom) {
        dispatch(setMapMarkers(_.castArray(locations)));
        !_.isNil(zoom) && dispatch(setMapZoom(zoom));
    },
});

const mapStateToProps = (state) => ({
    mapCenter: state.mapState.currentLocation,
    markers: state.mapState.markers,
    zoom: state.mapState.zoom,
});

const Main = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default Main;
