export const mockUsers = [
  { 
    uid: 'user00',
    displayName: 'Trump',
    profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5a/5aa6a324b5600d1017a146e1634d452ff2f0ecb5_full.jpg'
  },
  { 
    uid: 'user01',
    displayName: 'X',
    profilePicture: 'http://i.imgur.com/uAciRsL.jpg'
  },
  { 
    uid: 'user02',
    displayName: 'Tiên tri vũ trụ Trần Dần',
    profilePicture: 'https://yt3.ggpht.com/a/AGF-l7_j959MsISuAw1e0ipmLciNDJK4j3lsWGFz_Q=s240-c-k-c0xffffffff-no-rj-mo'
  },
];

export const mockTopics = [
  {
    id: 'topic00',
    name: 'Từ vựng',
    backgroundColor: '#1CB0F6',
  },
  {
    id: 'topic01',
    name: 'Ngữ pháp',
    backgroundColor: '#F6621C',
  },
  {
    id: 'topic02',
    name: 'Phát âm',
    backgroundColor: '#25C18A',
  },
  {
    id: 'topic03',
    name: 'Feedback',
    backgroundColor: '#CF1CF6',
  },
  {
    id: 'topic04',
    name: 'Trò chuyện',
    backgroundColor: '#F17776',
  },
];

export const mockPosts = [
  {
    id: 'post00',
    title: 'Bơi hết vào đây đkm',
    author: mockUsers[0],
    topic: mockTopics[2],
    postedTime: '1 giờ',
    content: 'Alo alo where are you the fuck now?? Đâu rồi những con chó Hitler, Stalin?? Những thằng lol Mao Trạch Đông, Minho ĐM chúng m đâu??',
    commentCount: 3,
    upvoteCount: 20,
    downvoteCount: 66,
  },
  {
    id: 'post01',
    title: 'Không có chuyện Việt Nam sở hữu...',
    author: mockUsers[1],
    topic: mockTopics[3],
    postedTime: '1 ngày',
    content: 'Một tổ chức phi chính phủ quốc tế nổi tiếng có tên “Sáng kiến đe dọa hạt nhân” (The Nuclear Threat Initiative, viết tắt là NIT) đã khẳng định...',
    commentCount: 40,
    upvoteCount: 250,
    downvoteCount: 23,
  },
  {
    id: 'post02',
    title: 'Tôi thấy hiện tượng lạ',
    author: mockUsers[2],
    topic: mockTopics[4],
    postedTime: '1 thập kỉ',
    content: 'Lúc đó là tháng giêng năm 2003. Tự nhiên tôi ngồi ở nhà ở trên Phao sần pa lay, tự nhiên tôi thấy một hiện tượng lạ.',
    commentCount: 20,
    upvoteCount: 2,
    downvoteCount: 263,
  },
  {
    id: 'post03',
    title: 'Tôi thấy hiện tượng lạ',
    author: mockUsers[2],
    topic: mockTopics[4],
    postedTime: '1 thập kỉ',
    content: 'Lúc đó là tháng giêng năm 2003. Tự nhiên tôi ngồi ở nhà ở trên Phao sần pa lay, tự nhiên tôi thấy một hiện tượng lạ.',
    commentCount: 20,
    upvoteCount: 2,
    downvoteCount: 263,
  },
];