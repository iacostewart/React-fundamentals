import React, { Component } from 'react';


            export default class ClassComponentDemo extends Component {
                constructor(props) {
                    super(props);
                    this.state = { count: 0 };            
        }
        
        incrementCount = () => {
            this.setState(
                { count: this.state.count =1 }
            );
        };
        
        render() {
            return (
                <div className="main">
                    <div className="mainDiv">
                        <classComponentsNotes />
                        <h1>Class components</h1>

            <p>Class compmonents are considered the "React way" of writing components.</p>
            <dl>
                <dt>ES6 JS Classes
                <dd>Built on these, must understand them</dd>
                <dt>must extend Component </dt>
                <dd>Class components need to extend the React Component.</dd>
                <dt>render()</dt>
                <dd>Class components must alwasy have a render method.</dd>
                <dt>export</dt>
                <dd>Only one class component ezported per file.</dd>
                </dt>
            </dl>
                        <hr />
                        <h3>Smash that like button!</h3>
                        <button onClick = { this.incrementCount }>
                        Likes: {this.state.count}</button>
                    </div>
                </div>
            );
        }
        }


       

    
