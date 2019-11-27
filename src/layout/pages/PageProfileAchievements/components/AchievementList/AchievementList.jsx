import React from 'react';
import uuid from 'uuid';

import AchievementListItem from '../AchievementListItem/AchievementListItem';

const ACHIEVEMENTS_MOCKDATA = [
  {
    id: uuid(),
    name: "Lửa rừng",
    description: 'Duy trì streak 2 ngày',
    iconUrl: "//d35aaqx5ub95lt.cloudfront.net/images/achievements/achievement-flame.svg",
    star: 3,
    totalProgress: 2,
    currentProgress: 0,
  },
  {
    id: uuid(),
    name: "Quán quân",
    description: 'Hoàn tất 10 kỹ năng của khóa học',
    iconUrl: "//d35aaqx5ub95lt.cloudfront.net/images/achievements/achievement-swords.svg",
    star: 1,
    totalProgress: 10,
    currentProgress: 4,
  },
  {
    id: uuid(),
    name: "Thân thiện",
    description: 'Theo dõi 3 người bạn',
    iconUrl: "//d35aaqx5ub95lt.cloudfront.net/images/achievements/achievement-envelope.svg",
    star: 0,
    totalProgress: 3,
    currentProgress: 1,
  },
  { id: uuid(),
    name: "Vượt mong đợi",
    description: 'Đạt 100 điểm KN trong một ngày :)',
    iconUrl: "//d35aaqx5ub95lt.cloudfront.net/images/achievements/achievement-medal.svg",
    star: 1,
    totalProgress: 100,
    currentProgress: 0,
  },
  {
    id: uuid(),
    name: "Người chi mạnh tay",
    description: 'Sử dụng 20 lingot',
    iconUrl: "//d35aaqx5ub95lt.cloudfront.net/images/achievements/achievement-lingot.svg",
    star: 2,
    totalProgress: 20,
    currentProgress: 0,
  },
  {
    id: uuid(),
    name: "Ngoài giờ",
    description: 'Hoàn thành bài học trong khoảng 4 giờ đến 8 giờ sáng',
    iconUrl: "//d35aaqx5ub95lt.cloudfront.net/images/achievements/achievement-hourglass.svg",
    star: 0,
    totalProgress: 1,
    currentProgress: 0,
  },
  {
    id: uuid(),
    name: "Thiện xạ",
    description: 'Học 5 bài học hoặc luyện tập mà không bị sai gì cả',
    iconUrl: "//d35aaqx5ub95lt.cloudfront.net/images/achievements/achievement-bow.svg",
    star: 2,
    totalProgress: 5,
    currentProgress: 1,
  },
]

function AchievementList() {
  const renderAchievements = () => {
    return ACHIEVEMENTS_MOCKDATA.map(achievement => {
      return (
        <AchievementListItem
          key={achievement.id}
          name={achievement.name}
          description={achievement.description}
          iconUrl={achievement.iconUrl}
          star={achievement.star}
          totalProgress={achievement.totalProgress}
          currentProgress={achievement.currentProgress}
        />
      )
    })
  }

  return (
    <div>
      {renderAchievements()}
    </div>
  );
}

export default AchievementList;