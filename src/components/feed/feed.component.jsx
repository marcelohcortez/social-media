import React from 'react'
import PropTypes from 'prop-types'
import FeedItem from '../feed-item/feed-item.component'
import Post from '../post/post.component'

import { Posts, UserPosts } from '../../dummyData'

import './feed.styles.scss'

const ProfileFeed = () => {
  return (
    UserPosts.map((post) => (
      <Post key={post.id} postContent={post}/>
    ))
  )
}

const HomeFeed = () => {
  return (
    Posts.map((post) => (
      <Post key={post.id} postContent={post}/>
    ))
  )
}

const Feed = ({ originPage }) => {
  return (
    <div className="feed">
        <div className="feedWrapper">
            <FeedItem/>
            { originPage === 'home' &&
              <HomeFeed/>
            }
            { originPage === 'profile' &&
              <ProfileFeed/>
            }
        </div>
    </div>
  )
}

Feed.propTypes = {
  originPage: PropTypes.string.isRequired
}

export default Feed
