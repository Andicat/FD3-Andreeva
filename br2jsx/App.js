"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import BR2JSX from './components/BR2JSX';
import './components/BR2JSX.css';

let text="первый<br>второй<br/>третий<br />последний";

ReactDOM.render(
  React.createElement(BR2JSX ,{text:text}),
  document.getElementById('container') 
);
