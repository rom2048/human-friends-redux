import {
  CHANGE_SEARCHFIELD,
  REQUEST_HUMANS_PENDING,
  REQUEST_HUMANS_SUCCESS,
  REQUEST_HUMANS_FAILED
} from './constants.js';

export const setSearchfield = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
})

export const requestHumans = () => (dispatch) => {
  dispatch({ type: REQUEST_HUMANS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => dispatch({type: REQUEST_HUMANS_SUCCESS, payload: users}))
    .catch(error => dispatch({type: REQUEST_HUMANS_FAILED, payload: error}))
}