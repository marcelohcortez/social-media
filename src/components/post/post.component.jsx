import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../dummyData'

import './post.styles.scss'

const Post = ({ postContent }) => {
  const [like, setLike] = useState(postContent.like)
  const [isLiked, setIsLiked] = useState(false)
  const [favorite, setFavorite] = useState(postContent.favorite)
  const [isFavorited, setIsFavorited] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  const favoriteHandler = () => {
    setFavorite(isFavorited ? favorite - 1 : favorite + 1)
    setIsFavorited(!isFavorited)
  }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImage' src={Users.filter((user) => user.id === postContent.userId)[0].profilePicture} alt="" />
                    <span className="postUserName"> {Users.filter((user) => user.id === postContent.userId)[0].username}</span>
                    <span className="postDate">{postContent.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postContent">
                <span className="postContentText">{postContent?.text}</span>
                <img className="postContentImage" src={postContent.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <div className="postBottomLeftLike">
                        <img className="postBottomLeftIcon" src="assets/like.png" alt="" onClick={likeHandler}/>
                        <span className="postBottomLeftLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomLeftFavorite">
                        <img className="postBottomLeftIcon" src="assets/heart.png" alt="" onClick={favoriteHandler}/>
                        <span className="postBottomLeftLikeCounter">{favorite} people favorited it</span>
                    </div>
                </div>
                <div className="postBottomRight">
                    <span className="postBottomRightCommentCounter">{postContent.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

Post.propTypes = {
  postContent: PropTypes.object.isRequired
}

export default Post
