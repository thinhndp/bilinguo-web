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
    upvoteCount: 2,
    downvoteCount: 1,
    upvoters: [ mockUsers[0], mockUsers[1] ],
    downvoters: [ mockUsers[2] ],
    comments: [
      {
        id: 'comment00',
        author: mockUsers[1],
        content: 'aaaaaaa asdasd asdas dads a sd qw qwd qw ',
        upvoteCount: 2,
        downvoteCount: 1,
        postedTime: '30 phút',
        upvoters: [ mockUsers[0], mockUsers[1] ],
        downvoters: [ mockUsers[2] ],
      },
      {
        id: 'comment01',
        author: mockUsers[2],
        content: 'asd v as sd a  cas c as saasdasd  ca as cas cas c aswe qwe qweqwd  dw qdqw dqw ',
        upvoteCount: 0,
        downvoteCount: 3,
        postedTime: '30 phút',
        upvoters: [],
        downvoters: [ mockUsers[0], mockUsers[1], mockUsers[2] ],
      },
      {
        id: 'comment02',
        author: mockUsers[1],
        content: 'aaaaaaa asdasd asdas dads a sd qw qwd qw d qwd asd as da d qwwdqwd qw dqwdawas d',
        upvoteCount: 2,
        downvoteCount: 1,
        postedTime: '30 phút',
        upvoters: [ mockUsers[0], mockUsers[1] ],
        downvoters: [ mockUsers[2] ],
      },
    ]
  },
  {
    id: 'post01',
    title: 'Không có chuyện Việt Nam sở hữu vũ khí hạt nhân',
    author: mockUsers[1],
    topic: mockTopics[3],
    postedTime: '1 ngày',
    content: `Nói đến loại vũ khí hủy diệt gây tàn phá khu vực rộng lớn hoặc giết người hàng loạt, đầu tiên cần phải kể đến bom hạt nhân; tức bom phân hạch (bom A) hay bom khinh khí (bom H).
    Một tổ chức phi chính phủ quốc tế nổi tiếng có tên “Sáng kiến đe dọa hạt nhân” (The Nuclear Threat Initiative, viết tắt là NIT) đã khẳng định: “Việt Nam không sở hữu vũ khí hạt nhân, sinh học hay hóa học, hoặc các chương trình phát triển các loại vũ khí đó, và là một bên tham gia hầu hết các hiệp ước không phổ biến và các thỏa thuận liên quan…”.
    Trong thực tế, từ tháng 6 năm 1982 Việt Nam đã tham gia Hiệp ước Không phổ biến vũ khí hạt nhân (NPT) và chính thức trở thành một quốc gia phi vũ khí hạt nhân. Theo Hiệp ước này, chỉ những nước từng tiến hành các vụ thử bom hạt nhân từ năm 1967 về trước (gồm Mỹ, Nga, Anh, Pháp và Trung quốc) là mặc nhiên được xem có quyền sở hữu các loại vũ khí đó. Còn các quốc gia khác, khi tham gia NPT, sẽ không được theo đuổi việc chế tạo loại vũ khí này, nhưng ngược lại, được quyền tiếp nhận sự chuyển giao, giúp đỡ thiết bị, vật liệu, công nghệ, đào tạo … để triển khai ứng dụng năng lượng nguyên tử vì những mục đích hòa bình.
    Đến năm 1996, Việt Nam lại ký kết Hiệp ước (CTBT) cấm thử vũ khí hạt nhân toàn diện và năm 2006 phê chuẩn CTBT. VN cũng đã ký Hiệp định Bảo đảm an ninh toàn diện với Cơ quan Năng lượng Nguyên tử Quốc tế (IAEA) có hiệu lực vào năm 1990. Ngoài ra, Việt Nam cũng trở thành một thành viên của Hiệp ước Phi vũ khí hạt nhân khu vực Đông Nam Á (Hiệp ước Băng Cốc).`,
    commentCount: 3,
    upvoteCount: 2,
    downvoteCount: 1,
    upvoters: [ mockUsers[0], mockUsers[1] ],
    downvoters: [ mockUsers[2] ],
    comments: [
      {
        id: 'comment03',
        author: mockUsers[1],
        content: 'aaaaaaa asdasd asdas dads a sd qw qwd qw d qwd asd as da d qwwdqwd qw dqwdawas d',
        upvoteCount: 2,
        downvoteCount: 1,
        postedTime: '30 phút',
        upvoters: [ mockUsers[0], mockUsers[1] ],
        downvoters: [ mockUsers[2] ],
      },
      {
        id: 'comment04',
        author: mockUsers[2],
        content: 'asd v as sd a  cas c as saasdasd  ca as cas cas c aswe qwe qweqwd  dw qdqw dqw ',
        upvoteCount: 0,
        downvoteCount: 3,
        postedTime: '30 phút',
        upvoters: [],
        downvoters: [ mockUsers[0], mockUsers[1], mockUsers[2] ],
      },
      {
        id: 'comment05',
        author: mockUsers[1],
        content: 'aaaaaaa asdasd asdas dads a sd qw qwd qw d qwd asd as da d qwwdqwd qw dqwdawas d',
        upvoteCount: 2,
        downvoteCount: 1,
        postedTime: '30 phút',
        upvoters: [ mockUsers[0], mockUsers[1] ],
        downvoters: [ mockUsers[2] ],
      },
    ]
  },
  {
    id: 'post02',
    title: 'Tôi thấy hiện tượng lạ',
    author: mockUsers[2],
    topic: mockTopics[4],
    postedTime: '1 thập kỉ',
    content: '[1:1] In the beginning when God created the heavens and the earth, [1:2] the earth was a formless void and darkness covered the face of the deep, while a wind from God swept over the face of the waters. [1:3] Then God said, "Let there be light"; and there was light.',
    commentCount: 20,
    upvoteCount: 2,
    downvoteCount: 263,
    upvoters: [],
    downvoters: [],
    comments: [],
  }
];

export const currentUser = mockUsers[1];