import React, { Component } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';
import StationSnippet, { StationCard } from './station-snippet';
import StationSnippetModal from './modals/station-snippet-modal';

const ScrollbarCover = styled.div`
  width: 100%;
  height: 16px;
  background: #212121;
  position: absolute;
  bottom: 24px;
  left: 0px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 4px;
  margin-left: 16px;
`;

const SnippetContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  overflow-y: visible;
  max-width: 100vw;
  min-height: 350px;
`;

// Provides extra space after scrolling past the last StationCard
const ExtraSpacer = styled.div`
  width: 24px;
  height: 24px;
  opacity: 0;
`;

export default class StationSnippetList extends Component {
  state = {
    clicked: false,
    clickedStation: undefined
  };

  onStationClicked = clickedStation => {
    this.setState({ clicked: true, clickedStation });
  };

  onCloseStationModal = () => {
    this.setState({ clicked: false });
    setTimeout(() => this.setState({ clickedStation: undefined }), 200);
  };

  render() {
    const { clicked, clickedStation } = this.state;
    const { loading, stations, title, limit } = this.props;
    return (
      <div style={{ padding: '48px 0px 48px 0px', position: 'relative' }}>
        <Title>{title}</Title>
        <SnippetContainer>
          {stations
            .slice(0, limit || stations.length)
            .map(station =>
              clickedStation === undefined ||
              clickedStation.slug !== station.slug ? (
                <StationSnippet
                  loading={loading}
                  onClick={() => this.onStationClicked(station)}
                  key={station.slug}
                  station={station}
                />
              ) : (
                <StationCard key={station.slug} style={{ opacity: '0' }} />
              )
            )}
          <ExtraSpacer>.</ExtraSpacer>
        </SnippetContainer>
        <ScrollbarCover />
        <StationSnippetModal
          station={clickedStation}
          visible={!!clickedStation && clicked}
          onJoin={() =>
            Router.push(
              `/stations?slug=${clickedStation.slug}`,
              `/stations/${clickedStation.slug}`
            )
          }
          onCancel={this.onCloseStationModal}
        />
      </div>
    );
  }
}
