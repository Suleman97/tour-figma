import './Footer.styles.scss';
import { Logo } from 'icons';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { Links } from './Links.component';
import { Links2 } from './Links2.component';

export const Footer = () => (
  <div className="footer">
    <div className="footer-box">
      <div className="footer-box__col-1">
        <Link to="/">
          <Logo className="footer__logo" />
        </Link>
        <Typography.Paragraph className="footer-description">
          Get out there & discover your next <br />
          slope, mountain & destination!
        </Typography.Paragraph>
        <Typography.Paragraph className="footer-copyright">
          Copyright 2019 MNTN, Inc. Terms & Privacy
        </Typography.Paragraph>
      </div>
      <div className="footer-box__col-2">
        <Typography.Paragraph className="link-title">
          More on the blog
        </Typography.Paragraph>
        <Links />
      </div>
      <div className="footer-box__col-3">
        <Typography.Paragraph className="link-title">
          More on MNTN
        </Typography.Paragraph>
        <Links2 />
      </div>
    </div>
  </div>
);
