import {createReducer, on} from '@ngrx/store';
import {setCurrentTitle} from './ui-actions';
import {setState} from '../helpers/ngrx.helpers';

export interface UiState {
  currentTitle: string;
  error: any;
}

export const INIT_UI_STATE: UiState = {
  currentTitle: undefined,
  error: undefined
};

export const reducer = createReducer(
  INIT_UI_STATE,
  on(setCurrentTitle, (state, {payload: currentTitle}) =>
    setState({currentTitle}, state)
  )
);


// SELECTORS
export const getCurrentTitle = (state: UiState) => state ? state.currentTitle : null;
export const getError = (state: UiState) => state ? state.error : null;
