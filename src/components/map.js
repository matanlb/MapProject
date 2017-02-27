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

    renderLocations() {
        const markers = [];
        for (const marker of this.props.markers) {
            markers.push(<Places key={marker.lat.toString()} lat={marker.lat} lng={marker.lng} />);
        }
        return markers
    }

    render() {
        const { defaultCenter, zoom } = this.props;
        return (
            <GoogleMap
                center={{ lat: defaultCenter.lat, lng: defaultCenter.lng }}
                defaultZoom={zoom}>
                {this.renderLocations()}
            </GoogleMap>

        );
    }
}