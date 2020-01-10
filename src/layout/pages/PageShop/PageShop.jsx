import React from 'react';
import { Badge, Button, Container } from 'react-bootstrap';

import classes from './PageShop.module.scss';

import MyNavbar from '../../components/MyNavbar/MyNavbar';

const GROUP_ITEMS = [
  {
    title: 'Tăng sức mạnh',
    itemList: [
      {
        imgURL: '//d35aaqx5ub95lt.cloudfront.net/images/icons/streak-freeze.svg',
        title: 'Streak Freeze',
        description: 'Streak Freeze cho phép bạn giữ nguyên streak trong một ngày bạn không có hoạt động nào.',
        price: 10,
      },
      {
        imgURL: '//d35aaqx5ub95lt.cloudfront.net/images/icons/flaming-calendar.svg',
        title: 'Gấp đôi hoặc Mất hết',
        description: 'Nhận được gấp đôi số lingot từ 5 lingot mà bạn bỏ ra nếu bạn giữ được 7 ngày streak.',
        price: 5,
      },
    ]
  },
  {
    title: 'Luyện tập',
    itemList: [
      {
        imgURL: '//d35aaqx5ub95lt.cloudfront.net/images/icons/timed-practice.svg',
        title: 'Luyện tập có tính thời gian',
        description: 'Hãy xem bạn tập luyện các kỹ năng tốt tới đâu với đồng hồ trong Thử thách bấm giờ.',
        price: 15,
      },
    ]
  },
];

const LINGOT_INFO_DETAIL = [
  {
    title: 'Thăng cấp',
    description: `Nhận được <span style="font-weight: bold">1 lingot</span>`
  },
  {
    title: 'Hoàn thành một kỹ năng',
    description: `Nhận được <span style="font-weight: bold">2 lingot</span> khi hoàn tất một kĩ năng `
  },
  {
    title: '10 ngày streak',
    description: `Nhận được <span style="font-weight: bold">1 lingot</span> cho mỗi <span style="font-weight: bold">10 ngày streak</span> (1 cho 10 ngày, 2 cho 20...)`
  },
  {
    title: '',
    description: `<span style="font-style: italic; color: #555;">Ghi chú: Người học sẽ không nhận được Lingot nếu thăng cấp hoặc hoàn tất các kĩ năng nếu dùng bài kiểm tra rút ngắn.</span>`
  },
]

function PageShop() {
  // const [toggler, setToggler] = useState(false);

  const renderClouds = (delay, duration, height) => {
    const clouds = [];

    for (let i = 0; i < 10; i++) {
      const randomPercent = Math.floor(Math.random() * 101);
      const randomDurationRange = Math.floor(Math.random() * (20 - -20)) + -20;

      if (i % 2 === 0) {
        clouds.push(
          <div
            className={`${classes['Cloud']} ${classes['Foreground']}`}
            style={{
              animationDelay: delay * i + 's',
              top: randomPercent + '%',
              // animationDuration: (duration - (i * 4)) + 's',
              animationDuration: (duration + randomDurationRange) + 's',
              height: height + (i * 2.5),
            }}
          ></div>
        );
      } else {
        clouds.push(
          <div
            className={`${classes['Cloud']} ${classes['Background']}`}
            style={{
              animationDelay: delay * i + 's',
              top: randomPercent + '%',
              // animationDuration: (duration * 1.25 - (i * 4)) + 's',
              animationDuration: (duration + randomDurationRange) + 's',
              height: (height / 1.5) + (i * 2.5),
            }}
          ></div>
        );
      }
    }

    return clouds;
  }

  const renderGroupItems = () => {
    return GROUP_ITEMS.map(gropuItem => (
      <div className={classes['group-item-section']}>
        <div className={classes['group-item-section-title']}>
          {gropuItem.title}
        </div>
        <div className={classes['group-item-section-content']}>
          {gropuItem.itemList.map(item => (
            <div className={classes['item-section']}>
              <div className="row">
                <div className="col-4 col-md-2">
                  <div className={classes['item-section-image-container']}>
                    <img src={item.imgURL} alt={item.title} />
                  </div>
                </div>
                <div className="col-8 col-md-6">
                  <div className={classes['item-section-detail']}>
                    <div className={classes['title']}>{item.title}</div>
                    <div className={classes['description']}>{item.description}</div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <Button variant="secondary" size="lg" className={classes['item-section-btn-buy']}>
                    Mua với giá:
                    <div style={{ color: '#ff4b4b', marginLeft: 10, display: 'flex', alignItems: 'center' }}>
                      <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/lingot.svg" alt="Lingot"/>{item.price}
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))
  }

  const renderLingotInfoDetail = () => {
    return LINGOT_INFO_DETAIL.map(detailSection => (
      <div className="row" style={{ marginTop: 5 }}>
        <div className="col-3">
          <div className={classes['detail-title']}>
            {detailSection.title}
          </div>
        </div>
        <div className="col-9">
          <div className={classes['detail-description']} dangerouslySetInnerHTML={{__html: detailSection.description}}></div>
        </div>
      </div>
    ))
  }

  return (
    <div>
      <MyNavbar />
      <Container className={classes['page-content-container']}>
        <div className="row">
          <div className="col-12 col-lg-8">
            {/* Left (Main) Content */}
            <div className={classes['filled-card']}>
              <div className={classes['Clouds']}>
                {renderClouds(4, 60, 20)}
              </div>

              <div className="row">
                <div className="col-12 col-md-10">
                  <div className={classes['card-content-trial']}>
                    <div className={classes['card-content-trial-header']}>
                      <div className="mr-2">Bilinguo</div>
                      <Badge variant="primary" style={{ backgroundColor: '#286ec8', fontSize: 20 }}>PLUS</Badge>
                    </div>
                    <div className={classes['card-content-trial-description']}>Gỡ bỏ quảng cáo, tải các bài học trên thiết bị di động, nhận lần khôi phục streak miễn phí hàng tháng và hỗ trợ sứ mệnh của chúng tôi.</div>
                    <Button variant="secondary" size="lg" style={{ color: '#1cb0f6' }}>Thử miễn phí</Button>
                  </div>
                </div>
              </div>

              <img className={`d-none d-md-block ${classes['card-logo']}`} src="https://d35aaqx5ub95lt.cloudfront.net/images/duo-plus-shop.svg" />
            </div>

            {renderGroupItems()}

            <div className={classes['panel-lingot-info']}>
              <div className={classes['panel-lingot-info-title']}>
                Lingot là gì? <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/lingot.svg" alt="Lingot"/>
              </div>
              <div className={classes['panel-lingot-info-description']}>
                <span style={{ fontWeight: 'bold', color: '#444' }}>Lingot</span> <span style={{ fontStyle: 'italic' }}>[ling-guht]</span> là tiền tệ ảo của Duolingo. Bạn càng học nhiều trên Duolingo, bạn càng nhận được nhiều lingot và dùng để mua vật phẩm trong cửa hàng! Một số cách nhận được lingot:
              </div>
              <div className={classes['panel-lingot-info-detail']}>
                {renderLingotInfoDetail()}
              </div>
            </div>
          </div>

          <div className="d-none d-lg-block col-4">
            {/* Right Content */}
            <div className={classes['outlined-card']}>
              <div className={classes['card-center']}>
                <img src="//d35aaqx5ub95lt.cloudfront.net/images/leagues/placeholder.svg" alt="Leages"/>
                <div className={classes['main-text']}>Mở khóa bảng xếp hạng</div>
                <div className={classes['sub-text']}>Hoàn thành thêm 5 bài học để bắt đầu thi đua</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PageShop;