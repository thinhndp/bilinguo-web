import uuid from 'uuid';

const coBan1 = {
  id: uuid(),
  name: 'Cơ bản 1',
  unlockedIconUrl: 'unlocked-exercise-icons/co-ban-1.png',
  backgroundColor: '#78C800',
  levelReached: 2,
  levelProgress: 0,
  exercises: [],
}

const coBan2 = {
  id: uuid(),
  name: 'Cơ bản 2',
  unlockedIconUrl: 'unlocked-exercise-icons/co-ban-2.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  levelProgress: 0,
  exercises: [],
}

const cumTu = {
  id: uuid(),
  name: 'Cụm từ',
  unlockedIconUrl: 'unlocked-exercise-icons/cum-tu.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  levelProgress: 0,
  exercises: [],
}

const monAn = {
  id: uuid(),
  name: 'Món ăn',
  unlockedIconUrl: 'unlocked-exercise-icons/mon-an.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  levelProgress: 0,
  exercises: [],
}

const dongVat = {
  id: uuid(),
  name: 'Động vật',
  unlockedIconUrl: 'unlocked-exercise-icons/dong-vat.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  levelProgress: 0,
  exercises: [],
}

const soNhieu = {
  id: uuid(),
  name: 'Số nhiều',
  unlockedIconUrl: 'unlocked-exercise-icons/so-nhieu.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  levelProgress: 0,
  exercises: [],
}

const soHuu = {
  id: uuid(),
  name: 'Sở hữu',
  unlockedIconUrl: 'unlocked-exercise-icons/so-huu.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  levelProgress: 0,
  exercises: [],
}

const daiTuKhachQuan = {
  id: uuid(),
  name: 'Đại từ',
  unlockedIconUrl: 'unlocked-exercise-icons/dai-tu-khach-quan.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  levelProgress: 0,
  exercises: [],
}

const quanAo = {
  id: uuid(),
  name: 'Quần áo',
  unlockedIconUrl: 'unlocked-exercise-icons/quan-ao.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  levelProgress: 0,
  exercises: [],
}

const dongTu = {
  id: uuid(),
  name: 'Động từ',
  unlockedIconUrl: 'unlocked-exercise-icons/dong-tu.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  levelProgress: 0,
  exercises: [],
}

const mauSac = {
  id: uuid(),
  name: 'Màu sắc',
  unlockedIconUrl: 'unlocked-exercise-icons/mau-sac.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  levelProgress: 0,
  exercises: [],
}

const cauHoi = {
  id: uuid(),
  name: 'Câu hỏi',
  unlockedIconUrl: 'unlocked-exercise-icons/cau-hoi.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  levelProgress: 0,
  exercises: [],
}

const lienTu = {
  id: uuid(),
  name: 'Liên từ',
  unlockedIconUrl: 'unlocked-exercise-icons/lien-tu.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  levelProgress: 0,
  exercises: [],
}

const gioiTu = {
  id: uuid(),
  name: 'Giới từ',
  unlockedIconUrl: 'unlocked-exercise-icons/gioi-tu.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  levelProgress: 0,
  exercises: [],
}

const thoiGian = {
  id: uuid(),
  name: 'Thời gian',
  unlockedIconUrl: 'unlocked-exercise-icons/thoi-gian.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
  levelProgress: 0,
  exercises: [],
}

const giaDinh = {
  id: uuid(),
  name: 'Gia Đình',
  unlockedIconUrl: 'unlocked-exercise-icons/gia-dinh.png',
  backgroundColor: '#1CB0F6',
  levelReached: 1,
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