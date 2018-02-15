import React, { Component } from 'react';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'

            export default class ClassComponentDemo extends Component {
                constructor(props) {
                    super(props);
                    this.state = { incrementCount: 0, decrementCount: 0 };            
        }
        incrementCount = () => {
            this.setState(
                { incrementCount: this.state.incrementCount + 1 }
            );
        };
        
        decrementCount = () => {
          
            this.setState(
                { decrementCount: this.state.decrementCount - 1 }
            
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
                        <button onClick = { this.incrementCount }><FaThumbsUp />
                        Likes: {this.state.incrementCount}</button>
                    
                        <hr />
                        <h3>Dont like it... Click here and then go cry in your own corner...</h3>
                        <button onClick = { this.decrementCount }><FaThumbsDown />
                        Dislikes: {this.state.decrementCount}</button>
                        </div>
                </div>
                
            );
        }
        }


       

    
