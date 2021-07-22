import React, {useEffect, useState} from 'react';
import axios from "axios";
import './ListPosts.css'
import {Link} from "react-router-dom";

const ListPosts = () => {
    const [posts, setPosts] = useState([{
        id: null,
        title: '',
        description: '',
        content: '',
        createDate: null
    }]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/posts/get10posts')
            .then(response => {
                console.log(response);
                setPosts(response.data);
            })
            .catch(errors => {
                console.log(errors);
            });
    },[]);
    return (
        <div>
            <div className="body-content">
                {posts.map( posts => (
                    <div>
                    <article className="body-content--post">
                        <a href="#">
                            <h2 className="text-hover text-title">{posts.title}</h2>
                            <h3 className="text-hover text-description">{posts.content}</h3>
                        </a>
                        <p>Posted by Ocean Nguyen on May 20, 2019 · 8 mins read</p>
                        <div className="body-btn">
                            <Link to={{pathname: `/detailPost/${posts.id}`}}>
                                <button className="btn">
                                    Detail
                                </button>
                            </Link>
                            <Link to={{pathname: `/editPost/${posts.id}`}}>
                            <button className="btn">Edit</button>
                            </Link>
                        </div>
                    </article>
                        <hr/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListPosts;