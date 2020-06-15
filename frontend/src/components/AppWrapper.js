import React from 'react';
import {withRouter} from "react-router-dom";
import App from '../App';
import Login from './Login';
import Register from './Register';

class AppWrapper extends React.Component {


    render() {
        switch (this.props.location.pathname) {
            case '/login':
                return <Login />
            case '/register':
                return <Register />
            default :
                return <App />
        }
    }
}

export default withRouter(AppWrapper);