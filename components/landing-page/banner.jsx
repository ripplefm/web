import React from 'react';
import styled from '@emotion/styled';
import { Icon } from 'antd';
import NavBar from '../common/navbar';
import FloatingButton from '../common/buttons/floating-button';
import FakeStation from '../common/fake-station';
import { getRegisterUrl } from '../../lib/utils/oauth-utils';

const BannerContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 70vh;
  background: linear-gradient(-45deg, #e5dc5d, #ef5350);
  overflow: hidden;

  @media (max-width: 992px) {
    height: 60vh;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 35vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StationContainer = styled.div`
  position: absolute;
  width: 30vw;
  height: 30vh;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  perspective: 1500px;

  @media (max-width: 768px) {
    left: 77%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleText = styled.h1`
  font-size: 3.75em;
  font-weight: bolder;
  color: white;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    margin-bottom: 4px;
    font-size: 3em;
  }

  @media (max-width: 400px) {
    font-size: 2.5em;
  }
`;

const SubText = styled.h2`
  color: white;
  margin-bottom: 16px;
  font-size: 1.25em;

  @media (max-width: 768px) {
    margin-bottom: 4px;
    font-size: 1em;
  }
`;

const BannerTriangle = styled.img`
  width: 256px;
  height: 256px;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 0;
  opacity: 0.5;
  transform: translate(50%, -25%) rotate(180deg);
`;

const BannerWave = styled.img`
  width: 125%;
  height: auto;
  position: absolute;
  left: -25%;
  bottom: 0px;
  opacity: 0.1;
  z-index: 0;
`;

const onGetStartedClicked = async () =>
  (window.location.href = await getRegisterUrl());

export default () => (
  <BannerContainer>
    <BannerTriangle src="/static/images/banner-triangle.svg" />
    <BannerWave src="/static/images/banner-wave.svg" />
    <NavBar padded transparent />
    <TextContainer>
      <TitleText>Listen Together</TitleText>
      <SubText>Create an account to start sharing tracks in stations</SubText>
      <ButtonContainer>
        <FloatingButton type="default" onClick={onGetStartedClicked}>
          Get Started
          <Icon type="arrow-right" />
        </FloatingButton>
      </ButtonContainer>
    </TextContainer>
    <StationContainer>
      <FakeStation />
    </StationContainer>
  </BannerContainer>
);
