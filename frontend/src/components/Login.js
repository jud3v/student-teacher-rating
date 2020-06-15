import React from 'react';
import axios from 'axios';
import {withRouter,Link} from "react-router-dom";
import {Growl} from 'primereact/growl';

class Login extends React.Component {

    state = {
        email: '',
        password: '',
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onClickHandler = e => {
        axios.post('login',this.state)
            .then(({data}) => {
                localStorage.setItem('token',data.token)
                this.growl.show({severity: 'success', summary: 'Login Success', detail: 'Valid Credentials'});
                this.props.history.push('/')
            })
            .catch(() => {
                this.growl.show({severity: 'error', summary: 'Login Error', detail: 'Invalid Credentials'});
            });
    }

    render() {
        return (
            <div className="container">
                <Growl ref={(el) => this.growl = el} />
                <div className="card mt-5">
                    <div className="bg-white card-header text-center">
                        <label htmlFor="" className="text-secondary">
                            Login
                        </label>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="" className="text-secondary">
                                E-mail
                            </label>
                            <input placeholder="Enter email"
                                   type="text"
                                   autoFocus={true}
                                   className="form-control"
                                   name="email"
                                   value={this.state.email}
                                   onChange={this.onChangeHandler}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-secondary">
                                Password
                            </label>
                            <input placeholder="Enter password"
                                   type="password"
                                   className="form-control"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.onChangeHandler}/>
                        </div>
                        <button onClick={this.onClickHandler} disabled={!this.state.email || !this.state.password} className="btn btn-primary mr-1">
                            Login
                        </button>
                        <Link to="/register" className="btn btn-primary">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);