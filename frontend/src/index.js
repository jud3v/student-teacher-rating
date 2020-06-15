import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from "./components/AppWrapper";
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const check = jwtDecode(localStorage.getItem('token'));
const dateNow = Date.now();

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'


ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <AppWrapper />
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();