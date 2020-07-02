import React, { Component } from 'react'
import UserItem from './UserItem';
export class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url:'https://github.com/mojombo'
      },
      {
        id: '22',
        login: "macournoyer",
        avatar_url: "https://avatars3.githubusercontent.com/u/21?v=4",
        html_url: "https://github.com/macournoyer",
      },{
        id: '46',
        login: "bmizerany",
        avatar_url: "https://avatars2.githubusercontent.com/u/46?v=4",
        html_url: "https://github.com/bmizerany",
      }
    ]
  }
  render() {
    return (
      <div style={userStyle}>
        {/* expression */}
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}
export default Users
