import React from 'react';
import UserDetailsComponent from "../components/userDetails/UserDetailsComponent";
import {useLocation} from "react-router-dom";

const UserDetailsPage = () => {
    const {state:{user}} = useLocation()
    return (
        <div>
            <UserDetailsComponent user={user}/>
        </div>
    );
};
export default UserDetailsPage;