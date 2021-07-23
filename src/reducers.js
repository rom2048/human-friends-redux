import {
  CHANGE_SEARCHFIELD,
  REQUEST_HUMANS_PENDING,
  REQUEST_HUMANS_SUCCESS,
  REQUEST_HUMANS_FAILED
} from './constants.js';

const initialStateSearch = {
  searchfield: ''
}

export const searchHumans = (state=initialStateSearch, action={}) => {
  switch(action.type){
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchfield: action.payload});
      // or
      // return { ...state, {searchfield: action.payload }};
    default:
      return state;
  }
}

const initialStateHumans = {
  isPending: false,
  humans: [],
  error: ''
}

export const requestHumans = (state=initialStateHumans, action={}) => {
  switch(action.type){
    case REQUEST_HUMANS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_HUMANS_SUCCESS:
      return Object.assign({}, state, {humans: action.payload, isPending: false})
    case REQUEST_HUMANS_FAILED:
      return Object.assign({}, state, {error: action.payload, isPending: false})
    default:
      return state;
  }
}