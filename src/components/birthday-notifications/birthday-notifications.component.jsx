import React from 'react'

import giftIcon from '../../assets/gift.png'

import './birthday-notifications.styles.scss'

export default function BirthdayNotifications () {
  return (
    <div className="birthdayContainer">
        <img className="birthdayImage" src={ giftIcon } alt="" />
        <span className="birthdayText"> <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
    </div>
  )
}
