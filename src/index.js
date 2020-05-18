import React from 'react';
import { render } from 'react-dom';

import App from './App'

/** 
 * Inseriondo o componente App dentro da TAG HTML app
 * public/index.html -> <div.id="app">
 */
render(<App />, document.getElementById('app'));