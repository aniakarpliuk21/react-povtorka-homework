import React, {FC, useEffect, useState} from 'react';
import './Users.css'
import {IUserModel} from "../../models/IUserModel";
import {getAllPostsOfUser, getAllUsers} from "../../services/Dummy.api.services";
import UserComponent from "./UserComponent";
import {IPostModel} from "../../models/IPostModel";
import PostsComponent from "../posts/PostsComponent";
import PostComponent from "../posts/PostComponent";

const UsersComponent:FC = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        getAllUsers().then(({data:{users}}) => setUsers(users))
    }, []);
    const lift = (userId:number) => {
        getAllPostsOfUser(userId).then(({data:{posts}}) => setPosts(posts))
    }
    return (
        <div className={'userandpost'}>
            <div className={'users'}>
                {
                    users.map((user) => <UserComponent key={user.id} lift={lift} user={user}/>)
                }
            </div>
           <div className={'posts'}>
               <PostsComponent posts={posts}/>
           </div>
        </div>
    );
};


export default UsersComponent;