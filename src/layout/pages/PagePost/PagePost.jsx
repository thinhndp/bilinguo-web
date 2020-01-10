import React, { useEffect, useState } from 'react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import MyNavbar from '../../components/MyNavbar/MyNavbar';
import TextareaAutosize from 'react-textarea-autosize';
import { useHistory } from 'react-router-dom';
import { IoMdSend, IoIosAttach, IoIosImages, IoMdCamera, IoMdChatboxes } from 'react-icons/io';
import uuid from 'uuid';

import { useMediaQuery } from 'react-responsive'

import classes from './PagePost.module.scss';

import { mockPosts, currentUser, mockTopUsers } from '../PageForum/forum-mock-data';
import helper from '../../../utils/helper';

const PagePost = (props) => {
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState('');
  // const [postId, setPostId] = useState('');
  const history = useHistory();
  const posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : mockPosts;
  // var posts = [];

  //responsive
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (!localStorage.getItem('posts')) {
      localStorage.setItem('posts', JSON.stringify(mockPosts))
    }
    // setPostId(useParams().id);
    // setPostId(props.match.params.postId);
    console.log(props.match.params.id);
    // posts = JSON.parse(localStorage.getItem('posts'));
    console.log(posts);
    const p = posts.find((_post) => (_post.id === props.match.params.id));
    setPost(p);
    setComments(p.comments);
  }, []);

  const getRelatedPost = (post) => {
    var relatedPosts = posts.filter(_post => (_post.topic.id === post.topic.id && _post.id !== post.id));
    return relatedPosts;
  }

  const handleRelatedPostClick = (postId) => {
    history.push(`/post/${postId}`);
    // setPostId(postId);
    // TODO: Find out why the page doesn't update on route change
    const p = posts.find((_post) => (_post.id === postId));
    setPost(p);
    setComments(p.comments);
  }

  const handleUserCommentChange = (e) => {
    setUserComment(e.target.value);
    console.log(userComment);
  }

  const handlePostClick = () => {
    const index = posts.findIndex((_post) => (_post.id === post.id));
    posts[index].comments = [{
      id: uuid(),
      author: currentUser,
      content: userComment,
      upvoteCount: 0,
      downvoteCount: 0,
      postedTime: (new Date()).toISOString(),
      upvoters: [],
      downvoters: []
    }, ...posts[index].comments];
    posts[index].commentCount = posts[index].comments.length;
    setPost(posts[index]);
    setComments(posts[index].comments);
    setUserComment('');
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  const votePost = (type) => {
    //vote post or comment
    var { upvoters, downvoters } = post;
    if (type === 'upvote') {
      if (upvoters.includes(currentUser.uid)) {
        upvoters = upvoters.filter((upvoterId) => upvoterId !== currentUser.uid);
      }
      else {
        upvoters.push(currentUser.uid);
        downvoters = downvoters.filter((downvoterId) => downvoterId !== currentUser.uid);
      }
    }
    else if (type === 'downvote') {
      if (downvoters.includes(currentUser.uid)) {
        downvoters = downvoters.filter((downvoterId) => downvoterId !== currentUser.uid);
      }
      else {
        downvoters.push(currentUser.uid);
        upvoters = upvoters.filter((upvoterId) => upvoterId !== currentUser.uid);
      }
    }
    const index = posts.findIndex((_post) => (_post.id === post.id));
    posts[index] = { 
      ...posts[index], 
      upvoters: upvoters,
      downvoters: downvoters,
      upvoteCount: upvoters.length,
      downvoteCount: downvoters.length
    }
    setPost(posts[index]);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  const voteComment = (type, comment) => {
    //vote post or comment
    var { upvoters, downvoters } = comment;
    if (type === 'upvote') {
      if (upvoters.includes(currentUser.uid)) {
        upvoters = upvoters.filter((upvoterId) => upvoterId !== currentUser.uid);
      }
      else {
        upvoters.push(currentUser.uid);
        downvoters = downvoters.filter((downvoterId) => downvoterId !== currentUser.uid);
      }
    }
    else if (type === 'downvote') {
      if (downvoters.includes(currentUser.uid)) {
        downvoters = downvoters.filter((downvoterId) => downvoterId !== currentUser.uid);
      }
      else {
        downvoters.push(currentUser.uid);
        upvoters = upvoters.filter((upvoterId) => upvoterId !== currentUser.uid);
      }
    }
    const postIndex = posts.findIndex((_post) => (_post.id === post.id));
    const commentIndex = post.comments.findIndex((_comment) => (_comment.id === comment.id));
    console.log(posts[postIndex].comments[commentIndex]);
    posts[postIndex].comments[commentIndex] = { 
      ...posts[postIndex].comments[commentIndex],
      upvoters: upvoters,
      downvoters: downvoters,
      upvoteCount: upvoters.length,
      downvoteCount: downvoters.length
    }
    setPost(posts[postIndex]);
    // setComments(mockPosts[postIndex].comments);
    var newComments = [ ...posts[postIndex].comments ];
    setComments(newComments);
    console.log(comments);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  const isUpvotedByUser = (upvoters) => {
    console.log(upvoters);
    console.log(currentUser.uid);
    console.log(upvoters.findIndex(upvoterId => (upvoterId === currentUser.uid)));
    return upvoters.findIndex(upvoterId => (upvoterId === currentUser.uid)) !== -1;
  }

  const isDownvotedByUser = (downvoters) => {
    return downvoters.findIndex(downvoterId => (downvoterId === currentUser.uid)) !== -1;
  }

  const renderNewCommentInput = () => {
    return (
      <div className={classes['comment']}>
        <img
          className={classes['comment-author-pp']}
          src={currentUser.profilePicture}
          alt='user pic'
        />
        <div className={classes['comment-input-section']}>
          <TextareaAutosize
            className={classes['comment-input-field']}
            minRows={1}
            maxRows={6}
            placeholder='Alo alo gáy lên'
            value={userComment}
            onChange={(e) => { handleUserCommentChange(e) }}
          />
          <div className={classes['new-comment-action-container']}>
            <div className={classes['divider']}></div>
            <div className={classes['actions-container']}>
              <div className={classes['sub-icons-container']}>
                <div className={classes['sub-icon']}>
                  <IoIosImages />
                </div>
                <div className={classes['sub-icon']}>
                  <IoMdCamera />
                </div>
                <div className={classes['sub-icon']}>
                  <IoIosAttach />
                </div>
              </div>
              <div 
                className={classes['post-icon'] + ((userComment.length > 0) ? (' ' + classes['post-icon-active']) : (''))}
                onClick={handlePostClick}
              >
                <IoMdSend />
              </div>
            </div>
          </div>
        </div>
        {/* <div className={classes['comment-input-section']}>
          <TextareaAutosize
            className={classes['comment-input-field']}
            minRows={1}
            maxRows={6}
            placeholder='Alo alo gáy lên'
            value={userComment}
            onChange={(e) => { handleUserCommentChange(e) }}
          />
          <div className={classes['new-comment-action-container']}>alo</div>
        </div> */}
        {/* <div className={classes['comment-detail']}>
          <TextareaAutosize
            minRows={3}
            maxRows={6}
            defaultValue="Just a single line..."
          />
        </div> */}
      </div>
    );
  }

  const renderCommentSection = (comments) =>  {
    return (
      <div className={classes['comment-section']}>
        <div className={classes['line']}></div>
        <div className={classes['section-name']}>{post.commentCount} Bình luận</div>
        <div className={classes['seperator-vertical']}></div>
        <div className={classes['comments']}>
          { renderNewCommentInput() }
          { comments.map(comment => (
            <div 
              key={comment.id}
              className={classes['comment']}>
              <img
                className={classes['comment-author-pp']}
                src={comment.author.profilePicture}
                alt='comment author pic'
              />
              <div className={
                classes['comment-bubble']
                + (isMobile ? (' ' + classes['pl-20'] + ' ' + classes['flex-dir-col']) : (''))
              }>
                {
                  !isMobile &&
                  <div className={classes['comment-votes-section']}>
                    <GoTriangleUp 
                      className={
                        classes['vote'] + ((isUpvotedByUser(comment.upvoters)) ? (' ' + classes['upvote-color']) : (''))
                      }
                      onClick={() => { voteComment('upvote', comment) }}
                    />
                    <div className={classes['vote-count']}>{comment.upvoteCount - comment.downvoteCount}</div>
                    <GoTriangleDown
                      className={
                        classes['vote'] + ((isDownvotedByUser(comment.downvoters)) ? (' ' + classes['downvote-color']) : (''))
                      }
                      onClick={() => { voteComment('downvote', comment) }}
                    />
                  </div>
                }
                <div className={classes['comment-detail']}>
                  {/* <div className={classes['comment-author-name']}>
                    {comment.author.displayName} <span className={classes['posted-time']}>{comment.postedTime} trước</span>
                  </div> */}
                  <div className={classes['posted-time']}>
                    <span className={classes['comment-author-name']}>{comment.author.displayName}</span> {helper.getFormattedPostedTime(comment.postedTime)}
                  </div>
                  <div className={classes['content']}>{comment.content}</div>
                </div>
                {
                  isMobile &&
                  <div>
                    <div className={classes['line-m-10']}></div>
                    <div className={classes['comment-votes-section-row']}>
                      <GoTriangleUp 
                        className={
                          classes['vote'] + ((isUpvotedByUser(comment.upvoters)) ? (' ' + classes['upvote-color']) : (''))
                        }
                        onClick={() => { voteComment('upvote', comment) }}
                      />
                      <div className={classes['vote-count']}>{comment.upvoteCount - comment.downvoteCount}</div>
                      <GoTriangleDown
                        className={
                          classes['vote'] + ((isDownvotedByUser(comment.downvoters)) ? (' ' + classes['downvote-color']) : (''))
                        }
                        onClick={() => { voteComment('downvote', comment) }}
                      />
                    </div>
                  </div>
                }
              </div>
            </div>
          )) }
        </div>
      </div>
    );
  }

  return (
    <div>
      <MyNavbar />
      <div className={
        classes['page-body']
        + ' ' + (isDesktop ? (classes['page-body-destop']) : (classes['page-body-not-destop']))
      }>
        {
          post != null
          ? <div className={classes['post-and-stat-container']}>
            <div className={
              classes['post-column']
              + (isDesktop ? ('') : (' ' + classes['unset-shadow']))
            }>
              {
                !isMobile &&
                <div className={classes['profile-pic-and-vote-column']}>
                  <img
                    className={classes['profile-pic']} 
                    src={post.author.profilePicture}
                    alt='author pic'
                  />
                  <div className={classes['votes-section']}>
                    <GoTriangleUp
                      className={
                        classes['vote'] + ((isUpvotedByUser(post.upvoters)) ? (' ' + classes['upvote-color']) : (''))
                      }
                      onClick={() => { votePost('upvote') }}
                    />
                    <div className={classes['vote-count']}>{post.upvoteCount - post.downvoteCount}</div>
                    <GoTriangleDown
                      className={
                        classes['vote'] + ((isDownvotedByUser(post.downvoters)) ? (' ' + classes['downvote-color']) : (''))
                      }
                      onClick={() => { votePost('downvote') }}
                    />
                  </div>
                </div>
              }
              <div className={
                classes['post-detail-column']
                + (isMobile ? (' ' + classes['pl-40']) : (''))
              }> 
                {
                  isMobile &&
                  <div className={classes['user-and-time-row']}>
                    <img
                      className={classes['profile-picture']}
                      src={post.author.profilePicture}
                      alt='profile-pic'
                    />
                    <div className={classes['username-and-time']}>
                      <div className={classes['username']}>{post.author.displayName}</div>
                      <div className={classes['subtext-2']}>{helper.getFormattedPostedTime(post.postedTime)}</div>
                    </div>
                  </div>
                }
                <div className={classes['post-title']}>{post.title}</div>
                {
                  !isMobile &&
                  <div>
                    <div className={classes['author-and-posted-time-container']}>
                      <span className={classes['subtext-1']}>{post.author.displayName}</span>
                      <span className={classes['subtext-2']}>{' '} đã đăng {helper.getFormattedPostedTime(post.postedTime)}</span>
                    </div>
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
                  </div>
                }
                <div className={classes['line']}></div>
                <p className={classes['post-content']}>{post.content}</p>
                {
                  isMobile &&
                  <div className={classes['votes-n-topic-row']}>
                    <div className={classes['votes-container']}>
                      <GoTriangleUp
                        className={
                          classes['vote'] + ((isUpvotedByUser(post.upvoters)) ? (' ' + classes['upvote-color']) : (''))
                        }
                        onClick={() => { votePost('upvote') }}
                      />
                      <div className={classes['vote-count']}>{post.upvoteCount - post.downvoteCount}</div>
                      <GoTriangleDown
                        className={
                          classes['vote'] + ((isDownvotedByUser(post.downvoters)) ? (' ' + classes['downvote-color']) : (''))
                        }
                        onClick={() => { votePost('downvote') }}
                      />
                    </div>
                    <div 
                      className={classes['topic-tag'] + ' ' + classes['m-top-unset']}
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
                  </div>
                }
                { renderCommentSection(comments) }
              </div>
            </div>
            {
              isDesktop &&
              <div className={classes['stat-column']}>
                <div className={classes['section-card']}>
                  <div className={classes['section-name']}>Bài viết liên quan</div>
                  <div className={classes['line']}></div>
                  <div className={classes['related-posts-section']}>
                    { getRelatedPost(post).length > 0 
                    ? getRelatedPost(post).map(post => (
                      <div className={classes['related-post']}>
                        <div
                          className={classes['title']}
                          onClick={handleRelatedPostClick.bind(this, post.id)}
                        >{post.title}</div>
                        <div className={classes['subtext']}>Đăng bởi 
                          <span><img
                            className={classes['profile-picture']}
                            src={post.author.profilePicture}
                            alt='pp'
                          /></span> 
                          {helper.getFormattedPostedTime(post.postedTime)}
                        </div>
                      </div>
                    ))
                    : <div style={{ fontSize: '16px', color: '#999' }}>Không tìm thấy bài viết liên quan</div>
                    }
                  </div>
                </div>
                <div className={classes['section-card']}>
                  <div className={classes['section-name']}>Thành viên năng nổ</div>
                  <div className={classes['line']}></div>
                  <div className={classes['top-users-section']}>
                    { mockTopUsers.length > 0 
                    ? mockTopUsers.map(topUser => (
                      <div className={classes['top-user']}>
                        <div className={classes['username-and-pp']}>
                          <img
                            className={classes['profile-picture']}
                            src={topUser.user.profilePicture}
                            alt='pp'
                          />  
                          <div className={classes['username']}>{topUser.user.displayName}</div>
                        </div>
                        <div className={classes['comment-count']}>
                          <IoMdChatboxes className={classes['icon']}/>
                          <div className={classes['count']}>{topUser.commentCount}</div>
                        </div>
                      </div>
                    ))
                    : <div style={{ fontSize: '16px', color: '#999' }}>Không tìm thấy thành viên năng nổ</div>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
          : null
        }
      </div>
    </div>
  );
}

export default PagePost;