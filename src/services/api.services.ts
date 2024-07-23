import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{}
})
const userService = {
    getAllUsers : ():Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get('/users')
    }
}
const postService = {
    getAllPosts : ():Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get('/posts')
    }
}
const commentService = {
    getAllComments : ():Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get('/comments')
    }
}

export {
    userService,
    postService,
    commentService
}