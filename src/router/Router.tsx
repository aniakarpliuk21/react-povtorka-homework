import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import DefaultPage from "../pages/DefaultPage";
import ErrorLayout from "../layouts/ErrorLayout";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts/>,
        errorElement:<ErrorLayout/>,
        children:[
        {element:<DefaultPage/>,index:true},
        {path:'users',element:<UsersPage/>},
        {path:'posts',element:<PostsPage/>},
        {path:'comments',element:<CommentsPage/>}
    ]}
])