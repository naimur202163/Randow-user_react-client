import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    return (
        <div >
            <div className="text-muted text-center my-5"><h1>PLS  Login</h1></div>
            <Row>
                <Col >
                    <div className=" d-flex justify-content-center">
                        <form className="" onSubmit={handleLoginSubmit} >

                            <input style={{ width: "100%" }}
                                className="form-control my-4"
                                name="email"
                                type="email"
                                onChange={handleOnChange}
                                placeholder="Enter Your email"
                            />
                            <input style={{ width: "100%" }}
                                type="password"
                                className="form-control my-4"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                placeholder="Enter Your PassWord"
                            />

                            <Button className="btn-info " type="submit" >Login</Button>
                            <h4 className="text-muted my-4">Dont have Account pls <Link to="/registar"> SIGN Up</Link></h4>
                        </form>

                    </div>

                </Col>
            </Row>

        </div>






    );
};

export default Login;