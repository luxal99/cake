import React from 'react';
import axios from 'axios';
import './login.css';
import { Link, Redirect, Route, Switch } from "react-router-dom";
import logo from '../../assets/img/cake-food-logo-9A487CF7AA-seeklogo.com.png';
import Admin from '../admin/Admin'

class Login extends React.Component {


    state = {isLoggedIn : false};

    user = {
        username: '',
        password: ''
    }

    onUsernameChange = event => {
        this.user.username = event.target.value
    }

    onPasswordChange = event => {
        this.user.password = event.target.value
    }


    auth = async e => {

        e.preventDefault();
        let resp = await axios.post('/user/auth', this.user);
        
        if(resp.data)
            this.setState({isLoggedIn : true})
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;

        if (isLoggedIn) {
            return (<Admin></Admin>)
        }

        return (
            <div className="login-div">
                <div className="container  text-center">
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm lg-container"> <img src={logo} alt="" width="200px" className="img-fluid" />
                            <form>

                                <div className="form-div">

                                    <input type="text" placeholder="Username" onChange={this.onUsernameChange} className="" />
                                </div>

                                <div className="form-div">

                                    <input placeholder="Password" type="password" onChange={this.onPasswordChange} className="" />
                                </div>

                                <div className="btn-div">
                                    <button className="login-btn" onClick={this.auth}>login</button>
                                </div>

                            </form>

                        </div>
                        <div className="col-sm"></div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d74176" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            

            
        );
    }

}

export default Login;