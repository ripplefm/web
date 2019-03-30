import React, { Component } from 'react';
import { Layout } from 'antd';
import DashboardMenu from '../components/dashboard/dashboard-menu';

export default function(DashboardComponent) {
  return class WithDashboardMenu extends Component {
    static async getInitialProps(context) {
      const pageProps =
        DashboardComponent.getInitialProps &&
        (await DashboardComponent.getInitialProps(context));
      return { ...pageProps, currentPath: context.pathname };
    }

    render() {
      const { currentPath } = this.props;
      return (
        <Layout style={{ minHeight: '100vh', flexDirection: 'row' }}>
          <DashboardMenu currentPath={currentPath} />
          <Layout.Content
            style={{ background: '#212121', overflowX: 'hidden ' }}
          >
            <DashboardComponent {...this.props} />
          </Layout.Content>
        </Layout>
      );
    }
  };
}
