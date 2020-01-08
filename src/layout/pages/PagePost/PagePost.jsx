import React, { useEffect, useState } from 'react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import MyNavbar from '../../components/MyNavbar/MyNavbar';
import { useParams } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import { IoMdSend, IoIosAttach, IoIosImages, IoMdCamera } from 'react-icons/io';

import classes from './PagePost.module.scss';

import { mockPosts, currentUser } from '../PageForum/forum-mock-data';

const PagePost = () => {
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState('');
  const { postId } = useParams();

  useEffect(() => {
    const p = mockPosts.find((_post) => (_post.id === postId));
    setPost(p);
    setComments(p.comments);
  }, []);

  const handleUserCommentChange = (e) => {
    setUserComment(e.target.value);
    console.log(userComment);
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
              <div className={classes['post-icon']}>
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
            <div className={classes['comment']}>
              <img
                className={classes['comment-author-pp']}
                src={comment.author.profilePicture}
                alt='comment author pic'
              />
              <div className={classes['comment-bubble']}>
                <div className={classes['comment-votes-section']}>
                  <GoTriangleUp className={classes['vote']}/>
                  <div className={classes['vote-count']}>{comment.upvoteCount - comment.downvoteCount}</div>
                  <GoTriangleDown className={classes['vote']}/>
                </div>
                <div className={classes['comment-detail']}>
                  {/* <div className={classes['comment-author-name']}>
                    {comment.author.displayName} <span className={classes['posted-time']}>{comment.postedTime} trước</span>
                  </div> */}
                  <div className={classes['posted-time']}>
                    <span className={classes['comment-author-name']}>{comment.author.displayName}</span> {comment.postedTime} trước
                  </div>
                  <div className={classes['content']}>{comment.content}</div>
                </div>
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
      <div className={classes['page-body']}>
        {
          post != null
          ? <div className={classes['post-and-stat-container']}>
            <div className={classes['post-column']}>
              <div className={classes['profile-pic-and-vote-column']}>
                <img
                  className={classes['profile-pic']} 
                  src={post.author.profilePicture}
                  alt='author pic'
                />
                <div className={classes['votes-section']}>
                  <GoTriangleUp className={classes['vote']}/>
                  <div className={classes['vote-count']}>{post.upvoteCount - post.downvoteCount}</div>
                  <GoTriangleDown className={classes['vote']}/>
                </div>
              </div>
              <div className={classes['post-detail-column']}>
                <div className={classes['post-title']}>{post.title}</div>
                <div className={classes['author-and-posted-time-container']}>
                  <span className={classes['subtext-1']}>{post.author.displayName}</span>
                  <span className={classes['subtext-2']}>{' '} đã đăng {post.postedTime} trước</span>
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
                <div className={classes['line']}></div>
                <p className={classes['post-content']}>{post.content}</p>
                { renderCommentSection(post.comments) }
              </div>
            </div>
            <div className={classes['stat-column']}>
              <div className={classes['section-card']}>
                <div className={classes['section-name']}>Bài viết liên quan</div>
                <div className={classes['line']}></div>
                <div>a</div>
              </div>
              <div className={classes['section-card']}>
                <div className={classes['section-name']}>Thành viên năng nổ</div>
                <div className={classes['line']}></div>
                <div>a</div>
              </div>
            </div>
          </div>
          : null
        }
      </div>
    </div>
  );
}

export default PagePost;