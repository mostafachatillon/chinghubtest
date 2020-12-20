import { Link, navigate } from 'gatsby';
import React from 'react';

import { NavButton, NavItem, Show, Profile } from '../navigation';
import { defaultProfileImage } from '@images';
import { noop } from '@utils';

const handleNavigate = (to: string) => () => navigate(to);

export const defaultNavItems: NavItem[] = [
  {
    item: <Link to="/blog">Blog</Link>,
    key: '/blog',
    show: Show.Always,
  },
 {
    item: <Link to="/members">Members</Link>,
    key: '/members',
    show: Show.Always,
  },

  {
    item: <Link to="/projects_list">Projects</Link>,
    key: '/projects_list',
    show: Show.Always,
  },
  {
    item: <NavButton onClick={handleNavigate('/database')}>Data</NavButton>,
    key: '/signin',
    show: Show.Always,
  },
  {
    item: (
      <NavButton onClick={handleNavigate('/projects/create')}>
        Start Project
      </NavButton>
    ),
    key: '/projects/create',
    show: Show.AuthOnly,
  },
  {
    // item gets redefined in navigation
    item: <Profile content={defaultProfileImage} signOut={noop} />,
    key: 'user-avatar-dropdown',
    show: Show.AuthOnly,
  },
];
