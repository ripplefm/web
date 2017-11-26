import React, { Component } from 'react';
import { Tabs } from 'antd';
import Search from './search/room-search';
import Sidebar, { SidebarCover } from '../../common/sidebar/sidebar';
import SidebarTab from '../../common/sidebar/sidebar-tab';
import '../../../../css/rooms/room-sidebar.css';

export default class RoomSidebar extends Component {
  state = { open: false, openedOnce: false };

  render() {
    const { open, openedOnce } = this.state;
    const { room } = this.props;
    return (
      <Sidebar className="room-sidebar" open={open}>
        <Tabs
          animated={false}
          tabPosition="right"
          onChange={() => this.setState({ open: true })}
          onTabClick={() =>
            this.setState({ open: !this.state.open, openedOnce: true })
          }
        >
          <Tabs.TabPane
            key="search"
            tab={
              <SidebarTab
                open={open}
                name="search"
                icon="search"
                sidebarSelector=".room-sidebar"
              />
            }
          >
            <Search />
          </Tabs.TabPane>
          <Tabs.TabPane
            key="queue"
            tab={<SidebarTab open={open} name="queue" icon="solution" />}
          >
            <div>Queue content</div>
          </Tabs.TabPane>
          <Tabs.TabPane
            key="history"
            tab={
              <SidebarTab
                open={open}
                name="history"
                icon="clock-circle-o"
                sidebarSelector=".room-sidebar"
              />
            }
          >
            <div>History content</div>
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
      </Sidebar>
    );
  }
}
