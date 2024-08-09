import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import DefaultPage from "../pages/defaultPage/DefaultPage";
import ErrorLayout from "../layouts/ErrorLayout";
import UserDetailsPage from "../pages/UserDetailsPage";
import PostDetailPage from "../pages/PostDetailPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts/>,
        errorElement:<ErrorLayout/>,
        children:[
        {element:<DefaultPage/>,index:true},
        {path:'users',element:<UsersPage/>},
            {path:'users/:id',element:<UserDetailsPage/>},
        {path:'posts',element:<PostsPage/>},
            {path:'posts/:postId', element:<PostDetailPage/>},
        {path:'comments',element:<CommentsPage/>}
    ]}
])