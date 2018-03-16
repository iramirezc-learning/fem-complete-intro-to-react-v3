// @flow

import axios from 'axios';

import { addAPIData } from './actionCreators';

export function getAPIDetails(imdbID: string) {
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        dispatch(addAPIData(response.data));
      })
      .catch(err => {
        console.error(err); // eslint-disable-line no-console
      });
  };
}

export default function noop() {}
