import React, { useContext, useEffect, useState } from 'react';
import PostService from '../services/PostService';
import { AuthContext } from '../config/AuthProvider';
import Button from '../components/atoms/Button';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [page, _setPage] = useState(0);
    const {isLogged} = useContext(AuthContext);
    const { newest, trending } = PostService();

    useEffect(() => {
        const fetchNewestPosts = async () => {
            if (isLogged) {
                try {
                    const data = await newest(page, 10);
                    
                    if (data && data.content) {
                        setPosts(data.content);
                    } else {
                        console.error("Data format is incorrect");
                    }
                } catch (error) {
                    console.error("Error fetching posts" + error);
                }
            };
        };
        fetchNewestPosts();
    }, [page, newest, isLogged]);

    const handleClick = () => {
        const fetchTrendingPosts = async () => {
            try {
                const data = await trending(page, 10);
                if (data && data.content) {
                    setPosts(data.content);
                } else {
                    console.error("Data format is incorrect");
                }
            } catch (error) {
                console.error("Error fetching posts" + error);
            }
        };
        fetchTrendingPosts();
    };

    return (
        <div>
            <Button text="Trendings" onClick={handleClick}></Button>
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        {!post.owner.username ? <p>Anonymous</p> : <p>{post.owner.username}</p>}
                        {post.attachments && post.attachments.map((attachment) =>
                            attachment.type === "image" ? <img src={attachment.image} alt={attachment.type}/>
                                : <p>{post.content}</p>
                        )}
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;