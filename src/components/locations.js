/**
 * Created by Liat Gofstein on 1/29/2017.
 */
import React, { Component } from 'react'

import { locations1, locations2 } from '../data/locations';

export default class Locations extends Component {

    updateLocation(location) {
      this.props.setLocation(location.lat, location.lng);
      return false
    }

    renderLocations(locations) {
      const locationViews = [];
      for (const location of locations) {
        const onClick = () => this.updateLocation(location);
        locationViews.push(
          <p key={location.name}>
            <a href="#" onClick={onClick}> {location.name} </a>
          </p>
        );
      }
    }

    render() {
        return (
            <div style={ {
                padding: "16",
                border: "1 solid rgb(115, 115, 115)",
                color: "rgb(115, 115, 115)",
                overflow: "auto"
            }}>
                <h3><b> Chapter 1 - From the Boundless Deep </b></h3>
                <div>
                  {this.renderLocations(locations1)}
                </div>
                <h3><b> Chapter 2 - From the Sun-Swept Lagoon </b></h3>
                <div>
                  {this.renderLocations(locations2)}
                </div>
            </div>
        )
    }

}