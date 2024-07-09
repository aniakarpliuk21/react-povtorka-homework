import axios, {AxiosResponse} from "axios";
import {IFormModel} from "../models/IFormModel";
import {IPostModel} from "../models/IPostModel";

let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{'Content-type': 'application/json; charset=UTF-8'}
    })

const postServise = {
    savePost:({title,body,userId}:IFormModel):Promise<AxiosResponse<IPostModel>> => {
        return axiosInstance.post('/posts',
            {title,body,userId})
    }
}

export {
    postServise
}