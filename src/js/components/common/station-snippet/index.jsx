import React from 'react';
import styled from 'react-emotion';
import { Card } from 'antd';
import Artwork, { ArtworkGradient } from './station-snippet-artwork';
import Player from '../../stations/station/player/station-player';

import StationSnippetStats from './station-snippet-stats';

export const StationCard = styled(Card)`
  position: relative;
  ${props => (props.expanded ? 'width: 100%' : '')};
  ${props => (props.expanded ? 'height: 100%' : '')};
  ${props => (props.expanded ? '' : 'min-width: 300px')};
  ${props => (props.expanded ? '' : 'max-width: 30vw')};
  margin: ${props => (props.expanded ? '0px' : '0px 16px')};
  cursor: ${props => (props.expanded ? 'auto' : 'pointer')};
  border-radius: 0.3rem;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  filter: drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.6));
  transition: filter ease-in-out 150ms, transform ease-in-out 150ms;
  transform-style: preserve-3d;

  &:first-of-type {
    ${props => (props.expanded ? '' : 'margin-left: 16px')};
  }

  &:hover {
    ${props =>
      props.expanded ? '' : 'filter: drop-shadow(0 0 0.25rem black);'}
    ${props => (props.expanded ? '' : 'transform: scale(1.02);')}
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #111;
`;

const Button = styled.div`
  flex: 1;
  text-align: center;
  padding: 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background ease-in-out 150ms;

  &:first-of-type {
    border-right: 1px solid #111;
  }

  &:last-of-type {
    border-left: 1px solid #222;
  }

  &:hover {
    background: rgba(256, 256, 256, 0.05);
  }
`;

const StationName = styled.h3`
  color: hsla(0, 0, 95%, 1);
  font-size: 16px;
  letter-spacing: 0.25px;
  font-weight: 500;
`;

const ArtworkContainer = styled.div`
  height: ${props => (props.expanded ? '100%' : '200px')};
  width: ${props => (props.expanded ? '100%' : '300px')};
`;

const StationSnippet = ({
  station,
  expanded,
  loading,
  onClick,
  onFollow,
  onJoin
}) => (
  <StationCard
    bordered={false}
    loading={loading}
    bodyStyle={{ padding: '0px' }}
    onClick={onClick}
    expanded={expanded}
  >
    {station && station.current_track ? (
      <ArtworkContainer expanded={expanded}>
        <Artwork expanded={expanded} src={station.current_track.artwork_url} />
        {expanded ? <Player track={station.current_track} muted /> : null}
      </ArtworkContainer>
    ) : (
      <ArtworkGradient expanded={expanded}>No Artwork</ArtworkGradient>
    )}
    {expanded ? (
      <ButtonContainer>
        <Button onClick={onFollow}>FOLLOW</Button>
        <Button onClick={onJoin}>LISTEN</Button>
      </ButtonContainer>
    ) : null}
    <div
      style={{
        padding: '16px',
        borderTop: '1px solid #222',
        borderBottom: '1px solid #111'
      }}
    >
      <StationName expanded={expanded}>
        {station ? station.name : ''}
      </StationName>
    </div>
    <StationSnippetStats station={station} />
  </StationCard>
);

export default StationSnippet;
