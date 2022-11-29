import React from 'react'
import { Friends } from '../../dummyData'

import './friends.styles.scss'

function FriendsList () {
  return (
    Friends.map((user) =>
        <li className="leftbarFriend" key={user.id}>
            <img src={user.profilePicture} alt="" className="leftbarFriendProfilePicture" />
            <span className="leftbarFriendName">{user.username}</span>
        </li>
    )
  )
}

export default FriendsList
