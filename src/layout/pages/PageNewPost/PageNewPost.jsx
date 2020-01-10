import React, { useState } from 'react';
import MyNavbar from '../../components/MyNavbar/MyNavbar';
import {
  InputGroup,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown
 } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import { useMediaQuery } from 'react-responsive';
import TextareaAutosize from 'react-textarea-autosize';
import { useHistory } from 'react-router-dom';
import uuid from 'uuid';

import { mockTopics, currentUser } from '../PageForum/forum-mock-data';
import classes from './PageNewPost.module.scss';

const PageNewPost = () => {
  const [topicDropdownOpen, setTopicDropdownOpen] = useState(false);
  const [chosenTopic, setChosenTopic] = useState();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const history = useHistory();

  //responsive
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const topicToggleDropDown = () => setTopicDropdownOpen(!topicDropdownOpen);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }

  const isFullyInput = () => {
    return (chosenTopic && title.length > 0 && content.length > 0);
  }

  const handlePostClick = () => {
    var posts = JSON.parse(localStorage.getItem('posts'));
    posts.push({
      id: uuid(),
      title: title,
      author: currentUser,
      topic: chosenTopic,
      postedTime: (new Date()).toISOString(),
      content: content,
      commentCount: 0,
      upvoteCount: 0,
      downvoteCount: 0,
      upvoters: [],
      downvoters: [],
      comments: [],
    })
    localStorage.setItem('posts', JSON.stringify(posts));
    history.push('/forum');
  }

  return (
    <div>
      <MyNavbar />
      <div className={classes['page-body']}>
        <div className={classes['new-post-form-container']}>
          <div className={classes['topic-dd-n-button']}>
            <Dropdown
              isOpen={topicDropdownOpen}
              toggle={topicToggleDropDown}
            >
              <DropdownToggle
                outline 
                caret
                className={classes['topic-dd-button']}
              >
                {
                  chosenTopic
                  ? chosenTopic.name
                  : 'Chọn chủ đề để lọc bài viết'
                }
              </DropdownToggle>
              <DropdownMenu>
                {
                  mockTopics.map((topic) => (
                    <DropdownItem onClick={() => { setChosenTopic(topic) }}>{topic.name}</DropdownItem>
                  ))
                }
              </DropdownMenu>
            </Dropdown>
            <Button
              variant="primary"
              size="lg"
              disabled={!isFullyInput()}
              className={ isFullyInput() ? (classes["button"] + " " + classes["primary-button"]) : (classes['button-disabled'])}
              onClick={handlePostClick}
            >
              Đăng
            </Button>
          </div>
          <div>
            <TextareaAutosize
              className={classes['input-field']}
              minRows={1}
              maxRows={2}
              placeholder='Tiêu đề bài viết'
              value={title}
              onChange={(e) => { handleTitleChange(e) }}
            />
            <TextareaAutosize
              className={classes['input-field']}
              minRows={16}
              maxRows={20}
              placeholder='Nội dung bài viết'
              value={content}
              onChange={(e) => { handleContentChange(e) }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNewPost;