import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import styled from '@emotion/styled';
import { Icon } from 'antd';
import Search from '../../common/search';
import Info from '../station-info';
import Chat from '../chat';

const Container = styled.div`
  & .react-swipeable-views {
    height: calc(100% - 48px);
  }
`;

const TabBar = styled.div`
  width: 100%;
  min-height: 48px;
  background: #19191b;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Tab = styled.div`
  height: 48px;
  width: 48px;
  color: ${props => (props.active ? '#ef5350' : '#666')};
  transform-origin: center center;
  transform: ${props =>
    props.active ? 'scale(1.25) translateY(-2px)' : 'unset'};
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 250ms;
  cursor: pointer;

  &:hover {
    color: #ef5350;
    opacity: 0.5;
    transform: scale(1.15) translateY(-1px);
  }
`;

export default class SwipeableTabs extends Component {
  state = { currentIndex: 0 };

  onChangeIndex = index => this.setState({ currentIndex: index });

  render() {
    const { currentIndex } = this.state;
    const {
      user,
      width,
      station,
      canFollow,
      messages,
      sendMessage,
      onAddToQueue
    } = this.props;
    let children = [
      <Search key="search" onAddToQueue={onAddToQueue} />,
      <Info key="info" station={station} canFollow={canFollow} />,
      <h1 key="queue">queue</h1>,
      <h1 key="history">history</h1>
    ];
    let tabIcons = ['search', 'info', 'solution', 'clock-circle-o'];
    if (width < 992) {
      children.push(
        <Chat
          key="chat"
          messages={messages}
          sendMessage={sendMessage}
          user={user}
        />
      );
      tabIcons.push('message');
    }
    // remove search tab if user is not logged in
    if (user === undefined) {
      children = children.slice(1);
      tabIcons = tabIcons.slice(1);
    }

    return (
      <Container className="swipeable-tab-group">
        <SwipeableViews
          className="react-swipeable-views"
          resistance
          index={currentIndex}
          onChangeIndex={this.onChangeIndex}
        >
          {children}
        </SwipeableViews>
        <TabBar>
          {tabIcons.map((tab, index) => (
            <Tab
              active={currentIndex === index}
              key={index}
              onClick={() => this.setState({ currentIndex: index })}
            >
              <Icon type={tab} />
            </Tab>
          ))}
        </TabBar>
      </Container>
    );
  }
}
