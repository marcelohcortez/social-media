import React from 'react'
import { Online } from '../../dummyData'

import './online-friends.styles.scss'

function OnlineFriends () {
  return (
    Online.map((user) =>
        <li className="rightbarFriendsListItem" key={user.id}>
            <div className="rightbarFriendsListItemProfile">
                <img className="rightbarFriendsListItemProfileImage" src={user.profilePicture} alt=""/>
                <span className="rightbarFriendsListItemProfileBadge"></span>
            </div>
            <span className="rightbarFriendsListItemUsername">{user.username}</span>
        </li>
    )
  )
}

export default OnlineFriends
