import React from 'react';
import styled from 'react-emotion';
import { Tag } from 'antd';
import FeatureSection from './feature-section';
import RippleExplanation from './ripple-explanation';

const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #19191b;
  padding: 100px 20%;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  flex: 2;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 125%;
  height: auto;
  opacity: 0.1;
  top: 0px;
  left: 5%;
  transform: rotateX(180deg);
  filter: hue-rotate(180deg);
  mix-blend-mode: soft-light;
  z-index: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default () => (
  <Container>
    <BackgroundImage src="/images/banner-wave.svg" />
    <RippleExplanation />
    <FeatureGrid>
      <FeatureSection
        name="stations"
        icon="stations"
        iconBackground="rgba(239,83,80,0.2)"
      >
        Each station has a real-time chat, a queue to add tracks, history, and
        reactions to the current track.
        <br />
        <br />
        Create and manage your own stations or join and follow other stations.
      </FeatureSection>
      <FeatureSection
        name="playlists"
        icon="listeners"
        iconBackground="rgba(3,155,229,0.2)"
      >
        Playlists allow you to collect your favorite tracks from multiple
        providers into one place.
        <br />
        <br />
        We're working hard on adding the ability to import your playlists from
        other platforms such as YouTube, SoundCloud, and Spotify.
      </FeatureSection>
      <FeatureSection
        name={
          <span>
            personalization
            <br />
            <Tag color="#333">COMING SOON</Tag>
          </span>
        }
        icon="personalized"
        iconBackground="rgba(229, 220, 93, 0.2)"
      >
        See personalized recommendations for stations and playlists based on
        your tastes.
      </FeatureSection>
      <FeatureSection
        name={
          <span>
            discover
            <br />
            <Tag color="#333">COMING SOON</Tag>
          </span>
        }
        icon="discover"
        iconBackground="rgba(148, 107, 199, 0.2)"
      >
        Easily preview stations and playlists that match your tastes or try out
        new genres and moods.
      </FeatureSection>
    </FeatureGrid>
  </Container>
);
