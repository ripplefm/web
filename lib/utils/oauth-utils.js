import getConfig from 'next/config';
import { getOrCreateUnauthorized } from '../services/ripple-api';
const { publicRuntimeConfig } = getConfig();
const { authUrl, oauthClientName, rippleUrl } = publicRuntimeConfig;

let clientId;
const getOAuthClientId = async () => {
  if (clientId === null || clientId === undefined) {
    const client = await getOrCreateUnauthorized().getClient(oauthClientName);
    clientId = client.id;
  }
  return clientId;
};

export const parseHash = hash => {
  return hash
    .substring(1)
    .split('&')
    .map(kv => kv.split('='))
    .reduce((a, b) => {
      a[b[0]] = b[1];
      return a;
    }, {});
};

export const getAuthorizeUrl = async () => {
  if (typeof window === 'undefined') {
    return `${authUrl}/oauth2/authorize?client_id=${await getOAuthClientId()}&redirect_uri=${rippleUrl}&response_type=token&scope=user:email:read playlists:write stations:write`;
  } else {
    return `${authUrl}/oauth2/authorize?client_id=${await getOAuthClientId()}&redirect_uri=${
      window.location.origin
    }&response_type=token&scope=user:email:read playlists:write stations:write`;
  }
};

export const getLoginUrl = async () => {
  if (typeof window === 'undefined') {
    return `${authUrl}/login?next=${encodeURIComponent(
      `/oauth2/authorize?client_id=${await getOAuthClientId()}&redirect_uri=${rippleUrl}&response_type=token&scope=user:email:read playlists:write stations:write`
    )}`;
  } else {
    return `${authUrl}/login?next=${encodeURIComponent(
      `/oauth2/authorize?client_id=${await getOAuthClientId()}&redirect_uri=${
        window.location.origin
      }&response_type=token&scope=user:email:read playlists:write stations:write`
    )}`;
  }
};

export const getRegisterUrl = async () => {
  if (typeof window === 'undefined') {
    return `${authUrl}/register?next=${encodeURIComponent(
      `/oauth2/authorize?client_id=${await getOAuthClientId()}&redirect_uri=${rippleUrl}&response_type=token&scope=user:email:read playlists:write stations:write`
    )}`;
  } else {
    return `${authUrl}/register?next=${encodeURIComponent(
      `/oauth2/authorize?client_id=${await getOAuthClientId()}&redirect_uri=${
        window.location.origin
      }&response_type=token&scope=user:email:read playlists:write stations:write`
    )}`;
  }
};

export const updateAccessToken = hash =>
  new Promise((resolve, reject) => {
    if (hash.includes('access_token')) {
      const newToken = parseHash(hash);
      window.history.replaceState({}, document.title, '.');
      resolve(newToken.access_token);
    } else {
      reject();
    }
  });
