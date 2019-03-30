import React from 'react';
import { Icon, Layout } from 'antd';
import LogoText from '../../common/logo-text';
import MenuLink from './menu-link';
import MenuSection from './menu-section';

export default ({ currentPath }) => (
  <Layout.Sider
    breakpoint="lg"
    collapsedWidth={0}
    width="300"
    style={{
      background: '#19191b',
      position: 'relative',
      zIndex: '99'
    }}
  >
    <LogoText />
    <MenuSection>Browse</MenuSection>
    <MenuLink active={currentPath === '/'} href="/">
      <Icon type="home" /> Home
    </MenuLink>
    <MenuLink active={currentPath === '/stations'} href="/stations" disabled>
      <Icon type="rise" />
      Popular Stations
    </MenuLink>
    <MenuLink active={currentPath === '/discover'} href="/discover" disabled>
      <Icon type="eye" />
      Discover
    </MenuLink>
    <MenuSection>Stations</MenuSection>
    <MenuLink
      active={currentPath === '/my-stations'}
      href="/my-stations"
      disabled
    >
      <Icon type="appstore" /> Your Stations
    </MenuLink>
    <MenuLink
      active={currentPath === '/following-stations'}
      href="/following-stations"
      disabled
    >
      <Icon type="star" />
      Following
    </MenuLink>
    <MenuLink
      active={currentPath === '/station-history'}
      href="/station-history"
      disabled
    >
      <Icon type="clock-circle" />
      History
    </MenuLink>
    <MenuLink
      active={currentPath === '/recommended-stations'}
      href="/recommended-stations"
      disabled
    >
      <Icon type="compass" />
      Recommended
    </MenuLink>
    <MenuSection>Playlists</MenuSection>
  </Layout.Sider>
);
