import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import './Users.css'
interface IProps {
    user:IUserModel
}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div className={'user'}>
            <span>{user.id}.{user.username}</span>
            <p>Email-{user.email}</p>
            <p>Username-{user.username}</p>
        </div>
    );
};

export default UserComponent;