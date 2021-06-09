import { Typography } from 'antd';
import clsx from 'clsx';
import './Details.styles.scss';
// import img1 from '../../hiking-level.png';

export const Details = ({ img, title, description, isLeftToRight }) => (
  <div
    className={clsx('detail-section', isLeftToRight && 'detail-section__ltr')}
  >
    <div className="detail-section__box">
      <div>
        <Typography.Title className="detail-section__box-title">
          {title}
        </Typography.Title>
        <Typography className="detail-section__box-description">
          {description}
        </Typography>
      </div>
      <div className="detail-section__box-img">
        <img src={img} alt="" />
      </div>
    </div>
  </div>
);
