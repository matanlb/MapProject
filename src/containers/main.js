/**
 * Created by Liat Gofstein on 1/1/2017.
 */
import {connect} from 'react-redux';
import App from '../components/App';
import  {setCurrentLocation} from '../actions'



const mapDispatchToProps = (dispatch) => ({
    setLocation: (lat, lng) => dispatch(setCurrentLocation(lat,lng))
});

const mapStateToProps = (state) => ({
    lat: state.appReducer.lat,
    lng: state.appReducer.lng
    // lat: 31.046051,
    // lng: 34.851612
});

const Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default Main
