import React, { Component} from 'react';
import Chapter1 from './chapter1';
import Locations from './locations';
import TabPanel, { TabBody, TabStrip } from 'react-tab-panel';
import { FlexBox, FlexItem } from 'react-layouts';
import Map from './map';

import 'react-tab-panel/base.css';
import 'react-tab-panel/theme/default.css';
import '../styles/main.css';

// FlexBox only supports inline style and not className
const flexBoxStyle = { marginTop: '10px' };
const flexItemHeaderStyle = {
    background: '#F4A460',
    height: '120px',
};
const flexItemBodyStyle = {
    background: '#F0E68C',
    flex: '2 1 0%',
};
const flexItemMapStyle = {
    background: '#03a9f4',
    flex: '1 1 0%',
};
const tabStripStyle = {
    padding: 10,
};
const tabBodyStyle = {
    height: 600,
};

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <FlexBox style={flexBoxStyle} flexDirection="column">
              <FlexItem style={flexItemHeaderStyle}>
                  <div className="align-center">
                      <header>
                          <h1 className="main-header">Hawaii</h1>
                          <p className="main-paragraph"/>
                      </header>
                  </div>
              </FlexItem>
              <FlexItem>
                  <FlexBox>
                      <FlexItem style={flexItemBodyStyle}>
                          <div className="main-flex-item">
                              <TabPanel tabAlign="start">
                                  <TabStrip style={tabStripStyle} />
                                  <TabBody style={tabBodyStyle}>
                                      <Chapter1 tabTitle="Introduction" setLocation={this.props.setLocation}/>
                                      <Chapter1 tabTitle="Chapter 1" />
                                      <Chapter1 tabTitle="Chapter 2" />
                                      <Chapter1 tabTitle="Chapter 3" />
                                      <Chapter1 tabTitle="Chapter 4" />
                                      <Chapter1 tabTitle="Chapter 5" />
                                      <Chapter1 tabTitle="Chapter 6" />
                                      <Locations
                                        tabTitle="Locations"
                                        setLocation={this.props.setLocation}
                                        setMarkers={this.props.setMarkers}
                                      />
                                  </TabBody>
                              </TabPanel>
                          </div>
                      </FlexItem>
                      <FlexItem id="map" style={flexItemMapStyle}>
                          <Map
                            key={this.props.mapCenter.lng.toFixed()}
                            defaultCenter={this.props.mapCenter}
                            markers={this.props.markers}
                            zoom={this.props.zoom}
                          />
                      </FlexItem>
                  </FlexBox>
              </FlexItem>
          </FlexBox>
        );
    }
}
