import './Header.styles.scss';
import { Logo, Account } from 'icons';
import { Link } from 'react-router-dom';
import { Links } from './Links.conponent';

export const Header = () => (
  <div className="header">
    <div className="header__grid-box">
      <div className="header__grid-col-1">
        <Link to="/">
          <Logo className="header__logo" />
        </Link>
      </div>
      <div className="header__grid-col-2">
        <Links />
      </div>
      <div className="header__grid-col-3">
        <Account />
        <span style={{ marginTop: '.4rem', marginLeft: '0.8rem' }}>
          Account
        </span>
      </div>
    </div>
  </div>
);
