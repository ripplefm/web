import React from 'react';
import styled from 'react-emotion';
import NavBar from '../common/navbar/navbar';
import FakeRoom from './fake-room/fake-room';
import { Button } from 'antd';

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

const RoomContainer = styled.div`
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

const HomeButton = styled(Button)`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  text-transform: uppercase;
  border: none;
  ${props => (props.type === 'default' ? 'color: #ef5350' : '')};

  &:first-of-type {
    margin-botttom: 0px;
    margin-right: 12px;
  }

  @media (max-width: 768px) {
    &:first-of-type {
      margin-bottom: 12px;
      margin-right: 0px;
    }
  }
`;

export default () => (
  <BannerContainer>
    <NavBar padded transparent hideLogo />
    <TextContainer>
      <h2>
        Create a room and seamlessly share media with people from all over the
        world.
      </h2>
      <ButtonContainer>
        <HomeButton type="default" icon="eye-o">
          Discover Rooms
        </HomeButton>
        <HomeButton type="primary" icon="plus">
          Create Room
        </HomeButton>
      </ButtonContainer>
    </TextContainer>
    <RoomContainer>
      <FakeRoom />
    </RoomContainer>
  </BannerContainer>
);
