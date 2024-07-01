import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IUserResponceModel} from "../models/IUserResponceModel";
import {IPostResponceModel} from "../models/IPostResponceModel";

let axiosInstance = axios.create({
    baseURL:'https://dummyjson.com',
    headers:{}
})
const getAllUsers = ():Promise<AxiosResponse<IUserResponceModel>> => {
    return axiosInstance.get('/users')
}
const getAllPostsOfUser = (UserId:number):Promise<AxiosResponse<IPostResponceModel>> => {
    return axiosInstance.get('/user/' +UserId + '/posts')
}

export{
    getAllUsers,
    getAllPostsOfUser
}