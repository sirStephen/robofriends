import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/App";
import './index.css';
import 'dotenv/config';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();