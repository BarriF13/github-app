import React from 'react'
import PropTypes from 'prop-types'
// function UserItem () -- we can turn it to arrow function like below -- user has prop(arguments) so we need to set it's prop types below. 
const UserItem = ({ user: { id, login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img src={avatar_url}
        alt="" className="round-img"
        style={{ width: '60px' }}
      />

      <h3>{id}: {login.toUpperCase()}</h3>

      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
      </div>
    </div>
  );

}
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}
export default UserItem
