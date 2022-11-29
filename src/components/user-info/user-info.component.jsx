import React from 'react'

import './user-info.styles.scss'

const UserInfo = () => {
  return (
    <div className="userInfo">
        <h4 className='userInfoTitle'>User information</h4>
        <div className="userInfoItem">
          <span className="userInfoItemKey">City:</span>
          <span className="userInfoItemValue">New York</span>
        </div>
        <div className="userInfoItem">
          <span className="userInfoItemKey">From:</span>
          <span className="userInfoItemValue">Madrid</span>
        </div>
        <div className="userInfoItem">
          <span className="userInfoItemKey">Relationship:</span>
          <span className="userInfoItemValue">Single</span>
        </div>
    </div>
  )
}

export default UserInfo
