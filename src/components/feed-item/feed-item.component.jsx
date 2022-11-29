import React from 'react'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material/'

import './feed-item.styles.scss'

const FeedItem = () => {
  return (
    <div className='feedItem'>
        <div className="feedItemWrapper">
            <div className="feedItemTop">
                <img className="feedItemProfilePicture" src="/assets/person/1.jpeg" alt="" />
                <input placeholder="What's in your mind" className="feedItemInput" />
            </div>
            <hr className='feedItemHr'/>
            <div className="feedItemBottom">
              <div className="feedItemOptions">
                <div className="feedItemOption">
                  <PermMedia htmlColor="tomato" className="feedItemOptionIcon"/>
                  <span className='feedItemOptionText'>Photo or Video</span>
                </div>
                <div className="feedItemOption">
                  <Label htmlColor="blue" className="feedItemOptionIcon"/>
                  <span className='feedItemOptionText'>Tag</span>
                </div>
                <div className="feedItemOption">
                  <Room htmlColor="green" className="feedItemOptionIcon"/>
                  <span className='feedItemOptionText'>Location</span>
                </div>
                <div className="feedItemOption">
                  <EmojiEmotions htmlColor="goldrod" className="feedItemOptionIcon"/>
                  <span className='feedItemOptionText'>Feelings</span>
                </div>
              </div>
              <button className="feedItemButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default FeedItem
