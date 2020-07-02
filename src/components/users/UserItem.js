import React from 'react'

// function UserItem () -- we can trun it to arrow function like below
const UserItem=  (props) => {
 
   const {id, login, avatar_url, html_url} =  props.user;
    return (
      <div className='card text-center'>
        <img src={avatar_url}
        alt="" className="round-img"
        style={{width:'60px'}}
        />

    <h3>{id}: {login.toUpperCase()}</h3>

    <div>
      <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
    </div>
      </div>
    );
  
}

export default UserItem
