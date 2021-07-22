import React from 'react';

import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import './HomePage.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import EditPost from "../../component/EditPost/EditPost";
import DetailPost from "../../component/DetailPost/DetailPost";
import ListPosts from "../../component/ListPosts/ListPosts";
import HomePage from "./HomePage";

const Home = ({currentUser,setCurrentUser})=> {
    return (
        <div>
            <Header/>
                <Switch>
                    <Route path="/homePage">
                        <HomePage/>
                    </Route>
                    <Route path="/listPosts">
                        <ListPosts/>
                    </Route>
                    <Route path="/editPost">
                        <EditPost/>
                    </Route>
                    <Route path="/detailPost/:id">
                        <DetailPost/>
                    </Route>
                    <Route path="/login">
                        <LoginPage
                            currentUser = {currentUser}
                            setCurrentUser = {setCurrentUser}
                        />
                    </Route>
                </Switch>
            <Footer/>
        </div>
    );
};
export default Home;