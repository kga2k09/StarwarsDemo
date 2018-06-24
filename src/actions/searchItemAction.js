import {
    SEARCH_SUCCESS,
    SEARCH_ERROR
} from './types';

import { search } from '../services/api';

const parseCharacterId = (characters) =>
  characters.map(chars => {
    chars.id = chars.url.match(/\d+/g)[0];
    return chars;
  });

export const searchCharacters = (term) => {
  return (dispatch) => {
    if (!term) {
      return dispatch({ type: "SEARCH_SUCCESS", payload: [] })
    }

    dispatch({ type: "SEARCH_LOADING" });

    search(term)
      .then(res => dispatch({ type: "SEARCH_SUCCESS", payload: parseCharacterId(res.results) }))
      .catch(err => dispatch({ type: "SEARCH_ERROR", payload: err }));
  }
}