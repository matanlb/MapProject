/**
 * Created by Liat Gofstein on 1/29/2017.
 */
import React, { Component } from 'react'
import _ from 'lodash';

import * as Chapters from '../data/chapters';

import '../styles/locations.css';

export default class Locations extends Component {
    updateMarkers(locations) {
      this.props.setMarkers(locations, 1);
    }

    updateLocation(e, location) {
      e.preventDefault();
      this.props.setMarkers(location);
      this.props.setLocation(location.lat, location.lng);
    }

    renderLocations(locations) {
      return _.map(locations, location => {
        const onClick = (e) => this.updateLocation(e, location);
        return (
          <p key={location.name}>
            <a href='#' onClick={onClick}> {location.name} </a>
          </p>
        );
      });
    }

    renderChapter(chapter) {
      const onClick = () => this.updateMarkers(chapter.locations);
      return (
        <div key={chapter.title}>
          <span>
              <h3><b> {chapter.title} </b></h3>
              <button onClick={onClick}> All Locations </button>
          </span>
          <div>
            {this.renderLocations(chapter.locations)}
          </div>
        </div>
      )
    }

    render() {
        const chaptersView = _.chain(Chapters)
          .values()
          .filter(chapter => !_.isEmpty(chapter.locations))
          .map(this.renderChapter.bind(this))
          .value();

        return (
            <div className="container">
              {chaptersView}
            </div>
        )
    }

}