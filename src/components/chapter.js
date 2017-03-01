/**
 * Created by Liat Gofstein on 12/31/2016.
 */
import React, { Component} from 'react';
import _ from 'lodash';

import * as Locations from '../data/locations';

import '../styles/chapters.css';

export default class Chapter extends Component {

    constructor(props) {
        super(props);
        this.state = { textAnalysis: [] };
    }

    /**
     * Map all indices of locations associated with the chapter in the chapter text.
     * These will be replaced with active link on render.
     * Analysis should be performed outside of the render cycle (no need to reanalyze the same text)
     * @param chapter
     */
    analyzeText(chapter) {
        if (_.isEmpty(chapter.locations)) return;
        let text = chapter.text;
        const regexText = _.chain(chapter.locations)
          .map(location => location.name)
          .join('|')
          .value();
        const locationRegex = new RegExp(regexText);

        const analysis = [];
        let startIndex = 0;
        let match =  text.match(locationRegex);
        while(!!match) {
            analysis.push({ index: match.index + startIndex, name: match[0] });
            startIndex += match.index + match[0].length;
            text = text.substring(match.index + match[0].length);
            match = text.match(locationRegex);
        }
        this.setState({ textAnalysis: analysis });
    }

    /**
     * Used implicitly by React.
     * Perform the initial text analysis before the component is mounted
     */
    componentWillMount() {
        this.analyzeText(this.props.chapter);
    }

    /**
     * Used implicitly by React.
     * Re-perform text analysis in case the chapter text in props has changed
     */
    componentWillReceiveProps(newProps) {
        if (this.props.chapter.text !== newProps.chapter.text) {
          this.analyzeText(newProps.chapter);
        }
    }

    setLocation(e, locationName) {
      e.preventDefault();
      const location = _.find(Locations, location => location.name === locationName);
      this.props.setMarkers(location);
      this.props.setLocation(location.lat, location.lng);
    }

    renderLink(key, location) {
        return (
          <a key={key} href="#" onClick={e => this.setLocation(e, location.name)}>
              {location.name}
          </a>
        )
    }

    /**
     * Breaks the chapter text to spans.
     * Pending the state textAnalysis, replaces found occurrences of locations names in the text
     * with map controlling links
     * @returns {Array}
     */
    renderTextSpans() {
        const { textAnalysis } = this.state;
        const { chapter: { text } } = this.props;

        const textSpans = [];
        let key = 0;
        let currentIndex = 0;
        let analysisIndex = 0;

        while (currentIndex < text.length) {
            const locationIndex = _.get(textAnalysis, analysisIndex, {});
            if (currentIndex === locationIndex.index) {
                textSpans.push(this.renderLink(key++, locationIndex));
                ++analysisIndex;
                currentIndex += locationIndex.name.length;
            } else {
                const substring = text.substring(currentIndex, locationIndex.index);
                textSpans.push(<span key={key++}>{substring}</span>);
                currentIndex += substring.length;
            }
        }

        return textSpans;
    }

    render() {
        return (
            <div className="text-container">
                <span>
                    {this.renderTextSpans()}
                </span>
            </div>
        )
    }

}