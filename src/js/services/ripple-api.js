import api from 'ripple.fm';
import {
  parseHash,
  getAuthorizeUrl,
  updateAccessToken
} from '../utils/oauth-utils';

if (window.parent === window) {
  updateAccessToken(window.location.hash)
    .then(() => {})
    .catch(() => {});
}
const token = localStorage.getItem('access_token');
const ripple = api.create({
  access: token === null ? undefined : token,
  baseURL: 'http://localhost:4000',
  onAccessTokenExpire: refreshImplicitToken
});

export const refreshImplicitToken = () =>
  new Promise((resolve, reject) => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = getAuthorizeUrl();
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

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('access_token');
};

export default ripple;
