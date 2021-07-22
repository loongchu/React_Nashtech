import React, {useEffect, useState} from 'react';
import axios from "axios";
import './DetailPost.css'
import {useParams} from "react-router-dom";
const DetailPost = () => {

    let{id} = useParams();
    const [posts, setPosts] = useState([{
        id: null,
        title: '',
        description: '',
        content: '',
        createDate: null
    }]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/posts/detail/${id}`)
            .then(response => {
                console.log(response);
                setPosts(response.data);
            })
            .catch(errors => {
                console.log(errors);
            });
    },[]);
    return (
        <div className="detail">
            <h1>{posts.title}</h1>
            <h2>{posts.content}</h2>
            <h3>{posts.description}</h3>
        </div>
    );
};

export default DetailPost;