import React from 'react';

import PropTypes from 'prop-types';


    export default class PropsDemo extends React.Component {
        render() {
            return (
                <div className="main">
                    <div className="mainDiv">
                                 <p>{this.props.title}</p>
                               <p> {this.props.author}</p>
                                <p>{this.props.codepen}</p>
                                <p>{this.props.date}</p>
                            

                    </div>
                </div>
            )
        }
    }
    
PropsDemo.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    codepen: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

PropsDemo.defaultProps = {
    title: 'The Whois of JS',
    author: 'john doe',
    codepen: 'wwwawsomeURLcom',
    date: 'y2k is real..'
}