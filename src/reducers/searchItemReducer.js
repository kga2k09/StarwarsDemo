import {
    SEARCH_SUCCESS,
    SEARCH_ERROR
} from './../actions/types';

export const results = (state = [], action) => {
    switch (action.type) {
  
      case 'SEARCH_SUCCESS': {
        return [].concat(action.payload.reverse());
      }
  
      case 'SEARCH_ERROR': {
        return [];
      }
  
      default:
        return state;
    }
  };