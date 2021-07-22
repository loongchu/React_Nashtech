import React from 'react';
import background from "../img/bg-index.jpg";
import logo from "../img/ocean_logo.png";
import {Button, Form, FormControl, Nav} from "react-bootstrap";
import './Header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="header" style={{backgroundImage: `url(${background})`}}>
                <div className="overlay"></div>
                <div className="header-navbar container relative">
                    <div><a href="#"> <img src={logo} alt="Logo" className="logo-style relative"/> </a></div>
                    <div className="nav-bar nav-link">
                        <Nav
                            activeKey="/home"
                            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                        >
                            <Link className="nav-link" to="/homePage">HOME</Link>
                            <Link className="nav-link" to="/listPosts">POSTS</Link>
                            <Nav.Link eventKey="link-2">ABOUT</Nav.Link>
                            <Nav.Link eventKey="link-3">CONTACT</Nav.Link>
                            <Link className="nav-link" to="/login">LOGIN</Link>
                        </Nav>
                        <Form className="d-flex search-input">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" >
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="header-content relative">
                    <p>Ocean Nguyen</p>
                    <span>Engineer/ Video creater</span>
                </div>
            </div>
        </div>
    );
};

export default Header;