import React, { Component } from 'react';
import Router from 'next/router';
import { getOrCreate } from '../lib/services/ripple-api';
import wrapUnauthorized from '../lib/utils/wrap-unauthorized';

export default function(AuthComponent) {
  return class WithUser extends Component {
    static async getInitialProps(context) {
      const ripple = await getOrCreate(context);
      const promises = [wrapUnauthorized(ripple.getCurrentUser())];
      if (AuthComponent.getInitialProps) {
        promises.push(AuthComponent.getInitialProps(context));
      }

      const results = await Promise.all(promises);

      // redirect when user is undefined
      if (results[0] === undefined && context.req) {
        context.res.writeHead(302, {
          Location: '/?error=unauthorized'
        });
        context.res.end();
      } else if (results[0] === undefined) {
        Router.push('/?error=unauthorized');
      } else if (results[1]) {
        return { ...results[1], user: results[0] };
      } else {
        return { user: results[0] };
      }
    }

    render() {
      return <AuthComponent {...this.props} />;
    }
  };
}
