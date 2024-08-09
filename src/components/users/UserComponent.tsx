import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import './Users.css'
import {useNavigate} from "react-router-dom";
interface IProps {
    user:IUserModel
}
const UserComponent:FC<IProps> = ({user}) => {
    const navigate = useNavigate()
    const onClickHandler = () => {
        navigate(user.id.toString(), {state: {user}})
    }
    return (
        <div className={'user'}>
            <span>{user.id}.{user.username}</span>
            <button onClick={onClickHandler}>Details</button>
        </div>
    );
};

export default UserComponent;