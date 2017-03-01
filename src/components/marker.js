/**
 * Created by Liat Gofstein on 2/14/2017.
 */
import React, { Component} from 'react';
import _ from 'lodash';

import '../styles/marker.css'

export default class Places extends Component {
    renderTooltip() {
        const { showTooltip, toolTip } = this.props;
        if (_.isNil(toolTip) || !showTooltip) return null;
        return (
          <div className="tool-tip">
              {toolTip}
          </div>
        );
    }

    render() {
        return (
            <div className="marker">
                <div>{this.props.text}</div>
                {this.renderTooltip()}
            </div>
        );
    }
}

Places.defaultProps = {
    text: '★',
    showTooltip: false,
};
