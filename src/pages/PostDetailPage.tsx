import React from 'react';
import PostDetailsComponent from "../components/postDetails/PostDetailsComponent";
import {useLocation} from "react-router-dom";

const PostDetailPage = () => {
    const {state:{post}} = useLocation()
    return (
        <div>
            <PostDetailsComponent post={post}/>
        </div>
    );
};

export default PostDetailPage;