import React from 'react';
import styled from 'react-emotion';
import { Card, Icon } from 'antd';
import Player from '../rooms/room/player/room-player';
import ripple from '../../services/ripple-api';
import { FadeOut } from '../common/animations/fade';

export const RoomCard = styled(Card)`
  position: relative;
  ${props => (props.expanded ? 'width: 100%' : '')};
  ${props => (props.expanded ? 'height: 100%' : '')};
  ${props => (props.expanded ? '' : 'min-width: 200px')};
  ${props => (props.expanded ? '' : 'max-width: 30vw')};
  margin: ${props => (props.expanded ? '0px' : '0px 16px')};
  cursor: ${props => (props.expanded ? 'auto' : 'pointer')};
  border-radius: 0.3rem;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  &:first-of-type {
    ${props => (props.expanded ? '' : 'margin-left: 15%')};
  }
`;

const ArtworkGradient = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => (props.expanded ? 'calc(0.5625 * 40vw)' : '150px')};
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  background: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
  font-size: 20px;
  font-weight: 500;
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

const Artwork = styled.img`
  position: ${props => (props.expanded ? 'absolute' : '')};
  top: 0px;
  left: 0px;
  height: ${props => (props.expanded ? 'calc(0.5625 * 40vw)' : '150px')};
  width: ${props => (props.expanded ? '100%' : 'auto')};
  ${props => (props.expanded ? `animation: ${FadeOut} linear 500ms` : '')};
  animation-delay: 250ms;
  animation-fill-mode: forwards;
  z-index: 3;

  @media (max-width: 768px) {
    ${props =>
      props.expanded ? 'height: calc(0.5625 * 90vw)' : 'height: 150px'};
  }
`;

const RoomSnippet = ({
  room,
  expanded,
  loading,
  onClick,
  onFollow,
  onJoin
}) => (
  <RoomCard
    bordered={false}
    loading={loading}
    bodyStyle={{ padding: '0px' }}
    onClick={onClick}
    expanded={expanded}
  >
    {room && room.currentTrack ? (
      <span>
        <Artwork expanded={expanded} src={room.currentTrack.artworkUrl} />
        {expanded ? <Player track={room.currentTrack} muted /> : null}
      </span>
    ) : (
      <ArtworkGradient expanded={expanded}>No Artwork</ArtworkGradient>
    )}
    {expanded ? (
      <ButtonContainer>
        <Button onClick={onFollow}>FOLLOW</Button>
        <Button onClick={onJoin}>JOIN</Button>
      </ButtonContainer>
    ) : null}
    <div
      style={{
        padding: '16px',
        borderTop: '1px solid #222',
        borderBottom: '1px solid #111'
      }}
    >
      <h3>{room ? room.name : ''}</h3>
      <h3>
        <Icon style={{ color: 'rgba(256, 256, 256, 0.3)' }} type="user" />{' '}
        {room.creator ? room.creator.username : ''}
      </h3>
      <h3>
        <Icon
          style={{ color: 'rgba(256, 256, 256, 0.3)' }}
          type="environment-o"
        />{' '}
        {room.city ? room.city : ''}
      </h3>
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '16px',
        borderTop: '1px solid #222'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#EF5350"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-star"
        >
          <polygon
            style={{ fill: 'rgba(239, 83, 80, 0.33)' }}
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          />
        </svg>
        <span
          style={{
            color: '#fff',
            marginLeft: '6px',
            fontSize: '16px',
            marginTop: '2px'
          }}
        >
          {room.followers}
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#039BE5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-headphones"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path
            style={{ fill: 'rgba(3, 155, 229, 0.33)' }}
            d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
          />
        </svg>
        <span
          style={{
            color: '#fff',
            marginLeft: '6px',
            fontSize: '16px',
            marginTop: '2px'
          }}
        >
          {room.numUsers}
        </span>
      </div>
    </div>
  </RoomCard>
);

export default RoomSnippet;
