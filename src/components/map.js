/**
 * Created by Liat Gofstein on 12/31/2016.
 */
import React, { Component} from 'react';
import _ from 'lodash';

import Marker from './marker';

import GoogleMap from 'google-map-react';

export default class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            center: this.props.center,
            hoverKey: null,
        };

        this.markerClick = this.markerClick.bind(this);
        this.mapMoved = this.mapMoved.bind(this);
        this.markerHoverIn = this.markerHoverIn.bind(this);
        this.markerHoverOut = this.markerHoverOut.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.center !== newProps.center) {
            this.setState({ center: newProps.center });
        }
    }

    markerClick(key, marker) {
        this.setState({ center: { lat: marker.lat, lng: marker.lng } });
    }

    markerHoverIn(key) {
        this.setState({ hoverKey: key });
    }

    markerHoverOut(key) {
        this.setState({ hoverKey: null });
    }

    mapMoved(movementData) {
        this.setState({ center: movementData.center });
    }

    renderLocations() {
        return _.map(this.props.markers, marker =>
          <Marker
              key={marker.lat}
              lat={marker.lat}
              lng={marker.lng}
              toolTip={marker.name}
              showTooltip={this.state.hoverKey === marker.lat.toString()}
            />
        );
    }

    render() {
        const { zoom } = this.props;
        const { center } = this.state;
        return (
            <GoogleMap
                center={center}
                zoom={zoom}
                onChildClick={this.markerClick}
                onChange={this.mapMoved}
                onChildMouseEnter={this.markerHoverIn}
                onChildMouseLeave={this.markerHoverOut}
            >
                {this.renderLocations()}
            </GoogleMap>

        );
    }
}