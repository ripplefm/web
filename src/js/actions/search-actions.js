import providers from '../services/providers';

export const actions = {
  SET_PROVIDER: 'SET_PROVIDER',
  START_SEARCH: 'START_SEARCH',
  RECIEVE_SEARCH_RESULTS: 'RECIEVE_SEARCH_RESULTS'
};

export function setProvider(provider) {
  return {
    type: actions.SET_PROVIDER,
    provider
  };
}

function startSearch() {
  return {
    type: actions.START_SEARCH
  };
}

function recieveSearch(results) {
  return {
    type: actions.RECIEVE_SEARCH_RESULTS,
    results
  };
}

let currentQuery = undefined;
export function search(provider, query) {
  return async dispatch => {
    dispatch(startSearch());
    try {
      currentQuery = query;
      if (query.length > 0) {
        const results = await providers[provider].search(query);
        if (query === currentQuery) {
          dispatch(recieveSearch(results));
        }
      } else {
        dispatch(recieveSearch([]));
      }
    } catch (err) {
      dispatch(recieveSearch([]));
    }
  };
}
