import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import './Posts.css'
interface IProps {
    post:IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div className={'post'}>
            <p>{post.id}.{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;