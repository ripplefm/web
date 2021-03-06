import React from 'react';
import { Tag } from 'antd';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Router, { makePublicRouterInstance } from 'next/router';
import getConfig from 'next/config';
import withGA from 'next-ga';
import NProgress from 'nprogress';
import nookies from 'nookies';
import { Global } from '@emotion/core';
import { parseHash } from '../lib/utils/oauth-utils';
import styles from '../components/styles/common';
const { publicRuntimeConfig } = getConfig();

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class RippleApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  getChildContext() {
    return {
      router: makePublicRouterInstance(this.props.router)
    };
  }

  componentDidMount() {
    if (window.location.hash.includes('access_token')) {
      const hash = parseHash(window.location.hash);
      window.history.replaceState({}, document.title, '.');
      nookies.set(null, 'jwt', hash.access_token);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>ripple.fm</title>
        </Head>
        <Global styles={styles} />
        <Tag style={{ display: 'none' }} />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default withGA(publicRuntimeConfig.googleAnalyticsId, Router)(RippleApp);
