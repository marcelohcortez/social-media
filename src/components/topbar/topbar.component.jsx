import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Person, Chat, Notifications } from '@mui/icons-material/'

import './topbar.styles.scss'

const Topbar = () => {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">The Social</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className="searchIcon"/>
                <input placeholder="Search for friend, pos or video" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <Link className="topbarLink" to='/'>
                    Homepage
                </Link>
                <Link className="topbarLink" to='/profile'>
                    Profile
                </Link>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <div className="span topbarIconItemBadge">1</div>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <div className="span topbarIconItemBadge">2</div>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <div className="span topbarIconItemBadge">1</div>
                </div>
            </div>
            <img src="assets/person/1.jpeg" alt="" className="profilePicture" />
        </div>
    </div>
  )
}

export default Topbar
