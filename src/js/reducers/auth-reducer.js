import { actions } from '../actions/auth-actions';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
  user: user === null ? undefined : user,
  loading: false,
  error: undefined,
  modalOpen: false,
  modalTab: 'login'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.START_AUTH:
      return { ...state, loading: true, error: undefined };
    case actions.RECIEVE_USER:
      return {
        ...state,
        user: action.user,
        loading: false,
        error: undefined,
        modalOpen: false
      };
    case actions.LOGOUT:
      return { ...state, user: undefined };
    case actions.AUTH_ERROR:
      return { ...state, loading: false, error: action.error };
    case actions.REGISTRATION_SUCCESS:
      return { ...state, loading: false, error: undefined, modalOpen: false };
    case actions.TOGGLE_AUTH_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen,
        modalTab: action.tab,
        error: undefined,
        loading: false
      };
    case actions.SET_AUTH_MODAL_TAB:
      return {
        ...state,
        modalTab: state.loading ? state.modalTab : action.tab,
        error: undefined
      };
    default:
      return state;
  }
}
