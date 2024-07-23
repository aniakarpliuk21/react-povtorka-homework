import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import {commentService} from "../../services/api.services";
import CommentComponent from "./CommentComponent";
import './Comments.css'

const CommentsComponent = () => {
    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        commentService.getAllComments().then(({data}) => setComments(data))
    }, []);
    return (
        <div className={'comments'}>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;