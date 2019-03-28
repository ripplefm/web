import React from 'react';
import styled from '@emotion/styled';
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
  z-index: ${props => (props.highlight ? '1' : '0')};
  background: ${props => (props.highlight ? '#212121' : '')};
  border: ${props => (props.highlight ? '1px solid #ef5350' : '')};
  box-shadow: ${props => (props.highlight ? '2px 2px 16px #ef5350' : '')};
  transform: ${props => (props.highlight ? 'scale(1.5)' : '')};
  transition: all ease-in-out 250ms;
`;

export const IconTab = ({ active, icon, highlight }) => (
  <Tab active={active} highlight={highlight === icon}>
    <Icon type={icon} />
  </Tab>
);

export default styled.div`
  width: 24px;
  height: calc(30vh - 48px);
  z-index: ${props =>
    props.children.find(c => c.props.icon === props.highlight) ? '1' : '0'};
  @media (max-width: 768px) {
    display: none;
  }
`;
