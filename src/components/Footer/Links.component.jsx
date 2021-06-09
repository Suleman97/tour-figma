import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.styles.scss';

const links = [
  {
    path: '/about',
    title: 'About MNTN',
  },
  {
    path: '/contributors',
    title: 'Contributors & Writers',
  },
  {
    path: '/write-with-us',
    title: 'Write with us',
  },
  {
    path: '/contact',
    title: 'Contact Us',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy',
  },
];

export const Links = () => (
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
