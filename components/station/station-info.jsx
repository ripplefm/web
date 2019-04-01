import React, { Component } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { Button } from 'antd';
import FollowStationButton from '../common/buttons/follow-station-button';
import Reactions from './reactions';

const InfoContainer = styled.div`
  position: relative;
  padding: 16px 16px 16px 0px;

  @media (max-width: 768px) {
    padding-left: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  float: left;

  @media (max-width: 768px) {
    float: unset;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  clear: both;

  & button {
    margin-right: 0px;
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    clear: unset;
    margin-top: 16px;

    & button {
      margin-bottom: 0px;
      margin-right: 12px;
    }
  }
`;

const Slide = keyframes`
  0%{ transform: translateX(0%);}
  100%{ transform: translateX(100%);}
`;

const ProgressBar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 4px;
  background: #ef5350;
  overflow: hidden;

  &:after {
    content: '';
    width: 100%;
    height: 4px;
    position: absolute;
    left: 0%;
    top: 0px;
    background: #444;
    animation: ${Slide} linear ${props => props.duration}ms;
    animation-delay: -${props => props.currentTime}ms;
  }
`;

const TrackName = styled.a`
  color: white;
  letter-spacing: 0.05em;
  font-weight: normal;
  font-size: 16px;

  &:nth-of-type(2) {
    opacity: 0.85;
    font-weight: lighter;
  }
`;

export default class Info extends Component {
  render() {
    const { station, canFollow, sendReaction } = this.props;
    return (
      <InfoContainer className="station-info">
        {station && station.current_track ? (
          <ProgressBar
            duration={station.current_track.duration}
            currentTime={station.current_track.current_time}
          />
        ) : null}
        <Container>
          <div>
            {station && station.current_track ? (
              <TrackName
                target="_blank"
                rel="noopener noreferrer"
                href={station.current_track.url}
              >
                {station.current_track.name}
              </TrackName>
            ) : null}
            <br />
            {station && station.current_track ? (
              <TrackName>
                {station.current_track.dj.username === 'autoplayer'
                  ? station.current_track.poster
                  : station.current_track.dj.username}
              </TrackName>
            ) : null}
          </div>
        </Container>
        {station && station.current_track ? (
          <Reactions sendReaction={sendReaction} disabled={!canFollow} />
        ) : null}
        <ButtonContainer>
          <Button icon="share-alt" type="primary" ghost disabled>
            Share
          </Button>
          {station ? (
            <FollowStationButton
              canFollow={canFollow}
              slug={station.slug}
              size="default"
            />
          ) : null}
        </ButtonContainer>
      </InfoContainer>
    );
  }
}
