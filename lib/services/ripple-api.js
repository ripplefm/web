import api from 'ripple.fm';
import axios from 'axios';
import nookies from 'nookies';
import getConfig from 'next/config';
import { getAuthorizeUrl, updateAccessToken } from '../utils/oauth-utils';
const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

const isBrowser = typeof window !== 'undefined';

const refreshImplicitTokenBrowser = () =>
  new Promise(async (resolve, reject) => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = await getAuthorizeUrl();
    iframe.onload = () => {
      try {
        const { hash } = iframe.contentWindow.location;
        iframe.parentNode.removeChild(iframe);
        updateAccessToken(hash)
          .then(token => resolve(token))
          .catch(() => reject());
      } catch (err) {
        reject(err);
      }
    };
    document.body.appendChild(iframe);
  });

const refreshImplicitTokenServer = cookie =>
  new Promise(async (resolve, reject) => {
    try {
      await axios.get(await getAuthorizeUrl(), {
        headers: { cookie },
        maxRedirects: 0
      });
      reject();
    } catch (err) {
      if (
        err.response &&
        err.response.status === 302 &&
        err.response.headers.location.includes('access_token')
      ) {
        const tmp = err.response.headers.location
          .split('&')
          .map(t => t.split('=')[1])[0];
        resolve(tmp);
      } else {
        reject(err);
      }
    }
  });

export const getOrCreate = async context => {
  let baseURL = publicRuntimeConfig.coreApiUrl,
    authURL = publicRuntimeConfig.authUrl;
  let token, refreshImplicitToken;
  if (isBrowser) {
    token = nookies.get().jwt;
    refreshImplicitToken = refreshImplicitTokenBrowser;
  } else {
    baseURL = serverRuntimeConfig.coreApiUrl || baseURL;
    authURL = serverRuntimeConfig.authUrl || authURL;
    const cookies = nookies.get(context);
    token = cookies.jwt;
    refreshImplicitToken = () =>
      refreshImplicitTokenServer(context.req.headers.cookie);
    // If user is logged in to auth service but not web service
    // we get an access token for the user
    if (token === undefined && cookies['connect.sid']) {
      try {
        token = await refreshImplicitToken();
        nookies.set(context, 'jwt', token);
      } catch (err) {
        console.error(err);
      }
    }
  }
  return api.create({
    access: token,
    onAccessTokenExpire: refreshImplicitToken,
    baseURL,
    authURL
  });
};

export const getOrCreateUnauthorized = () => {
  let baseURL = publicRuntimeConfig.coreApiUrl,
    authURL = publicRuntimeConfig.authUrl;
  if (isBrowser === false) {
    baseURL = serverRuntimeConfig.coreApiUrl;
    authURL = serverRuntimeConfig.authUrl;
  }

  return api.create({
    baseURL,
    authURL
  });
};
