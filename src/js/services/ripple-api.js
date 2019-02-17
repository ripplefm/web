import api from 'ripple.fm';
import { getAuthorizeUrl, updateAccessToken } from '../utils/oauth-utils';

if (window.parent === window) {
  updateAccessToken(window.location.hash)
    .then(() => {})
    .catch(() => {});
}

export const refreshImplicitToken = () =>
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
        reject();
      }
    };
    document.body.appendChild(iframe);
  });

const token = localStorage.getItem('access_token');
const ripple = api.create({
  access: token === null ? undefined : token,
  baseURL: process.env.REACT_APP_CORE_API_URL,
  authURL: process.env.REACT_APP_AUTH_URL,
  onAccessTokenExpire: refreshImplicitToken
});

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('access_token');
};

export default ripple;
