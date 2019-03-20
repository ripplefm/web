import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Layout } from 'antd';
import DashboardHome from './pages/dashboard-home';
import DashboardMenu from './dashboard-menu';
import MyStations from './pages/my-stations';

export default class Dashboard extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <DashboardMenu />
        <Layout>
          <Layout.Content style={{ background: '#212121' }}>
            <Switch>
              <Route exact path="/" component={DashboardHome} />
              <Route exact path="/my-stations" component={MyStations} />
            </Switch>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}
