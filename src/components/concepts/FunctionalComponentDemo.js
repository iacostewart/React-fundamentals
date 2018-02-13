import React from 'react';
import { Card, CardImg, CardText, CardBody, Container,
            CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

const FunctionalComponentDemo = () =>
  
    <Container className="main">
        <Row>
            <Col xs="12">
        
        <h1>Functional Component</h1>
        <p>Functional components allow you to render information to the web page without having to use or change state.</p>
           
                <dl>
                <dt><b><h1>Functional Component</h1></b></dt>
                <dd>Functional Components allow you to render information to the web page without having to use or change state.</dd>
                <dt><b>Presentational</b></dt>
                <dd>Often used for simply rendering a small chunk of code to the dom.</dd>
                <dt><b>No 'this' Keyword</b></dt>
                <dd>Unlike class components, functional ones don't use 'this'.</dd>
                <dt><b>No State</b></dt>
                <dd>These are 'dumb' components for UI.</dd>
                <dt><b>return()</b></dt>
                <dd>Must return a single emement</dd>
                </dl>
           
      
        </Col>
        </Row>


        <hr/>
<h1>Challenge</h1>
    <Row>
        <Col md="6">
            <HelloWorldFatArrow className="logo" />
        </Col>
        <Col md="6">
            <HelloWorld />
         </Col>
    </Row>
    </Container>


export default FunctionalComponentDemo;


const HelloWorldFatArrow = ()=> 
    
        <div>
            <Card>
                <CardImg top width="100%" src="http://vegibit.com/wp-content/uploads/2017/01/es6-fat-arrow-syntax.png" alt="Card image cap" />
              <CardBody>
                 <CardTitle>Fat Arrow</CardTitle>
                 <CardSubtitle>A js Library</CardSubtitle>
                 <CardText>some fancy crap in here about Fat arrow mumbo jumbo</CardText>
                 <Button>Buton</Button>
              </CardBody>
            </Card>
        </div>
    


const HelloWorld = function () {
    return (
        <div> 
            <Card>
                <CardImg top width="100%" src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg" alt="Card image cap" />
               <CardBody>
                   <CardTitle>Regulare ole Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWorld = function() </pre>.</CardText> 
                    <Button>Go Somewhere, Yo</Button>
                </CardBody>
               </Card>
               </div>     
    )

};



      
