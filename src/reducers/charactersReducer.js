import { SET_CHARACTERS } from '../actions/actionTypes';

const initialState = {
  characters: [],
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: action.characters,
        //characters: [action.characters[0], action.characters[1]],
      };
    default:
      return state;
  }
};
