import React from 'react';

import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import './HomePage.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import EditPost from "../../component/EditPost/EditPost";
import DetailPost from "../../component/DetailPost/DetailPost";
import ListPosts from "../../component/ListPosts/ListPosts";

const HomePage = ({currentUser,setCurrentUser})=> {
    return (
        <div>
            {/*body*/}
            <div className="body-content">
                <h1>Welcome to the my-list-post website.</h1>
                <h2>This website helps you to see posts containing interesting knowledge about Java or programming.</h2>
                <h2>You can also create your own posts.</h2>
            </div>
            {/*body*/}
        </div>
    );
};
export default HomePage;