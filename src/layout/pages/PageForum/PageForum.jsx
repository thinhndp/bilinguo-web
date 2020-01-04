import React, { useState } from 'react';
import { FiMessageSquare, FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

import MyNavbar from '../../components/MyNavbar/MyNavbar';
import classes from './PageForum.module.scss';

import { mockPosts } from './forum-mock-data';

const PageForum = () => {
  const getPostsToDisplay = () => {
    return mockPosts;
  }

  return (
    <div>
      <MyNavbar />
      <div className={classes['page-body']}>
        <div className={classes['posts-and-topics-container']}>
          <div className={classes['posts-section']}>
            <div className={classes['section-name']}>Bài viết</div>
            {
              getPostsToDisplay().map(post => (
                <div className={classes['post-card']}>
                  <div 
                    className={classes['topic-tag']}
                    style={{
                      color: post.topic.backgroundColor,
                      borderColor: post.topic.backgroundColor
                    }}
                  ><span
                    className={classes['dat-circle']}
                    style={{
                      backgroundColor: post.topic.backgroundColor
                    }}
                  ></span>{post.topic.name}
                  </div>
                  <div className={classes['profile-picture-column']}>
                    <img
                      className={classes['profile-picture']}
                      src={post.author.profilePicture}
                      alt='profile-pic'
                    />
                  </div>
                  <div className={classes['detail-column']}>
                    <div className={classes['post-title']}>{post.title}</div>
                    <div className={classes['author-and-posted-time-container']}>
                      <span className={classes['subtext-1']}>{post.author.displayName}</span>
                      <span className={classes['subtext-2']}>{' '} đã đăng {post.postedTime} trước</span>
                    </div>
                    <div className={classes['subtext-3']}>{post.content}</div>
                  </div>
                  <div className={classes['activities-column']}>
                    <div className={classes['activity-container']}>
                      <FiMessageSquare className={classes['icon']}></FiMessageSquare>
                      <div className={classes['subtext-4']}>{post.commentCount} Bình luận</div>
                    </div>
                    <div className={classes['activity-container']}>
                      <FiThumbsUp className={classes['icon']}></FiThumbsUp>
                      <div className={classes['subtext-4']}>{post.upvoteCount} Likes</div>
                    </div>
                    <div className={classes['activity-container']}>
                      <FiThumbsDown className={classes['icon']}></FiThumbsDown>
                      <div className={classes['subtext-4']}>{post.downvoteCount} Dislikes</div>
                    </div>
                  </div>
                </div>
              ))
            }    
          </div>
          <div className={classes['topics-section']}>
            <div className={classes['section-name']}>Chủ đề</div>
            <div className={classes['topics-card']}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageForum;