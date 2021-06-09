import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.styles.scss';

const links = [
  {
    path: '/team',
    title: 'The Team',
  },
  {
    path: '/jobs',
    title: 'Jobs',
  },
  {
    path: '/press',
    title: 'Press',
  },
];

export const Links2 = () => (
  <div className="footer__links">
    {links.map((link) => (
      <Fragment key={link.path}>
        <NavLink className="footer__links-text" to={link.path}>
          {link.title}
        </NavLink>
      </Fragment>
    ))}
  </div>
);
