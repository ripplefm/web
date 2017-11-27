import React from 'react';
import styled from 'react-emotion';
import { Icon } from 'antd';

const Tab = styled.div`
  width: 24px;
  height: 24px;
  font-size: 10px;
  margin-bottom: 2px;
  color: ${props => (props.active ? '#ef5350' : '#fff')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconTab = ({ active, icon }) => (
  <Tab active={active}>
    <Icon type={icon} />
  </Tab>
);

export default styled.div`
  width: 24px;
  height: calc(30vh - 48px);
  @media (max-width: 768px) {
    display: none;
  }
`;
