import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();

    const fetchPost = async (id) => {
        try {
            const response = await api.get(`posts/${id}`);
            setPost(response.data);
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    };

    useEffect(() => {
        fetchPost(id);
    }, [id]);

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <h3>{post.title} ID {id}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default SinglePost;
