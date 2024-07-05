import React, {Component} from 'react';
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "./PostComponent";
interface IProps{
    posts:IPostModel[]
}
class PostsComponent extends Component<IProps>{
    render() {
        return (
            <div>
                {
                    this.props.posts.map((post) => (
                        <PostComponent key={post.id} post={post} />))
                }
            </div>
        );
    }
}

export default PostsComponent;
