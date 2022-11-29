import React from 'react'
import PropTypes from 'prop-types'
import { RssFeed, Chat, PlayCircle, Group, Bookmark, Help, Work, Event, School } from '@mui/icons-material/'
import FriendsList from '../friends/friends.component'

import './leftbar.styles.scss'

const HomeFriendsList = () => {
  return (
    <>
        <hr className="leftbarBottomLine" />
        <h4 className="leftbarFriendsListTitle">Friends List</h4>
        <ul className="leftbarFriendsList">
            <FriendsList/>
        </ul>
    </>
  )
}

const Leftbar = ({ originPage }) => {
  return (
    <>
        <div className="leftbar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItem">
                        <RssFeed className="leftbarListItemIcon"/>
                        <span className="leftbarListItemText">Feed</span>
                    </li>
                    <li className="leftbarListItem">
                        <Chat className="leftbarListItemIcon"/>
                        <span className="leftbarListItemText">Chats</span>
                    </li>
                    <li className="leftbarListItem">
                        <PlayCircle className="leftbarListItemIcon"/>
                        <span className="leftbarListItemText">Videos</span>
                    </li>
                    <li className="leftbarListItem">
                        <Group className="leftbarListItemIcon"/>
                        <span className="leftbarListItemText">Groups</span>
                    </li>
                    <li className="leftbarListItem">
                        <Bookmark className="leftbarListItemIcon"/>
                        <span className="leftbarListItemText">Bookmarks</span>
                    </li>
                    <li className="leftbarListItem">
                        <Help className="leftbarListItemIcon"/>
                        <span className="leftbarListItemText">Questions</span>
                    </li>
                    <li className="leftbarListItem">
                        <Work className="leftbarListItemIcon"/>
                        <span className="leftbarListItemText">Jobs</span>
                    </li>
                    <li className="leftbarListItem">
                        <Event className="leftbarListItemIcon"/>
                        <span className="leftbarListItemText">Events</span>
                    </li>
                    <li className="leftbarListItem">
                        <School className="leftbarListItemIcon"/>
                        <span className="leftbarListItemText">Courses</span>
                    </li>
                </ul>

                <button className="leftbarButton">Show More</button>

                { originPage === 'home' &&
                    <HomeFriendsList/>
                }
            </div>
        </div>
    </>
  )
}

Leftbar.propTypes = {
  originPage: PropTypes.string.isRequired
}

export default Leftbar
