/**
 * Created by Liat Gofstein on 12/31/2016.
 */
import React, { Component} from 'react';
import _ from 'lodash';

import Places from './greatPlaces';

import GoogleMap from 'google-map-react';

export default class Map extends Component {

    constructor(props) {
        super(props);
    }

    renderLocations() {
        return _.map(this.props.markers, marker =>
          <Places key={marker.lat.toString()} lat={marker.lat} lng={marker.lng} />);
    }

    render() {
        const { defaultCenter, zoom } = this.props;
        return (
            <GoogleMap
                center={{ lat: defaultCenter.lat, lng: defaultCenter.lng }}
                zoom={zoom}
            >
                {this.renderLocations()}
            </GoogleMap>

        );
    }
}