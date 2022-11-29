import React from 'react'
import PropTypes from 'prop-types'
import BirthdayNotifications from '../birthday-notifications/birthday-notifications.component'
import Ad from '../ad/ad.component'
import OnlineFriends from '../online-friends/online-friends.component'
import FriendsList from '../friends/friends.component'
import UserInfo from '../user-info/user-info.component'

import './rightbar.styles.scss'

const HomeRightbar = () => {
  return (
    <>
      <BirthdayNotifications/>
      <Ad/>
      <div className="rightbarFriends">
        <h4 className="rightbarFriendsTitle">Online Friends</h4>
          <ul className="rightbarFriendsList">
            <OnlineFriends/>
          </ul>
      </div>
    </>
  )
}

const ProfileRightbar = () => {
  return (
    <>
      <BirthdayNotifications/>
      <hr className="rightbarBottomLine"/>
      <UserInfo/>
      <hr className="rightbarBottomLine"/>
      <div className="userFriends">
        <h4 className="userFriendsTitle">Friends list</h4>
        <ul className="userFriendsList">
            <FriendsList/>
        </ul>
      </div>
      <Ad/>
    </>
  )
}

const Rightbar = ({ originPage }) => {
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          { originPage === 'home' &&
            <HomeRightbar/>
          }
          { originPage === 'profile' &&
            <ProfileRightbar/>
          }
        </div>
      </div>
    </>
  )
}

Rightbar.propTypes = {
  originPage: PropTypes.string.isRequired
}

export default Rightbar
