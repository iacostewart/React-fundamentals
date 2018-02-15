import React, { Component } from 'react';

import Iframe from 'react-iframe';

    export default class CodepenIframe extends Component {
        render () {

            return (
            <div className="main">
            <div className="mainDiv">
                <h1>Life Cycle Diagram</h1>
                <Iframe url="https://codepen.io/eduardoboucas/full/jqWbdb/"
                    title="codepen iframe"
                    style={{
                        border: 'none',
                        width: '100%',
                        height: '100%',
                        
                    }}
                    >
                    <h1>iframe-react-demo</h1>
                    <p>a simple example</p>
                    </Iframe>
                    </div>
                    </div>
                    
            );
        }
    }




    
