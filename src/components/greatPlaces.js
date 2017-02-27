/**
 * Created by Liat Gofstein on 2/14/2017.
 */
import React, { Component} from 'react';
import * as color from "color";


const MARKER_SIZE = 30;
const MARKER_HEIGHT = '40px';
const greatPlaceStyle = {
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    left: -MARKER_SIZE / 2,
    top: -MARKER_SIZE / 2,
    cursor: 'pointer',
    border: '5px solid #FF0000',
    borderRadius: '50%',
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default class Places extends Component {
    render() {
        return (
            <div style={greatPlaceStyle}>
                {this.props.text}
            </div>
        );
    }
}








