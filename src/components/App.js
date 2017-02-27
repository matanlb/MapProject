import React, { Component} from 'react'
import Chapter1 from './chapter1'
import Locations from './locations'
import TabPanel, { TabBody, TabStrip } from 'react-tab-panel'
import Layouts from 'react-layouts';
import Map from './map'

import 'react-tab-panel/base.css'
import 'react-tab-panel/theme/default.css'

const FlexBox = Layouts.FlexBox;
const FlexItem = Layouts.FlexItem;

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        console.log("lng is: " +  this.props.lng);
        return (
         (<FlexBox
        style={{"marginTop":"10px"}}
        flexDirection="column">
        <FlexItem style={{"background":"#F4A460", "height":"120px"}}>
            <div style={ { textAlign: 'center' } }>
                <header>
                <h1 style={{color: '#111', fontFamily: 'Great Vibes, cursive', fontSize: '50px', fontWeight: 'bold',
                    textAlign: 'center',
                    textShadow: '0 1px 1px #fff'}}>Hawaii </h1>
                    <p style={ { fontStyle: 'italic', color: '#B6B6B6', fontSize: '10px', textAlign: 'center', textShadow: '0 1px 1px #fff'} }/>
                </header>
            </div>
        </FlexItem>
        <FlexItem>
            <FlexBox>
                <FlexItem style={{"background":"#F0E68C","flex": "2 1 0%"}}>
                    <TabPanel tabAlign="start">
                        <TabStrip style={ { padding: 10 } } />
                        <TabBody style={ { height: 600 } }>
                            <Chapter1 tabTitle="Introduction" setLocation={this.props.setLocation}/>
                            <Chapter1 tabTitle="Chapter 1" />
                            <Chapter1 tabTitle="Chapter 2" />
                            <Chapter1 tabTitle="Chapter 3" />
                            <Chapter1 tabTitle="Chapter 4" />
                            <Chapter1 tabTitle="Chapter 5" />
                            <Chapter1 tabTitle="Chapter 6" />
                            <Locations tabTitle="Locations" setLocation={this.props.setLocation}/>
                        </TabBody>
                    </TabPanel>
                </FlexItem>
                <FlexItem id="map" style={{"background":"#03a9f4","flex": "1 1 0%"}}>
                    <Map key={ this.props.lng.toFixed() } lat={this.props.lat} lng={this.props.lng} zoom={9}/>
                </FlexItem>
            </FlexBox>
        </FlexItem>
    </FlexBox>


)
        )
    }}

