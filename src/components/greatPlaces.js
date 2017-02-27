/**
 * Created by Liat Gofstein on 2/14/2017.
 */
import React, { Component} from 'react';

import '../styles/marker.css'

export default class Places extends Component {
    render() {
        return (
            <div className="marker">
                {this.props.text}
            </div>
        );
    }
}

Places.defaultProps = { text: '★' };








