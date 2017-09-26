import React from "react"

const UserItem = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.ip}</td>
        </tr>)
}

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th> IP </th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((user, index) => <UserItem {...user} key={index}/>)}
            </tbody>
        </table>
    )
}

class UserList extends React.Component{

    constructor(props){
        super(props)
        this.state = {"users": []}
    }

    componentDidMount(){
        setInterval(() => this.fetchUsers(), 1000)
    }

    fetchUsers(){
        fetch(this.props["data-url"])
            .then(response => response.json())
            .then(users => this.setState({users: users}))
    }

    render(){
        return (<UserTable users={this.state.users}/>
        )
    }

}

export default UserList
