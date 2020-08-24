import { SET_CHARACTERS } from './actionTypes';

export const setCharacters = value => ({
  type: SET_CHARACTERS,
  characters: value,
});
