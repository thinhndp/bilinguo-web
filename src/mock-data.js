import uuid from 'uuid';

const coBan1 = {
  id: uuid(),
  name: 'Cơ bản 1',
  unlockedIconUrl: 'unlocked-exercise-icons/co-ban-1.png',
  backgroundColor: '#78C800',
  levelReached: 2,
  isUnlocked: true,
  levelProgress: 0,
  exercises: [],
}

const coBan2 = {
  id: uuid(),
  name: 'Cơ bản 2',
  unlockedIconUrl: 'unlocked-exercise-icons/co-ban-2.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  isUnlocked: true,
  levelProgress: 0,
  exercises: [],
}

const cumTu = {
  id: uuid(),
  name: 'Cụm từ',
  unlockedIconUrl: 'unlocked-exercise-icons/cum-tu.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  isUnlocked: true,
  levelProgress: 0,
  exercises: [],
}

const monAn = {
  id: uuid(),
  name: 'Món ăn',
  unlockedIconUrl: 'unlocked-exercise-icons/mon-an.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  isUnlocked: true,
  levelProgress: 0,
  exercises: [],
}

const dongVat = {
  id: uuid(),
  name: 'Động vật',
  unlockedIconUrl: 'unlocked-exercise-icons/dong-vat.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  isUnlocked: true,
  levelProgress: 0,
  exercises: [],
}

const soNhieu = {
  id: uuid(),
  name: 'Số nhiều',
  unlockedIconUrl: 'unlocked-exercise-icons/so-nhieu.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  isUnlocked: true,
  levelProgress: 0,
  exercises: [],
}

const soHuu = {
  id: uuid(),
  name: 'Sở hữu',
  unlockedIconUrl: 'unlocked-exercise-icons/so-huu.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  isUnlocked: true,
  levelProgress: 0,
  exercises: [],
}

const daiTuKhachQuan = {
  id: uuid(),
  name: 'Đại từ',
  unlockedIconUrl: 'unlocked-exercise-icons/dai-tu-khach-quan.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  isUnlocked: true,
  levelProgress: 0,
  exercises: [],
}

const quanAo = {
  id: uuid(),
  name: 'Quần áo',
  unlockedIconUrl: 'unlocked-exercise-icons/quan-ao.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  isUnlocked: true,
  levelProgress: 0,
  exercises: [],
}

const dongTu = {
  id: uuid(),
  name: 'Động từ',
  unlockedIconUrl: 'unlocked-exercise-icons/dong-tu.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  isUnlocked: true,
  levelProgress: 0,
  exercises: [],
}

const mauSac = {
  id: uuid(),
  name: 'Màu sắc',
  unlockedIconUrl: 'unlocked-exercise-icons/mau-sac.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  isUnlocked: true,
  levelProgress: 0,
  exercises: [],
}

const cauHoi = {
  id: uuid(),
  name: 'Câu hỏi',
  unlockedIconUrl: 'unlocked-exercise-icons/cau-hoi.png',
  lockedIconUrl: 'locked-exercise-icons/cau-hoi.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  isUnlocked: false,
  levelProgress: 0,
  exercises: [],
}

const lienTu = {
  id: uuid(),
  name: 'Liên từ',
  unlockedIconUrl: 'unlocked-exercise-icons/lien-tu.png',
  lockedIconUrl: 'locked-exercise-icons/lien-tu.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  isUnlocked: false,
  levelProgress: 0,
  exercises: [],
}

const gioiTu = {
  id: uuid(),
  name: 'Giới từ',
  unlockedIconUrl: 'unlocked-exercise-icons/gioi-tu.png',
  lockedIconUrl: 'locked-exercise-icons/gioi-tu.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  isUnlocked: false,
  levelProgress: 0,
  exercises: [],
}

const thoiGian = {
  id: uuid(),
  name: 'Thời gian',
  unlockedIconUrl: 'unlocked-exercise-icons/thoi-gian.png',
  lockedIconUrl: 'locked-exercise-icons/thoi-gian.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  isUnlocked: false,
  levelProgress: 0,
  exercises: [],
}

const giaDinh = {
  id: uuid(),
  name: 'Gia Đình',
  unlockedIconUrl: 'unlocked-exercise-icons/gia-dinh.png',
  lockedIconUrl: 'locked-exercise-icons/gia-dinh.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  isUnlocked: false,
  levelProgress: 0,
  exercises: [],
}

export const exerciseGroupLvl0 = {
  level: 0,
  rows: [
    [ coBan1 ],
    [ coBan2, cumTu ],
    [ monAn, dongVat ],
    [ soNhieu ],
    [ soHuu, daiTuKhachQuan ]
  ]
};


export const exerciseGroupLvl1 = {
  level: 1,
  rows: [
    [ quanAo ],
    [ dongTu, mauSac ],
    [ cauHoi, lienTu ],
    [ gioiTu ],
    [ thoiGian, giaDinh ],
  ]
};

export const achivements = [
  { id: uuid(), name: "Lửa rừng", iconUrl: "//d35aaqx5ub95lt.cloudfront.net/images/achievements/achievement-flame.svg", star: 3 },
  { id: uuid(), name: "Quán quân", iconUrl: "//d35aaqx5ub95lt.cloudfront.net/images/achievements/achievement-swords.svg", star: 1 },
  { id: uuid(), name: "Thân thiện", iconUrl: "//d35aaqx5ub95lt.cloudfront.net/images/achievements/achievement-envelope.svg", star: 0 },
  { id: uuid(), name: "Vượt mong đợi", iconUrl: "//d35aaqx5ub95lt.cloudfront.net/images/achievements/achievement-medal.svg", star: 1 },
  { id: uuid(), name: "Người chi mạnh tay", iconUrl: "//d35aaqx5ub95lt.cloudfront.net/images/achievements/achievement-lingot.svg", star: 2 },
  { id: uuid(), name: "Ngoài giờ", iconUrl: "//d35aaqx5ub95lt.cloudfront.net/images/achievements/achievement-hourglass.svg", star: 0 },
  { id: uuid(), name: "Thiện xạ", iconUrl: "//d35aaqx5ub95lt.cloudfront.net/images/achievements/achievement-bow.svg", star: 2 }
]