import React from 'react';
import { Icon, Layout } from 'antd';
import LogoText from '../../common/logo-text';
import MenuLink from './menu-link';
import MenuSection from './menu-section';

const isActivePath = path =>
  window.location.pathname === path ? 'true' : undefined;

export default () => (
  <Layout.Sider
    breakpoint="lg"
    collapsedWidth={0}
    width="300"
    style={{ background: '#19191b', position: 'relative' }}
  >
    <LogoText />
    <MenuSection>Browse</MenuSection>
    <MenuLink active={isActivePath('/')} to="/">
      <Icon type="home" /> Home
    </MenuLink>
    <MenuLink active={isActivePath('/stations')} to="/stations" disabled>
      <Icon type="to-top" />
      Popular Stations
    </MenuLink>
    <MenuLink active={isActivePath('/discover')} to="/discover" disabled>
      <Icon type="eye" />
      Discover
    </MenuLink>
    <MenuSection>Stations</MenuSection>
    <MenuLink active={isActivePath('/my-stations')} to="/my-stations" disabled>
      <Icon type="appstore" /> Your Stations
    </MenuLink>
    <MenuLink
      active={isActivePath('/following-stations')}
      to="/following-stations"
      disabled
    >
      <Icon type="star" />
      Following
    </MenuLink>
    <MenuLink
      active={isActivePath('/station-history')}
      to="/station-history"
      disabled
    >
      <Icon type="eye" />
      History
    </MenuLink>
    <MenuLink
      active={isActivePath('/recommended-stations')}
      to="/recommended-stations"
      disabled
    >
      <Icon type="appstore" />
      Recommended
    </MenuLink>
    <MenuSection>Your Playlists</MenuSection>
  </Layout.Sider>
);
