import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {baseUrl, urls} from "../constans/Urls";

const axiosInstance = axios.create({
    baseURL:baseUrl,
    headers:{}
})
const userService = {
    getAllUsers : ():Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get(urls.users.allUsers)
    }
}
const postService = {
    getAllPosts : ():Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get(urls.posts.allPosts)
    },
    allPostsByUserId: (id:string | undefined):Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get('/users/'+id+'/posts')
    }
}
const commentService = {
    getAllComments : ():Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get(urls.comments.allComments)
    },
    allCommentsByPostId: (postId:string | undefined):Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get('/posts/'+postId+'/comments')
    }
}

export {
    userService,
    postService,
    commentService
}