import React from 'react';
import styled from 'react-emotion';
import { Button, Icon } from 'antd';

const RoundButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 32px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 12px;
  ${props => (props.loading ? 'color: #c19f9f' : 'color: #eee')};
  ${props => (props.loading ? 'background: #9a201e' : 'background: #ef5350')};
  padding: 0px 12px 0px 16px;
  transition: background ease-in-out 150ms, color ease-in-out 150ms;
  width: 120px;
  float: right;

  &:hover {
    color: #c19f9f;
    background: #9a201e;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
`;

const IconButton = ({ type = 'submit', text, icon, loading }) => (
  <RoundButton
    loading={loading}
    onClick={() => {
      if (!loading) {
        this.submit.click();
      }
    }}
  >
    <button
      type={type}
      style={{ display: 'none' }}
      ref={b => (this.submit = b)}
    />
    {text}
    <IconWrapper>
      <Icon
        type={loading ? 'loading' : icon}
        style={{ fontSize: '12px', color: '#eee' }}
      />
    </IconWrapper>
  </RoundButton>
);

export default IconButton;
