import ripple from '../services/ripple-api';
const { REACT_APP_AUTH_URL, REACT_APP_CLIENT_NAME } = process.env;

function updateUser() {
  setTimeout(async () => {
    try {
      const user = await ripple.getCurrentUser();
      localStorage.setItem('user', JSON.stringify(user));
    } catch (err) {}
  }, 0);
}

const parseHash = hash => {
  return hash
    .substring(1)
    .split('&')
    .map(kv => kv.split('='))
    .reduce((a, b) => {
      a[b[0]] = b[1];
      return a;
    }, {});
};

let clientId = null;
const getOAuthClientId = async () => {
  if (clientId === null || clientId === undefined) {
    const client = await ripple.getClient(REACT_APP_CLIENT_NAME);
    clientId = client.id;
  }
  return clientId;
};

export const updateAccessToken = hash =>
  new Promise((resolve, reject) => {
    if (hash.includes('access_token')) {
      const newToken = parseHash(hash);
      localStorage.setItem('access_token', newToken.access_token);
      window.history.replaceState({}, document.title, '.');
      updateUser();
      resolve(newToken.access_token);
    } else {
      reject();
    }
  });

export const getAuthorizeUrl = async () => {
  return `${REACT_APP_AUTH_URL}/oauth2/authorize?client_id=${await getOAuthClientId()}&redirect_uri=${
    window.location.origin
  }&response_type=token&scope=user:email:read playlists:write stations:write`;
};

export const getLoginUrl = async () => {
  return `${REACT_APP_AUTH_URL}/login?next=${encodeURIComponent(
    `/oauth2/authorize?client_id=${await getOAuthClientId()}&redirect_uri=${
      window.location.origin
    }&response_type=token&scope=user:email:read playlists:write stations:write`
  )}`;
};

export const getRegisterUrl = async () => {
  return `${REACT_APP_AUTH_URL}/register?next=${encodeURIComponent(
    `/oauth2/authorize?client_id=${await getOAuthClientId()}&redirect_uri=${
      window.location.origin
    }&response_type=token&scope=user:email:read playlists:write stations:write`
  )}`;
};
