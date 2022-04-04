import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.js';

//跟後端溝通 https://github.com/scps960740/react-course-resources/tree/master/ch06/bruce-be
const express = require('express');
const cors = require('cors');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

// Automatically allow cross-origin requests
app.use(cors());

app.get('/', function(req, res) {
  console.log('hit');
  // http code
  res.status(200).sendFile(path.join(__dirname, 'public/index.html'))
  // res.send('hello!')
})

app.get('/user/:username/repos', function(req, res) {
  console.log('hit');
  // http code
  res.status(200).sendFile(path.join(__dirname, 'public/index.html'))
  // res.send('hello!')
})

app.get('/user/:username/repos/:repo', function(req, res) {
  console.log('hit');
  // http code
  res.status(200).sendFile(path.join(__dirname, 'public/index.html'))
  // res.send('hello!')
})

app.listen(4000, () => {
  console.log('on 4000')
})


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);