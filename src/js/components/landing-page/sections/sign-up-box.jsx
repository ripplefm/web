import React from 'react';
import styled from 'react-emotion';
import { Icon } from 'antd';
import Circle from '../../common/circle';
import RoundButton from '../../common/round-button';
import { getRegisterUrl } from '../../../utils/oauth-utils';

const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 100%;
  height: 25vh;
  background: #19191b;
  border-radius: 0px;
  margin: auto;
  background: linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b);
  transition: transform ease-out 1500ms, opacity ease-in-out 750ms;
  overflow: hidden;
  text-align: center;
  position: relative;
`;

const GetStartedText = styled.h1`
  z-index: 1;
  font-weight: bolder;
  font-size: 2.25em;
  letter-spacing: 0.025em;
  color: white;
`;

export default () => (
  <SignUpBox>
    <Circle opacity="0.025" transform="translate(-60%, -40%)" />
    <Circle opacity="0.05" transform="translate(-50%, -30%)" />
    <Circle opacity="0.1" transform="translate(-40%, -20%)" />
    <Circle hiddenXs right opacity="0.025" transform="translate(60%, 40%)" />
    <Circle hiddenXs right opacity="0.05" transform="translate(50%, 30%)" />
    <Circle hiddenXs right opacity="0.1" transform="translate(40%, 20%)" />
    <GetStartedText>Ready to get started?</GetStartedText>
    <RoundButton
      type="primary"
      size="large"
      style={{ marginTop: '24px' }}
      onClick={async () => (window.location.href = await getRegisterUrl())}
    >
      Create an account <Icon type="arrow-right" />
    </RoundButton>
  </SignUpBox>
);
