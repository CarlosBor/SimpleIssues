import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { CardInfo } from '../../interface/cardInfo';
import { PaginationElement } from '../../interface/pagination-element';

export interface AppState {
  url: string;
  cardInfoList: CardInfo[] | undefined;
  pagination : PaginationElement | undefined;
}

export const initialState: AppState = {
  url: '',
  cardInfoList: undefined,
  pagination : undefined,
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.setUrl, (state, { url:string }) => ({...state, url:string })),
  on(AppActions.setApiResponse, (state, { cardInfoList }) => ({ ...state, cardInfoList })),
  on(AppActions.setLinkHeaders, (state, { pagination }) => ({ ...state, pagination })),
);