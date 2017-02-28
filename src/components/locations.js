/**
 * Created by Liat Gofstein on 1/29/2017.
 */
import React, { Component } from 'react'

import * as Chapters from '../data/chapters';

import '../styles/locations.css';

export default class Locations extends Component {
    updateMarkers(locations) {
      this.props.setMarkers(locations, 1);
    }

    updateLocation(location) {
      this.props.setMarkers(location);
      this.props.setLocation(location.lat, location.lng);
    }

    renderLocations(locations) {
      const locationViews = [];
      for (const location of Object.values(locations)) {
        const onClick = () => this.updateLocation(location);
        locationViews.push(
          <p key={location.name}>
            <a href='#' onClick={onClick}> {location.name} </a>
          </p>
        );
      }

      return locationViews;
    }

    renderChapter(chapter) {
      const onClick = () => this.updateMarkers(chapter.locations);
      return (
        <div>
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
        return (
            <div className="container">
              {this.renderChapter(Chapters.Chapter1)}
              {this.renderChapter(Chapters.Chapter2)}
            </div>
        )
    }

}