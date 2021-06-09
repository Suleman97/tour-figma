import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.styles.scss';

const links = [
  {
    path: '/equipemnt',
    title: 'Equiment',
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/blog',
    title: 'Blog',
  },
];

export const Links = () => (
  <div className="header__links">
    {links.map((link) => (
      <Fragment key={link.path}>
        <NavLink className="header__links-text" to={link.path}>
          {link.title}
        </NavLink>
      </Fragment>
    ))}
  </div>
);
