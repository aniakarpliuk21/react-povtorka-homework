import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {useParams} from "react-router-dom";
import {IPostModel} from "../../models/IPostModel";
import {postService} from "../../services/api.services";
import PostComponent from "../posts/PostComponent";
import Post from "../posts/Post";
interface IProps {
    user:IUserModel
}
const UserDetailsComponent:FC<IProps> = ({user}) => {
    const {id} = useParams();
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        if(id){
            postService.allPostsByUserId(id)
                .then((value) => setPosts(value.data))
        }

    }, [id]);
    return (
        <div>
        <div className={'user'}>
            <span>Name - {user.name}</span>
            <span>Username - {user.username}</span>
            <span>Email - {user.email}</span>
        </div>
            <div className={'posts'}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
        </div>
    );
};

export default UserDetailsComponent;