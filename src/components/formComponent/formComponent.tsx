import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../../validators/postValidator";
import {IFormModel} from "../../models/IFormModel";
import {IPostModel} from "../../models/IPostModel";
import {postServise} from "../../services/jph.api.services";
import PostComponent from "../PostComponent";

const FormComponent = () => {
    let {register,handleSubmit,formState:{errors}} = useForm<IFormModel>({
        mode:"all",resolver:joiResolver(postValidator)})
    const [post, setPost] = useState<IPostModel | null>(null)
const save = (post:IFormModel) => {
        postServise.savePost(post).then(value => setPost(value.data))
}
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type={"text"} {...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}
                <input type={"text"} {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
                <input type={"number"} {...register('userId')}/>
                {errors.userId && <span>{errors.userId.message}</span>}
                <button>Save</button>
            </form>
            {post && <PostComponent key={post.id} post={post}/>}
        </div>
    );
};

export default FormComponent;