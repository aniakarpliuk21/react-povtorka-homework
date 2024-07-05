import React, {Component} from 'react';
import {IUserModel} from "../../models/IUserModel";
import './Users.css'
type myState = {user:IUserModel} & {lift:(userId:number) => void}

class UserComponent extends Component<myState> {

    render() {
        const onClickHandler = () => {
            this.props.lift(this.props.user.id)
   }
        return (
            <div className={'user'}>
                 {this.props.user.id}.{this.props.user.username}
                 Email-{this.props.user.email}
                 Age-{this.props.user.age}
                 <button onClick={onClickHandler}>User post</button>
                </div>
        );
    }
}

export default UserComponent;
