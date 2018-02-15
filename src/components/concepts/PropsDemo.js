import React, { Component } from 'react';

import PropTypes from 'prop-types';

export const Projects = [
    {title: 'Beast Creature', author: 'Adam Smith', codepenUrl: 'https://codepen.io/adamws33/pen/KZQxwJ', date: '01/15/18' },
    { title: 'Another Beast', author: 'Allison Summers', codepenUrl: 'https://codepen.io/alsummers/pen/vpjXOX', date: '01/15/2018' },
    { title: 'Beast Mode', author: 'Andres Martin', codepenUrl: 'https://codepen.io/dreMartin/pen/eyVLGN', date: '01/15/2018' },
    { title: 'Beasty', author: 'Andrew Gunst', codepenUrl: 'https://codepen.io/agunst99/pen/RxMYOM', date: '01/15/2018' },
]


    export default class PropsDemo extends Component {
        constructor(props) {
            super(props)
                console.log('PropsDemo Class', props);
                this.state = { projects: Projects};
                console.log('State ChecK', this.state.projects);
        }
       
            
                
           
              render() {
                        const work = this.state.projects.map((project, i) => {
                            console.log("project data lives here", project);
                            console.log("index lives here", i)
            
            return (
               
                         <div key={i}>
                             <Title key title={project.title} />
                             <Author key author={project.author} />
                             <CodepenUrl  codepenUrl={project.codepenUrl} />
                             <Footer date={project.date} />
                             <hr/>
                         </div>
         );
         
         })
                return (
                    <div className="main">
                        <div className="mainDiv">
                            <h1>Student Creature Projects</h1>
                            <hr/>
                            <div>
                                     {work}
                            </div>
                        </div>
                    </div>
                )


            }
        }



    class Title extends Component {
        constructor(props) {
            super(props)
            console.log('Title props:', props);
        }
        render() {
            
            return (
                <p>
                    {this.props.title}
               </p>
            );
        }
    }

    class Author extends Component {
        constructor(props) {
            super(props) 
            console.log("Author Props", props)
        }
        render() {
            return (
                <h3>
                    <p>{this.props.author}</p>
                </h3>
            );
        }

    }
    class CodepenUrl extends React.Component {
        constructor(props) {
            super(props) 
            console.log("CodePen Props", props)
        }
        render() {
            return (
                <h3>
                    {this.props.codepenUrl}
                </h3>
            )
        }
    }
    class Footer extends React.Component {
        constructor(props) {
            super(props) 
            console.log("Date Props", props)
        }
        render() {
            return (
                <h3>
                    {this.props.date}
                </h3>
            );
        }
    }
    
PropsDemo.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    codepenUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

PropsDemo.defaultProps = {
    title: 'The Whois of JS',
    author: 'john doe',
    codepenUrl: 'wwwawsomeURLcom',
    date: 'y2k is real..'
}