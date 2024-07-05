import React, {Component} from 'react';
import {getAllPostsOfUser, getAllUsers} from "../../services/Dummy.api.services";
import {IUserModel} from "../../models/IUserModel";
import UserComponent from "./UserComponent";
import {IPostModel} from "../../models/IPostModel";
import PostsComponent from "../posts/PostsComponent";
import './Users.css'
type myState = {
    users:IUserModel[],
    posts:IPostModel[]
}
class UsersComponent extends Component<{},myState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            users: [],
            posts: []
        };
        this.lift = this.lift.bind(this);
    }
    componentDidMount() {
      getAllUsers().then(({data:{users}}) => this.setState({users}))
}
    lift(userId: number) {
        getAllPostsOfUser(userId).then(({ data: { posts } }) =>
        this.setState({posts}));

    }
    render() {
        return (
            <div className={'userandpost'}>
                <div className={'users'}>
                    {
                        this.state.users.map((user: IUserModel) => <UserComponent key={user.id}
                                                                                  lift={this.lift}
                                                                                  user={user}/>)}
                </div>
                <div className={'posts'}>
                    <PostsComponent posts={this.state.posts}/>
                </div>
            </div>
        );
    }
}

export default UsersComponent
