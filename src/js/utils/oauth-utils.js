import ripple from '../services/ripple-api';
const { REACT_APP_OAUTH_URL, REACT_APP_CLIENT_ID } = process.env;

function updateUser() {
  setTimeout(async () => {
    try {
      const user = await ripple.getCurrentUser();
      localStorage.setItem('user', JSON.stringify(user));
    } catch (err) {}
  }, 0);
}

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

export const getAuthorizeUrl = () => {
  return `${REACT_APP_OAUTH_URL}/oauth2/authorize?client_id=${
    REACT_APP_CLIENT_ID
  }&redirect_uri=${'http://localhost:3001'}&response_type=token&scope=user:email:read playlists:write stations:write`;
};

export const getLoginUrl = () => {
  return `${REACT_APP_OAUTH_URL}/login?next=${encodeURIComponent(
    `/oauth2/authorize?client_id=${
      REACT_APP_CLIENT_ID
    }&redirect_uri=${'http://localhost:3001'}&response_type=token&scope=user:email:read playlists:write stations:write`
  )}`;
};

export const getRegisterUrl = () => {
  return `${REACT_APP_OAUTH_URL}/register?next=${encodeURIComponent(
    `/oauth2/authorize?client_id=${
      REACT_APP_CLIENT_ID
    }&redirect_uri=${'http://localhost:3001'}&response_type=token&scope=user:email:read playlists:write stations:write`
  )}`;
};
