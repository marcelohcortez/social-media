import React, { Fragment } from 'react'
import Leftbar from '../../components/leftbar/leftbar.component'
import Feed from '../../components/feed/feed.component'
import Rightbar from '../../components/rightbar/rightbar.component'
import Topbar from '../../components/topbar/topbar.component'

import './profile.styles.scss'

const Profile = () => {
  return (
    <>
      <Topbar/>
      <div className="profileContainer">
        <Leftbar originPage='profile'/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className='profileCoverImg' src="assets/post/3.jpeg" alt="" />
                    <img className='profileUserImg' src="assets/person/1.jpeg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>Name</h4>
                    <span className="profileInfoDesc">Description</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed originPage='profile'/>
                <Rightbar originPage='profile'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Profile
