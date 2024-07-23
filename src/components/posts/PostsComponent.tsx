import React, {useEffect, useState} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {postService} from "../../services/api.services";
import PostComponent from "./PostComponent";
import './Posts.css'

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        postService.getAllPosts().then(({data}) =>setPosts(data))
    }, []);
    return (
        <div className={'posts'}>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;