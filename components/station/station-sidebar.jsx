import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Tabs } from 'antd';
import Sidebar, { SidebarCover } from '../common/sidebar';
import SidebarTab from '../common/sidebar/sidebar-tab';
import Search from '../common/search';

const StyledSidebar = styled(Sidebar)`
  & .ant-tabs-vertical .ant-tabs-tab {
    width: 55px;
    height: 55px;
    background: #212121;
    color: #fff;
    margin: 0px;
    padding: 0px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background ease-in-out 150ms, color ease-in-out 150ms,
      border-right ease-in-out 150ms;
  }

  & .ant-tabs-tab.ant-tabs-tab-active {
    border-right: none;
  }

  & .ant-tabs-ink-bar {
    display: none !important;
  }

  & .ant-tabs-vertical .ant-tabs-bar,
  & .ant-tabs-vertical .ant-tabs-content {
    border: none;
  }
`;

export default class StationSidebar extends Component {
  state = { open: false, openedOnce: false };

  render() {
    const { open, openedOnce } = this.state;
    const { onAddToQueue, user } = this.props;
    return (
      <StyledSidebar className="station-sidebar" open={open}>
        <Tabs
          animated={false}
          tabPosition="right"
          onChange={() => this.setState({ open: true })}
          onTabClick={() =>
            this.setState({ open: !this.state.open, openedOnce: true })
          }
        >
          {user ? (
            <Tabs.TabPane
              key="search"
              tab={<SidebarTab open={open} name="search" icon="search" />}
            >
              <Search onAddToQueue={onAddToQueue} />
            </Tabs.TabPane>
          ) : null}
          <Tabs.TabPane
            key="queue"
            tab={<SidebarTab open={open} name="queue" icon="solution" />}
          >
            <h1>Queue</h1>
          </Tabs.TabPane>
          <Tabs.TabPane
            key="history"
            tab={
              <SidebarTab open={open} name="history" icon="clock-circle-o" />
            }
          >
            <h1>History</h1>
          </Tabs.TabPane>
        </Tabs>
        <SidebarCover
          onClick={() => {
            if (open) {
              this.setState({ open: false });
            }
          }}
          open={open}
          openedOnce={openedOnce}
        />
      </StyledSidebar>
    );
  }
}
