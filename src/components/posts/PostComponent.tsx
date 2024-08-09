import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import './Posts.css'
import {NavLink} from "react-router-dom";
interface IProps {
    post:IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div className={'post'}>
            <p>{post.id}.{post.title}</p>
            <NavLink to={post.id.toString()} state={{post}}>Details</NavLink>
        </div>
    );
};

export default PostComponent;