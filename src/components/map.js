/**
 * Created by Liat Gofstein on 12/31/2016.
 */
import React, { Component} from 'react';
import Places from './greatPlaces';

import GoogleMap from 'google-map-react';



export default class Map extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {lat, lng, zoom} = this.props;
        return (
            <GoogleMap
                defaultCenter={{lat, lng}}
                defaultZoom={zoom}>
                <Places lat={lat} lng={lng} text={'A'}/>
                <Places lat={31.261447} lng={35.214862} text={'B'}/>
            </GoogleMap>

        );
    }
}