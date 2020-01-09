import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiMessageSquare, FiThumbsUp, FiThumbsDown, FiStar, FiList, FiCheck } from 'react-icons/fi';
import {
  InputGroup,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';

import MyNavbar from '../../components/MyNavbar/MyNavbar';
import classes from './PageForum.module.scss';

import helper from '../../../utils/helper'
import { mockPosts, mockTopics } from './forum-mock-data';

const PageForum = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  // const [postsToDisplay, setPostsToDisplay] = useState([]);
  const [sortBy, setSortBy] = useState('new');
  const [topicFilter, setTopicFilter] = useState('all');
  let history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('posts')) {
      localStorage.setItem('posts', JSON.stringify(mockPosts))
    }
    setPosts(JSON.parse(localStorage.getItem('posts')));
    setSortBy('new');
    setTopicFilter('all');
    // setPostsToDisplay(JSON.parse(localStorage.getItem('posts')));
    // applySortBy('new');
    // console.log(postsToDisplay);
  }, []);

  const applySortBy = (sortCriteria, postsToApply) => {
    console.log(sortCriteria, postsToApply);
    if (sortCriteria === 'active') {
      // setPostsToDisplay(postsToSort.sort((a, b) => ( 
      //   (b.upvoteCount + b.downvoteCount + b.commentCount)
      //   - (a.upvoteCount + a.downvoteCount + a.commentCount)
      // )));
      return postsToApply.sort((a, b) => ( 
        (b.upvoteCount + b.downvoteCount + b.commentCount)
        - (a.upvoteCount + a.downvoteCount + a.commentCount)
      ));
    }
    // else {
    //   console.log('alo');
    //   setPostsToDisplay(postsToSort.sort((a, b) => ( Date.parse(b.postedTime) - Date.parse(a.postedTime) )));
     
    // }
    return postsToApply.sort((a, b) => ( Date.parse(b.postedTime) - Date.parse(a.postedTime) ));
  }

  const applyTopicFilter = (filterValue, postsToApply) => {
    if (filterValue === 'all') {
      return postsToApply;
    }
    return postsToApply.filter(post => post.topic.id === filterValue);
  }

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const handlePostClick = (postId) => {
    history.push(`/post/${postId}`);
  }

  const getPostsToDisplay = () => {
    var postsToDisplay = posts;
    postsToDisplay = applyTopicFilter(topicFilter, postsToDisplay);
    postsToDisplay = applySortBy(sortBy, postsToDisplay);
    return postsToDisplay;
  }

  return (
    <div>
      <MyNavbar />
      <div className={classes['page-body']}>
        <div className={classes['posts-and-topics-container']}>
          <div className={classes['posts-section']}>
            <div className={classes['section-name']}>Bài viết</div>
            <div className={classes['search-bar-and-post-button']}>
              <InputGroup className={classes['input-group']}>
                <InputGroupButtonDropdown addonType="prepend" isOpen={dropdownOpen} toggle={toggleDropDown}>
                  <DropdownToggle
                    outline 
                    caret
                    className={classes['dd-button']}
                  >
                    Sắp xếp theo
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => { setSortBy('new') }}>Mới nhất</DropdownItem>
                    <DropdownItem onClick={() => { setSortBy('active') }}>Tương tác</DropdownItem>
                  </DropdownMenu>
                </InputGroupButtonDropdown>
                <Input
                  className={classes['search-field']}
                  placeholder="Gõ từ khóa để tìm kiếm"
                />
              </InputGroup>
              <Button
                variant="primary"
                size="lg"
                className={classes["button"] + " " + classes["primary-button"]}
                onClick={() => {}}
              >
                Đăng bài
              </Button>
            </div>
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
                    <div
                      className={classes['post-title']}
                      onClick={handlePostClick.bind(this, post.id)}
                    >{post.title}</div>
                    <div className={classes['author-and-posted-time-container']}>
                      <span className={classes['subtext-1']}>{post.author.displayName}</span>
                      <span className={classes['subtext-2']}>{' '} đã đăng {helper.getFormattedPostedTime(post.postedTime)}</span>
                    </div>
                    <div className={classes['subtext-3']}>{post.content}</div>
                  </div>
                  <div className={classes['activities-column']}>
                    <div className={classes['activity-container']}>
                      <FiMessageSquare className={classes['icon']}></FiMessageSquare>
                      <div className={classes['subtext-4']}>{post.commentCount}</div>
                    </div>
                    <div className={classes['activity-container']}>
                      <FiThumbsUp className={classes['icon']}></FiThumbsUp>
                      <div className={classes['subtext-4']}>{post.upvoteCount}</div>
                    </div>
                    <div className={classes['activity-container']}>
                      <FiThumbsDown className={classes['icon']}></FiThumbsDown>
                      <div className={classes['subtext-4']}>{post.downvoteCount}</div>
                    </div>
                  </div>
                </div>
              ))
            }    
          </div>
          <div className={classes['topics-section']}>
            <div className={classes['section-name']}>Chủ đề</div>
            <div className={classes['topics-card']}>
              <div
                className={
                  classes['topic-group']
                  + ((topicFilter === 'all') ? (' ' + classes['topic-group-active']) : (''))
                }
                onClick={ () => { setTopicFilter('all') } }
              >
                <FiList className={classes['icon']}></FiList>
                <div className={classes['topic-name']}>Tất cả bài viết</div>
                <FiCheck
                  style={{
                    visibility: topicFilter === 'all' ? "visible" : "hidden"
                  }}
                  className={classes['check-icon']}
                ></FiCheck>
              </div>
              <div className={classes['topic-group']}>
                <FiStar className={classes['icon']}></FiStar>
                <div className={classes['topic-name']}>Đang theo dõi</div>
                <FiCheck
                  style={{
                    visibility: topicFilter === 'following' ? "visible" : "hidden"
                  }}
                  className={classes['check-icon']}
                ></FiCheck>
              </div>
              <div className={classes['line']}></div>
              {
                mockTopics.map(topic => (
                  <div
                    className={
                      classes['topic-group']
                      + ((topicFilter === topic.id) ? (' ' + classes['topic-group-active']) : (''))
                    }
                    onClick={ () => { setTopicFilter(topic.id) } }
                  >
                    <div className={classes['dat-circle-container']}>
                      <div
                        className={classes['dat-circle']}
                        style={{
                          backgroundColor: topic.backgroundColor
                        }}
                      ></div>
                    </div>
                    <div className={classes['topic-name']}>{topic.name}</div>
                    <FiCheck
                      style={{
                        visibility: topicFilter === topic.id ? "visible" : "hidden"
                      }}
                      className={classes['check-icon']}
                    ></FiCheck>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageForum;