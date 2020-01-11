export const mockUsers = [
  { 
    uid: 'user00',
    displayName: 'Thắng Lê',
    profilePicture: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5a/5aa6a324b5600d1017a146e1634d452ff2f0ecb5_full.jpg'
  },
  { 
    uid: 'user01',
    displayName: 'Thịnh Nguyễn',
    profilePicture: 'http://i.imgur.com/uAciRsL.jpg'
  },
  { 
    uid: 'user02',
    displayName: 'Thắng Nguyễn',
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
    title: 'Hellooooo',
    author: mockUsers[0],
    topic: mockTopics[2],
    postedTime: '2019-12-26T01:35:01+0700',
    content: 'Alo alo where are you',
    commentCount: 3,
    upvoteCount: 2,
    downvoteCount: 1,
    upvoters: [ 'user00', 'user01' ],
    downvoters: [ 'user02' ],
    comments: [
      {
        id: 'comment00',
        author: mockUsers[1],
        content: 'aaaaaaa asdasd asdas dads a sd qw qwd qw ',
        upvoteCount: 2,
        downvoteCount: 1,
        postedTime: '2019-12-27T01:35:01+0700',
        upvoters: [ 'user00', 'user01' ],
        downvoters: [ 'user02' ],
      },
      {
        id: 'comment01',
        author: mockUsers[2],
        content: 'asd v as sd a  cas c as saasdasd  ca as cas cas c aswe qwe qweqwd  dw qdqw dqw ',
        upvoteCount: 0,
        downvoteCount: 3,
        postedTime: '2019-12-27T02:35:01+0700',
        upvoters: [],
        downvoters: [ 'user00', 'user01', 'user02' ],
      },
      {
        id: 'comment02',
        author: mockUsers[1],
        content: 'aaaaaaa asdasd asdas dads a sd qw qwd qw d qwd asd as da d qwwdqwd qw dqwdawas d',
        upvoteCount: 2,
        downvoteCount: 1,
        postedTime: '2019-12-26T03:35:01+0700',
        upvoters: [ 'user00','user01' ],
        downvoters: [ 'user02' ],
      },
    ]
  },
  {
    id: 'post01',
    title: 'Không có chuyện Việt Nam sở hữu vũ khí hạt nhân',
    author: mockUsers[1],
    topic: mockTopics[3],
    postedTime: '2019-12-25T01:35:01+0700',
    content: `Nói đến loại vũ khí hủy diệt gây tàn phá khu vực rộng lớn hoặc giết người hàng loạt, đầu tiên cần phải kể đến bom hạt nhân; tức bom phân hạch (bom A) hay bom khinh khí (bom H).
    Một tổ chức phi chính phủ quốc tế nổi tiếng có tên “Sáng kiến đe dọa hạt nhân” (The Nuclear Threat Initiative, viết tắt là NIT) đã khẳng định: “Việt Nam không sở hữu vũ khí hạt nhân, sinh học hay hóa học, hoặc các chương trình phát triển các loại vũ khí đó, và là một bên tham gia hầu hết các hiệp ước không phổ biến và các thỏa thuận liên quan…”.
    Trong thực tế, từ tháng 6 năm 1982 Việt Nam đã tham gia Hiệp ước Không phổ biến vũ khí hạt nhân (NPT) và chính thức trở thành một quốc gia phi vũ khí hạt nhân. Theo Hiệp ước này, chỉ những nước từng tiến hành các vụ thử bom hạt nhân từ năm 1967 về trước (gồm Mỹ, Nga, Anh, Pháp và Trung quốc) là mặc nhiên được xem có quyền sở hữu các loại vũ khí đó. Còn các quốc gia khác, khi tham gia NPT, sẽ không được theo đuổi việc chế tạo loại vũ khí này, nhưng ngược lại, được quyền tiếp nhận sự chuyển giao, giúp đỡ thiết bị, vật liệu, công nghệ, đào tạo … để triển khai ứng dụng năng lượng nguyên tử vì những mục đích hòa bình.
    Đến năm 1996, Việt Nam lại ký kết Hiệp ước (CTBT) cấm thử vũ khí hạt nhân toàn diện và năm 2006 phê chuẩn CTBT. VN cũng đã ký Hiệp định Bảo đảm an ninh toàn diện với Cơ quan Năng lượng Nguyên tử Quốc tế (IAEA) có hiệu lực vào năm 1990. Ngoài ra, Việt Nam cũng trở thành một thành viên của Hiệp ước Phi vũ khí hạt nhân khu vực Đông Nam Á (Hiệp ước Băng Cốc).`,
    commentCount: 3,
    upvoteCount: 2,
    downvoteCount: 1,
    upvoters: [ 'user00', 'user01' ],
    downvoters: [ 'user02' ],
    comments: [
      {
        id: 'comment03',
        author: mockUsers[1],
        content: 'aaaaaaa asdasd asdas dads a sd qw qwd qw d qwd asd as da d qwwdqwd qw dqwdawas d',
        upvoteCount: 2,
        downvoteCount: 1,
        postedTime: '2019-12-28T01:35:01+0700',
        upvoters: [ 'user00', 'user01' ],
        downvoters: [ 'user02' ],
      },
      {
        id: 'comment04',
        author: mockUsers[2],
        content: 'asd v as sd a  cas c as saasdasd  ca as cas cas c aswe qwe qweqwd  dw qdqw dqw ',
        upvoteCount: 0,
        downvoteCount: 3,
        postedTime: '2019-12-28T02:35:01+0700',
        upvoters: [],
        downvoters: [ 'user00', 'user01', 'user02' ],
      },
      {
        id: 'comment05',
        author: mockUsers[1],
        content: 'aaaaaaa asdasd asdas dads a sd qw qwd qw d qwd asd as da d qwwdqwd qw dqwdawas d',
        upvoteCount: 2,
        downvoteCount: 1,
        postedTime: '2019-12-29T01:35:01+0700',
        upvoters: [ 'user00', 'user01' ],
        downvoters: [ 'user02' ],
      },
    ]
  },
  {
    id: 'post02',
    title: 'Tôi thấy hiện tượng lạ',
    author: mockUsers[2],
    topic: mockTopics[4],
    postedTime: '2019-12-24T01:35:01+0700',
    content: '[1:1] In the beginning when God created the heavens and the earth, [1:2] the earth was a formless void and darkness covered the face of the deep, while a wind from God swept over the face of the waters. [1:3] Then God said, "Let there be light"; and there was light.',
    commentCount: 20,
    upvoteCount: 2,
    downvoteCount: 263,
    upvoters: [],
    downvoters: [],
    comments: [],
  },
  {
    id: 'post03',
    title: `Iran bắn 'một mũi tên trúng hai đích' với Mỹ`,
    author: mockUsers[0],
    topic: mockTopics[3],
    postedTime: '2019-12-24T01:35:01+0700',
    content: `Cuộc tập kích tên lửa của Iran gây ấn tượng cho người dân trong nước về đòn đánh dữ dội, nhưng không gây leo thang căng thẳng với Mỹ.

    "Iraq hứng chịu đợt tập kích bằng 22 tên lửa vào khoảng thời gian từ 1h45 đến 2h45 sáng nay. 17 quả nhằm vào căn cứ không quân Ain al-Asad gần thủ đô Baghdad, trong đó hai quả đạn không phát nổ. 5 tên lửa khác rơi xuống sở chỉ huy liên quân tại thành phố Irbil", Bộ Quốc phòng Iraq hôm 8/1 ra thông cáo cho biết.
    
    Cuộc tấn công rạng sáng 8/1 là động thái leo thang rất đáng kể với chính Iran. Nước này chưa bao giờ trực tiếp phóng tên lửa đạn đạo mang đầu đạn hàng trăm kg vào các vị trí của Mỹ tại Iraq, mà chỉ sử dụng các lực lượng ủy nhiệm sử dụng đạn cối, pháo phản lực (rocket) tập kích căn cứ, đại sứ quán Mỹ trong khu vực.`,
    commentCount: 0,
    upvoteCount: 2,
    downvoteCount: 1,
    upvoters: [ 'user00', 'user01' ],
    downvoters: [ 'user02' ],
    comments: []
  },
];

export const mockTopUsers = [
  {
    user: mockUsers[0],
    commentCount: 2513
  },
  {
    user: mockUsers[1],
    commentCount: 2045
  },
  {
    user: mockUsers[2],
    commentCount: 1893
  },
]

export const currentUser = mockUsers[1];