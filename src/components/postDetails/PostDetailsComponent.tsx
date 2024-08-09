import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ICommentModel} from "../../models/ICommentModel";
import {commentService} from "../../services/api.services";
import {IPostModel} from "../../models/IPostModel";
import CommentComponent from "../comments/CommentComponent";
interface IProps {
    post:IPostModel
}
const PostDetailsComponent:FC<IProps> = ({post}) => {
    const {postId} = useParams();
    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
commentService.allCommentsByPostId(postId)
    .then(value => setComments(value.data))
    }, [postId]);
    return (
        <div>
            <div className={'post'}>
    {post.id}{post.title}
    {post.body}
</div>
            <div className={'comments'}>
                <p>Comments post # {post.id}</p>
                {
                    comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
                }
            </div>
        </div>
    );
};

export default PostDetailsComponent;