import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
type IProps = {user:IUserModel} & {lift:(userId:number) => void}
const UserComponent:FC<IProps> = ({user,lift}) => {
    const onClickHandler = () => {
        lift(user.id)
    }
    return (
        <div className={'user'}>
            {user.id}.{user.username}
            Email-{user.email}
            Age-{user.age}
            <button onClick={onClickHandler}>User post</button>
        </div>
    );
};

export default UserComponent;