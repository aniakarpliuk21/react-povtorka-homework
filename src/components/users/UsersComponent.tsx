import React, {useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {userService} from "../../services/api.services";
import UserComponent from "./UserComponent";
import './Users.css'
const UsersComponent = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data))
    }, []);
    return (
        <div className={'users'}>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;