import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../App.css';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h4>Posts</h4>
            <ul>
                {posts.map((p) => (
                    <li key={p.id}>
                        <Link to={`/${p.id}`}>{p.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/create">
                <p>Create Post</p>
            </Link>
        </div>
    );
};

export default PostList;
