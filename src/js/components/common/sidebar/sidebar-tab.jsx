import React from 'react';
import styled from 'react-emotion';
import { Tooltip, Icon } from 'antd';

const Tab = styled.div`
  width: 55px;
  height: 55px;
  color: #fff;
  margin: 0px;
  padding: 0px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background ease-in-out 150ms, color ease-in-out 150ms,
    border-right ease-in-out 150ms;

  .ant-tabs-tab-active & {
    padding-left: ${props => (props.open ? '3px' : '0px')};
    border-right: ${props => (props.open ? '3px solid #ef5350' : 'none')};
    background: ${props => (props.open ? 'rgba(0, 0, 0, 0.0t5)' : '')};
    color: ${props => (props.open ? '#ef5350' : '')};
  }
`;

const SidebarTab = ({ open, name, icon, sidebarSelector }) => (
  <Tooltip
    placement="right"
    title={name.toUpperCase()}
    getPopupContainer={() => document.querySelector(sidebarSelector || 'body')}
  >
    <Tab open={open}>
      <Icon type={icon} />
    </Tab>
  </Tooltip>
);

export default SidebarTab;
