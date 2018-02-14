import React from 'react';
  import Home from './Home';
  import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
  import JSXRules from '../concepts/JSXRules';
  import Resources from './Resources';
  import ClassComponentDemo from '../ClassComponentDemo';
  import ClassComponentNotes from '../ClassComponentDemo';
  import PropsDemo from '../concepts/PropsDemo';
  import MovieSearchApp from '../apps/movie-search-app/MovieApp';
  import Form from '../apps/movie-search-app/MovieApp';
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
      main: () => < PropsDemo  /> 
    },
    {
      path: '/movie',
      exact: true,
      main: () => < MovieSearchApp />
    }

  ]