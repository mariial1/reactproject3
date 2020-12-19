import React, {Component} from 'react';
import User from "../User/User";
import {UserService} from "../services/UserService";

class AllUsers extends Component {

    userService = new UserService();

    state = {users: [], chosenOne: null};

    // onUserChose = (id) => this.setState({chosenOne: this.state.users.find(value => value.id === id)});

    onUserChose = (id) => {
        this.userService.getUserById(id).then(value => this.setState({chosenOne:value}));
    }

        componentDidMount() {
        this.userService.getAllUsers().then(value => this.setState({users: value}))

    }

    render() {
        let {users, chosenOne} = this.state;
        return (
            <div>
                {
                    users.map(value => (<User item={value} key={value.id} onUserChose={this.onUserChose} isShowButton={true}/>))
                }
                    {chosenOne && <User item={chosenOne} isShowButton={false}/>}
            </div>
        );
    }
};

export default AllUsers;