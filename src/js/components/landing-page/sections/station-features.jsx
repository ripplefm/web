import React, { Component } from 'react';
import styled from '@emotion/styled';
import GradientBar from '../../common/gradient-bar';
import Circle from '../../common/circle';
import FakeRoom from '../fake-room/fake-room';

const SectionContainer = styled.div`
  width: 100%;
  min-height: 65vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 150px;
  padding-bottom: 200px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 75px;
    padding-bottom: 100px;
  }
`;

const SectionTitle = styled.h1`
  color: white;
  font-size: 2.5em;
  font-weight: bolder;
  margin-bottom: 8px;
  letter-spacing: 0.01em;
`;

const StationFeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform ease-in-out 750ms, opacity ease-in-out 750ms;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const DemoStationContainer = styled.div`
  width: 34vw;
  height: 37vh;
  transition: transform ease-in-out 750ms, opacity ease-in-out 750ms;
  margin-right: 128px;

  @media (max-width: 768px) {
    margin: 0px;
    width: 30vw;
    height: auto;
    display: none;
  }
`;

const StationFeatureContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 16px;
  padding-left: 48px;
  margin: 16px 0px;
  cursor: pointer;
  transition: all ease-in-out 250ms;
  z-index: 2;
  filter: ${props => (props.active ? 'unset' : 'grayscale(50%)')};

  &:hover {
    & h1 {
      opacity: ${props => (props.active ? '1' : '0.5')};
    }
  }

  & h1 {
    transition: opacity ease-in-out 150ms;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 2em;
    letter-spacing: 0.05em;
    margin-left: 12px;
  }

  & p {
    letter-spacing: 0.025em;
    font-size: 1.1em;
    transform-origin: center top;
    transition: transform ease-in-out 250ms, opacity ease-in-out 350ms;
    opacity: ${props => (props.active ? '1' : '0')};
    height: ${props => (props.active ? '100%' : '0px')};
    transform: ${props => (props.active ? 'scaleY(1)' : 'scaleY(0)')};
  }
`;

const getVerticalDistance = currentActive => {
  switch (currentActive) {
    case 'video':
      return '15%';
    case 'chat':
      return '120%';
    case 'solution':
      return '228%';
    default:
      return '335%';
  }
};

const ActiveFeatureCard = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 400px;
  height: 100px;
  background: #19191b;
  border-radius: 8px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: transform ease-out 400ms;
  transform: ${props => `translateY(${getVerticalDistance(props.active)})`};

  @media (max-width: 768px) {
    width: 90vw;
    left: 50%;
    transform: ${props =>
      `translate(-50%, ${getVerticalDistance(props.active)})`};
  }
`;

const StationFeatureList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StationFeature = ({ active, img, title, id, desc, onClick }) => (
  <StationFeatureContainer active={active} onClick={onClick} id={id}>
    <div
      style={{
        display: 'flex',
        marginBottom: '8px'
      }}
    >
      <img src={img} alt={`${title} icon`} />
      <h1>{title}</h1>
    </div>
    <p>{desc}</p>
  </StationFeatureContainer>
);

export default class StationFeatures extends Component {
  state = { active: 'video' };
  timeout = null;

  setActive = feature => {
    this.setState({ active: feature });
    this.scheduleTimeout();
  };

  nextActive = () => {
    const { active } = this.state;
    if (active === 'video') {
      this.setActive('chat');
    } else if (active === 'chat') {
      this.setActive('solution');
    } else if (active === 'solution') {
      this.setActive('clock-circle-o');
    } else if (active === 'clock-circle-o') {
      this.setActive('video');
    }
  };

  scheduleTimeout = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    this.timeout = setTimeout(() => this.nextActive(), 7000);
  };

  componentDidMount() {
    this.scheduleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    this.timeout = null;
  }

  render() {
    const { active } = this.state;
    return (
      <SectionContainer>
        <SectionTitle>Station Features</SectionTitle>
        <GradientBar />
        <Circle
          right
          opacity="0.03"
          transform="translate(30%, -25%)"
          xsTransform="translate(60%, -10%)"
        />

        <StationFeaturesContainer>
          <DemoStationContainer>
            <FakeRoom skewDisabled highlight={active} />
          </DemoStationContainer>
          <StationFeatureList>
            <ActiveFeatureCard active={active} />
            <StationFeature
              active={active === 'video'}
              img="/images/icons/video.svg"
              title="Synchronized"
              desc="Seamlessly synchronized video and audio"
              onClick={() => this.setActive('video')}
            />
            <StationFeature
              active={active === 'chat'}
              img="/images/icons/chat.svg"
              title="Live Chat"
              desc="See real time reactions in the chat"
              onClick={() => this.setActive('chat')}
            />
            <StationFeature
              active={active === 'solution'}
              img="/images/icons/collaborative.svg"
              title="Collaborative"
              desc="Take turns playing tracks in the queue"
              onClick={() => this.setActive('solution')}
            />
            <StationFeature
              active={active === 'clock-circle-o'}
              img="/images/icons/clock.svg"
              title="Track History"
              desc="See past tracks and save to your playlists"
              onClick={() => this.setActive('clock-circle-o')}
            />
          </StationFeatureList>
        </StationFeaturesContainer>
      </SectionContainer>
    );
  }
}
