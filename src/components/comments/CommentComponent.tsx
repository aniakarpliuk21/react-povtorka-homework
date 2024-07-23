import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import './Comments.css'
interface IProps{
    comment:ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div className={'comment'}>
            <span>{comment.id}.{comment.name}</span>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentComponent;