import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Layout } from 'antd';
import DashboardHome from './pages/dashboard-home';
import DashboardMenu from './dashboard-menu';

export default class Dashboard extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <DashboardMenu />
        <Layout>
          <Layout.Content style={{ background: '#212121' }}>
            <Switch>
              <Route exact path="/" component={DashboardHome} />
            </Switch>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}
