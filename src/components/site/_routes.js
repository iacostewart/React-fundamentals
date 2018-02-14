import React from 'react';
  import Home from './Home';
  import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
  import JSXRules from '../concepts/JSXRules';
  import Resources from './Resources';
  import ClassComponentDemo from '../ClassComponentDemo';
  import ClassComponentNotes from '../ClassComponentDemo';
  import PropsDemo from '../concepts/PropsDemo'
  export const routes = [{
      path: '/' || '/home',
      exact: true,
      main: () => < Home />
    },
  {
     path: '/functionalcomponent',
    exact: true,
    main: () => < FunctionalComponentDemo />
   },
    {
      path: '/jsxrules',
      exact: true, 
      main: () => <JSXRules />
    },
    {
      path: '/resources',
      exact: true,
      main: () => < Resources />
    },
    {
      path: '/classcomponentdemo',
      exact: true, 
      main: () => < ClassComponentDemo />
    },
    {
      path: '/propsdemo',
      exact: true, 
      main: () => <div> 
                    
                    < PropsDemo title="Beast with Beard"/>
                    < PropsDemo  author="Adam Smith" />
                    < PropsDemo codepen= "https://codepen.io/Adamws33/pen/KZQxwJ" />
                    < PropsDemo date="01/15/2018" /> 
                  
                  
                    < PropsDemo title="Celtic Beast" /> 
                    < PropsDemo author="Allison Summers"/>
                    < PropsDemo codepen="https://codepen.io/alsummers/pen/jYzyZZ" />
                    < PropsDemo date="01/15/18" />
                  
                  
                    < PropsDemo title="Beast from Caracas" /> 
                    < PropsDemo author="Andres(Dre) Martin"/>
                    < PropsDemo codepen="https://codepen.io/dreMartin/pen/eyVLGN" />
                    < PropsDemo date="01/15/18" />
                  
                  
                    < PropsDemo title="Beast with the Flu" /> 
                    < PropsDemo author="Andrew Gunst"/>
                    < PropsDemo codepen="https://codepen.io/agunst99/pen/RxMYOM" />
                    < PropsDemo date="01/15/18" />
                  
</div>
    }
  ]