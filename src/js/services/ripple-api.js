import api from 'ripple.fm';

const tokens = JSON.parse(localStorage.getItem('tokens'));
let access, refresh;
if (tokens !== null) {
  access = tokens.access;
  refresh = tokens.refresh;
}
const ripple = api.create({
  access,
  refresh,
  baseURL: 'http://localhost:3000/v1'
});

ripple.onTokenUpdate((access, refresh) => {
  localStorage.setItem('tokens', JSON.stringify({ access, refresh }));
});

export const logout = () => {
  localStorage.removeItem('tokens');
};

export default ripple;
