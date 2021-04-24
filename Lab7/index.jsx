import React from 'react';
import {render} from 'react-dom'; //This is the entry pint to the react application
//i want to render my react application inside a div

import App from './App';

//In this application is going to print hello world inside the div using react

//This is how pushing something react onto dom element
//inside render "<h1>Hello React</h1>" , this is actually jsx
//render(<h1>Hello React</h1>,document.getElementById('app'));

render(<App/>, document.getElementById('app'));




//Each and every React file you have to import like this

