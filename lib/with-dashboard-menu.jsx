import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Layout } from 'antd';
import DashboardMenu from '../components/dashboard/dashboard-menu';

const LayoutContent = styled(Layout.Content)`
  background: #212121;
  overflow-x: hidden;
  margin-left: 300px;

  @media (max-width: 992px) {
    margin-left: 0px;
  }
`;

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
          <LayoutContent>
            <DashboardComponent {...this.props} />
          </LayoutContent>
        </Layout>
      );
    }
  };
}
