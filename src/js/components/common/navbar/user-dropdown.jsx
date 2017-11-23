import React from 'react';
import styled from 'react-emotion';
import { Menu, Dropdown, Icon } from 'antd';

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
  font-size: 16px;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const DropdownMenu = ({ user, logout }) => (
  <MenuWrapper
    mode="inline"
    selectable={false}
    onClick={({ key }) => {
      if (key === 'logout') {
        logout();
      }
    }}
  >
    <Menu.Item>
      <Icon type="user" /> Profile
    </Menu.Item>
    <Menu.Item>
      <Icon type="scan" /> Room
    </Menu.Item>
    <Menu.Item>
      <Icon type="bars" /> Playlists
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logout">
      <Icon type="logout" /> Log Out
    </Menu.Item>
  </MenuWrapper>
);

const UserDropdown = ({ user, logout }) => (
  <Dropdown
    overlay={<DropdownMenu user={user} logout={logout} />}
    trigger={['click']}
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
