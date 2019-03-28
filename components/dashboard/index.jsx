import React, { Component } from 'react';
import { Layout } from 'antd';
import DashboardMenu from './dashboard-menu';
import DashboardHome from './pages/dashboard-home';

const renderContent = (path, props) => {
  switch (path) {
    default:
      return <DashboardHome {...props} />;
  }
};

export default class Dashboard extends Component {
  render() {
    const { currentPath } = this.props;

    return (
      <Layout style={{ minHeight: '100vh', flexDirection: 'row' }}>
        <DashboardMenu currentPath={currentPath} />
        <Layout.Content style={{ background: '#212121' }}>
          {renderContent(currentPath, this.props)}
        </Layout.Content>
      </Layout>
    );
  }
}
