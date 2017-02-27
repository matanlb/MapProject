/**
 * Created by Liat Gofstein on 1/1/2017.
 */
import {connect} from 'react-redux';
import App from '../components/App';
import  { setCurrentLocation, setMapMarkers } from '../actions'

const mapDispatchToProps = (dispatch) => ({
    setLocation: (lat, lng) => dispatch(setCurrentLocation(lat,lng)),
    setMarkers: (...locations) => dispatch(setMapMarkers(locations)),
});

const mapStateToProps = (state) => ({
    mapCenter: state.appReducer.currentLocation,
    markers: state.appReducer.markers,
});

const Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default Main
