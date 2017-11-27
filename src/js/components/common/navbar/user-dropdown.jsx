import React from 'react';
import styled from 'react-emotion';
import { Avatar, Dropdown, Icon, Menu } from 'antd';
import MutedText from '../muted-text';

const Wrapper = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #eee;
  margin-right: 16px;
  cursor: pointer;

  &:hover {
    color: #ef5350;
  }
`;

const MenuWrapper = styled(Menu)`
  width: 200px;
  margin-top: 12px;
  font-size: 16px;
  border: none;
  border-radius: 0.3rem;
`;

const UserInfo = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  margin-left: 16px;
`;

const DropdownMenu = ({ user, logout }) => (
  <MenuWrapper
    selectable={false}
    onClick={({ key }) => {
      if (key === 'logout') {
        logout();
      }
    }}
  >
    <Menu.Item
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
    >
      <Avatar
        style={{
          background: 'linear-gradient(335deg, #e5cd5d, #ef5350)',
          color: '#eee',
          marginLeft: '-8px'
        }}
      >
        {user.username.toUpperCase().charAt(0)}
      </Avatar>
      <UserInfo>
        <span>{user.username}</span>
        <MutedText fontSize="12">{user.email}</MutedText>
      </UserInfo>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Icon type="user" /> Profile
    </Menu.Item>
    <Menu.Item>
      <Icon type="scan" /> Room
    </Menu.Item>
    <Menu.Item>
      <Icon type="bars" /> Playlists
    </Menu.Item>
    <Menu.Item key="logout">
      <Icon type="logout" /> Log Out
    </Menu.Item>
  </MenuWrapper>
);

const UserDropdown = ({ user, logout }) => (
  <Dropdown
    overlay={<DropdownMenu user={user} logout={logout} />}
    trigger={['click']}
    placement="bottomCenter"
  >
    <Wrapper>
      {user.username}{' '}
      <Icon
        type="down"
        style={{ fontSize: '10px', fontWeight: 'bold', opacity: '0.75' }}
      />
    </Wrapper>
  </Dropdown>
);

export default UserDropdown;
