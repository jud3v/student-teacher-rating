import React from 'react';
import axios from 'axios';
import {withRouter,Link} from "react-router-dom";
import {Password} from 'primereact/password';

class Register extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onClickHandler = e => {
        axios.post('register',this.state)
            .then(() => {
                this.props.history.push('/login')
            })
            .catch(() => {
                alert('Unauthorized')
            })
    }

    render() {
        return (
            <div className="container">
                <div className="card mt-5">
                    <div className="card-header bg-white text-center">
                        <label htmlFor="" className="text-secondary">
                            Register
                        </label>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="" className="text-secondary">
                                Username
                            </label>
                            <input type="text"
                                   name="name"
                                   autoFocus={true}
                                   placeholder="Enter your username"
                                   className="form-control"
                                   value={this.state.name} onChange={this.onChangeHandler}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-secondary">
                                Email
                            </label>
                            <input type="text"
                                   name="email"
                                   placeholder="Enter your email"
                                   className="form-control"
                                   value={this.state.email} onChange={this.onChangeHandler}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-secondary">
                                Password
                            </label>
                            <Password type="password"
                                   name="password"
                                   placeholder="Enter your password"
                                   className="form-control"
                                      promptLabel="Enter a strong password"
                                   value={this.state.password} onChange={this.onChangeHandler}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-secondary">
                                Password Confirmation
                            </label>
                            <input type="password"
                                   placeholder="Confirm your password"
                                   name="password_confirmation"
                                   className="form-control"
                                   value={this.state.password_confirmation} onChange={this.onChangeHandler}/>
                        </div>
                        <button className="btn btn-primary mr-1" disabled={!this.state.name || !this.state.email || !this.state.password || !this.state.password_confirmation} onClick={this.onClickHandler}>
                            Register
                        </button>
                        <Link to="/login" className="btn btn-primary">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);