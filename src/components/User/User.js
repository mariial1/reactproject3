import React, {Component} from 'react';

class User extends Component {
    render() {

        let {item, onUserChose, isShowButton} = this.props;
        return (
            <div>
                {item.id} - {item.name} - {item.email} {isShowButton &&
                <button onClick={() => {onUserChose(item.id);}}>chose me</button>}
            </div>
        );
    }
}

export default User;