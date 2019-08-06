import { charactersReducer } from './charactersReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  charactersState: charactersReducer,
});
