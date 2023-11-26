import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { CardInfo } from '../cardInfo';
import { PaginationElement } from '../pagination-element';

export interface AppState {
  url: string;
  cardInfoList : CardInfo[] | undefined;
  pagination : PaginationElement | undefined;
  responseData: any
}

export const initialState: AppState = {
  url: 'https://api.github.com/repositories/20929025/issues?page=50',
  cardInfoList: undefined,
  pagination : undefined,
  responseData: null,
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.setUrl, (state, { url }) => ({...state, url })),
  on(AppActions.setApiResponse, (state, { responseData }) => ({ ...state, responseData }))
);